import re
import requests
from urllib.parse import urlparse

# Function to fetch HTML content from a given URL
def fetch_html_content(url):
    try:
        response = requests.get(url, timeout=10)  # Adding timeout for better error handling
        response.raise_for_status()  # Raise exception for bad responses (4xx or 5xx)
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching HTML content from {url}: {e}")
        return None

# Function to find endpoints in src and href attributes of HTML content
def find_endpoints_in_src_href(html_content):
    # Regular expression pattern to find URLs after src= or href=
    pattern = r'(?:src|href)\s*=\s*["\']([^"\']+)["\']'

    # Find all matches of the pattern in the HTML content
    matches = re.findall(pattern, html_content)

    # Initialize dictionaries to store different types of endpoints by extension
    endpoint_extensions = {
        'found_endpoints': set(),
        'www_endpoints': set(),
        'https_endpoints': set(),
        'http_endpoints': set(),
        'js_endpoints': set(),
        'css_endpoints': set(),
        'other_endpoints': set(),
    }

    # Process matches to categorize endpoints
    for match in matches:
        endpoint = match.strip()  # Remove any leading/trailing whitespace

        # Exclude certain URLs (e.g., specific domain)
        if not endpoint.startswith('https://www.example.com'):
            if endpoint.startswith('www.//'):
                endpoint_extensions['www_endpoints'].add(endpoint)
            elif endpoint.startswith('https://'):
                endpoint_extensions['https_endpoints'].add(endpoint)
            elif endpoint.startswith('http://'):
                endpoint_extensions['http_endpoints'].add(endpoint)
            else:
                endpoint_extensions['found_endpoints'].add(endpoint)

            # Categorize by file extension
            if endpoint.lower().endswith('.js'):
                endpoint_extensions['js_endpoints'].add(endpoint)
            elif endpoint.lower().endswith('.css'):
                endpoint_extensions['css_endpoints'].add(endpoint)
            else:
                endpoint_extensions['other_endpoints'].add(endpoint)

    return endpoint_extensions

# Function to prompt for target website domain or list of subdomains from a file
def get_target_domains():
    target_domains = []
    
    # Prompt the user to enter domain/subdomain or file path
    input_path = input("Enter domain/subdomain or file path containing subdomains: ").strip()
    
    # Check if the input path is a file or a single domain
    if urlparse(input_path).scheme in ['http', 'https']:
        # It's a single domain or subdomain, assume https by default
        target_domains.append('https://' + input_path)
    else:
        # Assume it's a file path
        file_path = input_path
        
        try:
            with open(file_path, 'r') as file:
                for line in file:
                    domain = line.strip()
                    if domain and not domain.startswith(('http://', 'https://')):
                        domain = 'https://' + domain  # Assume https by default if not specified
                    target_domains.append(domain)
        except FileNotFoundError:
            print(f"File '{file_path}' not found.")
            return None
    
    return target_domains

# Function to process each domain and extract endpoints
def process_domains(target_domains):
    endpoint_extensions = {
        'found_endpoints': set(),
        'www_endpoints': set(),
        'https_endpoints': set(),
        'http_endpoints': set(),
        'js_endpoints': set(),
        'css_endpoints': set(),
        'other_endpoints': set(),
    }

    for domain in target_domains:
        # Fetch HTML content from the target URL
        html_content = fetch_html_content(domain)

        if html_content:
            # Extract endpoints from HTML content
            extracted_endpoints = find_endpoints_in_src_href(html_content)

            # Merge endpoints from current domain into the main sets
            for key, value in extracted_endpoints.items():
                endpoint_extensions[key].update(value)

    return endpoint_extensions

# Function to generate HTML report dynamically with clickable links
def generate_html_report(target_domains, endpoint_extensions):
    def generate_endpoint_links(endpoints):
        endpoint_links = []
        for endpoint in endpoints:
            # Assuming endpoint is relative path or absolute path
            if endpoint.startswith(('http://', 'https://')):
                endpoint_links.append(f'<div class="endpoint"><a href="{endpoint}" target="_blank">{endpoint}</a></div>')
            else:
                endpoint_links.append(f'<div class="endpoint"><a href="{target_domains[0]}/{endpoint}" target="_blank">{endpoint}</a></div>')
        return "".join(endpoint_links)

    def count_total_links(endpoints):
        return len(endpoints)

    html_report = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Endpoint Analysis Report</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                line-height: 1.6;
                background-color: #f0f0f0;
                margin: 0;
                padding: 20px;
            }}
            .container {{
                max-width: 800px;
                margin: auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }}
            .header {{
                background-color: #4CAF50;
                color: white;
                text-align: center;
                padding: 10px 0;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                margin-bottom: 20px;
            }}
            .section {{
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 4px;
                margin-bottom: 20px;
                padding: 10px;
            }}
            .section h2 {{
                cursor: pointer;
                background-color: #ddd;
                padding: 10px;
                border-radius: 4px;
                margin-top: 0;
            }}
            .endpoint-list {{
                display: none;
                margin-top: 10px;
            }}
            .endpoint-list.active {{
                display: block;
            }}
            .endpoint {{
                padding: 5px;
                margin-bottom: 5px;
                border-bottom: 1px solid #ccc;
            }}
            a {{
                color: #007bff; /* Bootstrap's primary color for links */
                text-decoration: none;
            }}
            a:hover {{
                text-decoration: underline;
            }}
            .js-endpoints {{
                background-color: #ffeeba; /* Light yellow background for .js endpoints */
            }}
            .css-endpoints {{
                background-color: #cfe2f3; /* Light blue background for .css endpoints */
            }}
            .other-endpoints {{
                background-color: #d6d8d9; /* Light gray background for other endpoints */
            }}
        </style>
        <script>
            function toggleEndpoints(sectionId) {{
                var endpoints = document.getElementById(sectionId);
                endpoints.classList.toggle("active");
            }}
        </script>
    </head>
    <body>
        <div class="header">
            <h1>Endpoint Analysis Report</h1>
            <p>Target Domains: {", ".join(target_domains)}</p>
        </div>

        <div class="container">
            <div class="section">
                <h2 onclick="toggleEndpoints('allEndpoints')">All Endpoints ({count_total_links(endpoint_extensions['found_endpoints'])})</h2>
                <div id="allEndpoints" class="endpoint-list">
                    {generate_endpoint_links(endpoint_extensions['found_endpoints'])}
                </div>
            </div>

            <div class="section">
                <h2 onclick="toggleEndpoints('wwwEndpoints')">Endpoints starting with www.// ({count_total_links(endpoint_extensions['www_endpoints'])})</h2>
                <div id="wwwEndpoints" class="endpoint-list">
                    {generate_endpoint_links(endpoint_extensions['www_endpoints'])}
                </div>
            </div>

            <div class="section">
                <h2 onclick="toggleEndpoints('httpsEndpoints')">Endpoints starting with https:// ({count_total_links(endpoint_extensions['https_endpoints'])})</h2>
                <div id="httpsEndpoints" class="endpoint-list">
                    {generate_endpoint_links(endpoint_extensions['https_endpoints'])}
                </div>
            </div>

            <div class="section">
                <h2 onclick="toggleEndpoints('httpEndpoints')">Endpoints starting with http:// ({count_total_links(endpoint_extensions['http_endpoints'])})</h2>
                <div id="httpEndpoints" class="endpoint-list">
                    {generate_endpoint_links(endpoint_extensions['http_endpoints'])}
                </div>
            </div>

            <div class="section">
                <h2 onclick="toggleEndpoints('jsEndpoints')">JavaScript Endpoints ({count_total_links(endpoint_extensions['js_endpoints'])})</h2>
                <div id="jsEndpoints" class="endpoint-list js-endpoints">
                    {generate_endpoint_links(endpoint_extensions['js_endpoints'])}
                </div>
            </div>

            <div class="section">
                <h2 onclick="toggleEndpoints('cssEndpoints')">CSS Endpoints ({count_total_links(endpoint_extensions['css_endpoints'])})</h2>
                <div id="cssEndpoints" class="endpoint-list css-endpoints">
                    {generate_endpoint_links(endpoint_extensions['css_endpoints'])}
                </div>
            </div>

            <div class="section">
                <h2 onclick="toggleEndpoints('otherEndpoints')">Other Endpoints ({count_total_links(endpoint_extensions['other_endpoints'])})</h2>
                <div id="otherEndpoints" class="endpoint-list other-endpoints">
                    {generate_endpoint_links(endpoint_extensions['other_endpoints'])}
                </div>
            </div>
        </div>
    </body>
    </html>
    """
    return html_report

def main():
    # Get target domains from user input
    target_domains = get_target_domains()
    
    if not target_domains:
        print("No valid target domains found. Exiting.")
        return
    
    # Process domains and extract endpoints
    endpoint_extensions = process_domains(target_domains)
    
    if not endpoint_extensions:
        print("No endpoints found. Exiting.")
        return
    
    # Generate HTML report dynamically
    html_report = generate_html_report(target_domains, endpoint_extensions)
    
    # Write HTML report to a file
    with open('endpoint_analysis_report.html', 'w', encoding='utf-8') as file:
        file.write(html_report)
    
    print("HTML report generated successfully!")

if __name__ == "__main__":
    main()
