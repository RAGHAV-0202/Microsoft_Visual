import re
import datetime
from collections import defaultdict

def parse_log_line(line):
    """Parses a log line into a dictionary of fields."""
    pattern = r'(\S+) (\S+) (\S+) \[([^\]]+)\] "([^"]*)" (\d+) (\S+) "([^"]*)" "([^"]*)" (\S+) (\S+)'
    match = re.match(pattern, line)
    if match:
        return {
            'IP': match.group(1),
            'remote_logname': match.group(2),
            'remote_user': match.group(3),
            'time': match.group(4),
            'request': match.group(5),
            'status': match.group(6),
            'size': match.group(7),
            'referer': match.group(8),
            'user_agent': match.group(9),  # Extract Chrome version from this
            'vhost': match.group(10),
            'server': match.group(11)
        }
    return {}

def extract_chrome_major_version(user_agent):
    """Extracts the major version of Chrome from the User-Agent string."""
    chrome_version_pattern = r'Chrome/(\d+)\.'
    match = re.search(chrome_version_pattern, user_agent)
    if match:
        return match.group(1)  # Return major version (first part of Chrome version)
    return None

def main():
    # Dictionary to store count of requests per Chrome major version
    chrome_version_count = defaultdict(int)

    with open("D:/Microsoft Visual/Python/data", 'r') as log_file:
        for line in log_file:
            log_entry = parse_log_line(line)
            if log_entry:
                try:
                    # Parse the timestamp
                    timestamp = datetime.datetime.strptime(log_entry['time'], '%d/%b/%Y:%H:%M:%S %z')
                    
                    # Filter by date (2024-05-09)
                    if timestamp.strftime('%Y-%m-%d') == '2024-05-29':
                        # Extract major Chrome version from User-Agent
                        chrome_version = extract_chrome_major_version(log_entry['user_agent'])
                        if chrome_version:
                            # Count occurrences of each major Chrome version
                            chrome_version_count[chrome_version] += 1
                
                except (ValueError, KeyError, IndexError):
                    continue

    # Find the most common Chrome major version and its count
    most_common_version, most_common_count = max(chrome_version_count.items(), key=lambda x: x[1])

    print(f"Most common major Chrome version: {most_common_version}")
    print(f"Number of requests by this version on 2024-05-09: {most_common_count}")

if __name__ == "__main__":
    main()
