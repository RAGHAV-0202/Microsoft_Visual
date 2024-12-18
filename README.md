# GitHub Users Analysis - Paris

This repository contains data about GitHub users in Paris with more than 200 followers and their repositories.

## Dataset Overview

- Total users analyzed: 381
- Total repositories analyzed: 37382
- Average stars per repository: 52.65

## Top Programming Languages
- JavaScript: 5640 repositories
- Python: 3589 repositories
- HTML: 1710 repositories
- PHP: 1669 repositories

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
