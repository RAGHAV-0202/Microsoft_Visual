import requests
import csv
import pandas as pd
from datetime import datetime
import os
from time import sleep

def clean_company_name(company):
    if not company:
        return ""
    # Strip whitespace and @ symbol, convert to uppercase
    return company.strip().lstrip('@').upper()

def get_github_users(api_key):
    headers = {
        'Authorization': f'token {api_key}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    # Search for users in Paris with >200 followers
    base_url = "https://api.github.com/search/users"
    query = "location:Paris followers:>200"
    
    all_users = []
    page = 1
    
    while True:
        response = requests.get(
            f"{base_url}?q={query}&per_page=100&page={page}",
            headers=headers
        )
        
        if response.status_code != 200:
            print(f"Error fetching users: {response.status_code}")
            break
            
        data = response.json()
        if not data['items']:
            break
            
        # Get detailed information for each user
        for user in data['items']:
            sleep(1)  # Rate limiting
            user_response = requests.get(
                f"https://api.github.com/users/{user['login']}",
                headers=headers
            )
            
            if user_response.status_code == 200:
                user_data = user_response.json()
                all_users.append({
                    'login': user_data['login'],
                    'name': user_data['name'] or "",
                    'company': clean_company_name(user_data['company']),
                    'location': user_data['location'] or "",
                    'email': user_data['email'] or "",
                    'hireable': str(user_data['hireable']).lower() if user_data['hireable'] is not None else "",
                    'bio': user_data['bio'] or "",
                    'public_repos': user_data['public_repos'],
                    'followers': user_data['followers'],
                    'following': user_data['following'],
                    'created_at': user_data['created_at']
                })
                print(f"Processed user: {user_data['login']}")
        
        page += 1
    
    return all_users

def get_user_repositories(api_key, login):
    headers = {
        'Authorization': f'token {api_key}',
        'Accept': 'application/vnd.github.v3+json'
    }
    
    # Get up to 500 most recently pushed repositories (5 pages of 100)
    repos = []
    page = 1
    max_pages = 5  # 5 pages * 100 repos = 500 repos
    
    while page <= max_pages:
        response = requests.get(
            f"https://api.github.com/users/{login}/repos",
            params={
                'per_page': 100,
                'page': page,
                'sort': 'pushed',
                'direction': 'desc'
            },
            headers=headers
        )
        
        if response.status_code != 200:
            print(f"Error fetching repositories for {login}: {response.status_code}")
            break
            
        data = response.json()
        if not data:
            break
            
        for repo in data:
            repos.append({
                'login': login,  # Adding owner's login
                'full_name': repo['full_name'],
                'created_at': repo['created_at'],
                'stargazers_count': repo['stargazers_count'],
                'watchers_count': repo['watchers_count'],
                'language': repo['language'] or "",
                'has_projects': str(repo['has_projects']).lower(),
                'has_wiki': str(repo['has_wiki']).lower(),
                'license_name': repo['license']['key'] if repo['license'] else ""
            })
        
        page += 1
        sleep(1)  # Rate limiting
        
        if len(data) < 100:  # If we got less than 100 repos, there are no more pages
            break
    
    return repos

def create_readme(users_df, repos_df):
    total_users = len(users_df)
    total_repos = len(repos_df)
    avg_stars = round(repos_df['stargazers_count'].mean(), 2)
    top_languages = repos_df['language'].value_counts().head(5).to_dict()
    
    readme = f"""# GitHub Users Analysis - Paris

This repository contains data about GitHub users in Paris with more than 200 followers and their repositories.

## Dataset Overview

- Total users analyzed: {total_users}
- Total repositories analyzed: {total_repos}
- Average stars per repository: {avg_stars}

## Top Programming Languages
"""
    
    for lang, count in top_languages.items():
        if lang:  # Only include non-empty languages
            readme += f"- {lang}: {count} repositories\n"
    
    readme += """
## Files

- `users.csv`: Information about GitHub users in Paris with >200 followers
- `repositories.csv`: Details about the public repositories of these users
- `analysis.py`: Python script used to collect and analyze the data

## Repository Fields

### users.csv
- login: GitHub user ID
- name: Full name
- company: Company name (cleaned and standardized)
- location: City
- email: Email address
- hireable: Whether open to being hired
- bio: User biography
- public_repos: Number of public repositories
- followers: Number of followers
- following: Number of users following
- created_at: Account creation date

### repositories.csv
- login: Repository owner's GitHub user ID
- full_name: Full repository name
- created_at: Repository creation date
- stargazers_count: Number of stars
- watchers_count: Number of watchers
- language: Primary programming language
- has_projects: Projects feature enabled
- has_wiki: Wiki feature enabled
- license_name: Repository license key

## Data Collection

Data was collected using the GitHub API on {datetime.now().strftime('%Y-%m-%d')}. Only public information is included.

## License

This dataset is for educational purposes only. Please respect GitHub's terms of service and API usage guidelines.
"""
    return readme

def main():
    # Get API key from environment variable
    api_key = ""
    if not api_key:
        raise ValueError("Please set GITHUB_API_KEY environment variable")
    
    # Fetch users
    print("Fetching users...")
    users = get_github_users(api_key)
    users_df = pd.DataFrame(users)
    
    # Save users data immediately in case of interruption
    users_df.to_csv('users.csv', index=False, quoting=csv.QUOTE_ALL)
    print("Saved users.csv")
    
    # Fetch repositories for each user
    print("\nFetching repositories...")
    all_repos = []
    total_users = len(users)
    
    for i, user in enumerate(users, 1):
        print(f"Fetching repositories for {user['login']} ({i}/{total_users})")
        repos = get_user_repositories(api_key, user['login'])
        all_repos.extend(repos)
        
        # Save repositories periodically in case of interruption
        if i % 10 == 0:  # Save every 10 users
            temp_repos_df = pd.DataFrame(all_repos)
            temp_repos_df.to_csv('repositories.csv', index=False, quoting=csv.QUOTE_ALL)
            print(f"Saved interim repositories.csv ({len(all_repos)} repositories)")
    
    # Final save of repositories
    repos_df = pd.DataFrame(all_repos)
    repos_df.to_csv('repositories.csv', index=False, quoting=csv.QUOTE_ALL)
    print(f"\nSaved final repositories.csv ({len(all_repos)} repositories)")
    
    # Create README
    readme_content = create_readme(users_df, repos_df)
    with open('README.md', 'w') as f:
        f.write(readme_content)
    print("Created README.md")
    
    print("\nDone! Files created: users.csv, repositories.csv, README.md")

if __name__ == "__main__":
    main()