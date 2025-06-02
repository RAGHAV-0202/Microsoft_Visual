#!/usr/bin/env python3
import os
import re

# ANSI escape sequences for colored output
COLORS = {
    'api': '\033[91m',           # Light Red
    'admin': '\033[92m',         # Light Green
    'dev': '\033[93m',           # Light Yellow
    'staging': '\033[94m',       # Light Blue
    'test': '\033[95m',          # Light Magenta
    'portal': '\033[96m',        # Light Cyan
    'internal': '\033[36m',      # Cyan
    'vpn': '\033[35m',           # Magenta
    'mail': '\033[34m',          # Blue
    'blog': '\033[33m',          # Yellow
    'auth': '\033[32m',          # Green
    'billing': '\033[31m',       # Red
    'cdn': '\033[30m',           # Black
    'docs': '\033[97m',          # White
    'download': '\033[37m',      # Light Gray
    'git': '\033[96m',           # Light Cyan
    'ftp': '\033[95m',           # Light Magenta
    'ldap': '\033[94m',          # Light Blue
    'monitoring': '\033[93m',    # Light Yellow
    'mx': '\033[92m',            # Light Green
    'ns1': '\033[91m',           # Light Red
    'ns2': '\033[97m',           # White
    'ns3': '\033[36m',           # Cyan
    'ns4': '\033[35m',           # Magenta
    'oauth': '\033[34m',         # Blue
    'partner': '\033[33m',       # Yellow
    'proxy': '\033[32m',         # Green
    'reports': '\033[31m',       # Red
    'secure': '\033[30m',        # Black
    'shop': '\033[97m',          # White
    'status': '\033[37m',        # Light Gray
    'support': '\033[96m',       # Light Cyan
    'sysadmin': '\033[95m',      # Light Magenta
    'syslog': '\033[94m',        # Light Blue
    'trac': '\033[93m',          # Light Yellow
    'updates': '\033[92m',       # Light Green
    'video': '\033[91m',         # Light Red
    'webmail': '\033[97m',       # White
    'www': '\033[36m',           # Cyan
    'backup': '\033[35m',        # Magenta
    'chat': '\033[34m',          # Blue
    'demo': '\033[33m',          # Yellow
    'dns': '\033[32m',           # Green
    'files': '\033[31m',         # Red
    'forum': '\033[30m',         # Black
    'gateway': '\033[97m',       # White
    'image': '\033[36m',         # Cyan
    'info': '\033[35m',          # Magenta
    'jobs': '\033[34m',          # Blue
    'log': '\033[33m',           # Yellow
    'mobile': '\033[32m',        # Green
    'office': '\033[31m',        # Red
    'pay': '\033[30m',           # Black
    'wiki': '\033[97m',          # White
    'smtp': '\033[36m',          # Cyan
    'sync': '\033[35m',          # Magenta
    'api-docs': '\033[34m',      # Blue
    'billing-api': '\033[33m',   # Yellow
    'code': '\033[32m',          # Green
    'demo-api': '\033[31m',      # Red
    'mysql': '\033[97m',         # White
    'postgres': '\033[36m',      # Cyan
    'oracle': '\033[35m',        # Magenta
    'mssql': '\033[34m',         # Blue
    'dbadmin': '\033[33m',       # Yellow
    'crm': '\033[32m',           # Green
    'app': '\033[31m',           # Red
    'payment': '\033[30m',       # Black
    'web': '\033[97m',           # White
    'forum': '\033[36m',         # Cyan
    'phpmyadmin': '\033[35m',    # Magenta
    'preprod': '\033[34m',       # Blue
    'qa': '\033[33m',            # Yellow
    'sandbox': '\033[32m',       # Green
    'services': '\033[31m',      # Red
    'staging-admin': '\033[30m', # Black
    'svn': '\033[97m',           # White
    'team': '\033[36m',          # Cyan
    'upload': '\033[35m',        # Magenta
    'vault': '\033[34m',         # Blue
    'voip': '\033[33m',          # Yellow
    'webadmin': '\033[32m',      # Green
    'ws': '\033[31m',            # Red
    'chat': '\033[30m',          # Black
    'firewall': '\033[97m',      # White
    'ldapadmin': '\033[36m',     # Cyan
    'proxy': '\033[35m',         # Magenta
    'sso': '\033[34m',           # Blue
    'dns': '\033[33m',           # Yellow
    'exchange': '\033[32m',      # Green
    'helpdesk': '\033[31m',      # Red
    'imap': '\033[30m',          # Black
    'logs': '\033[97m',          # White
    'account': '\033[36m',       # Cyan
    'access': '\033[35m',        # Magenta
    'cloud': '\033[34m',         # Blue
    'configure': '\033[33m',     # Yellow
    'console': '\033[32m',       # Green
    'dashboard': '\033[31m',     # Red
    'partner': '\033[30m',       # Black
    'payments': '\033[97m',      # White
    'feedback': '\033[36m',      # Cyan
    'manifest': '\033[35m',      # Magenta
    'events': '\033[34m',        # Blue
    'enterprises': '\033[33m',   # Yellow
    'enroll': '\033[32m',        # Green
    'security': '\033[31m',      # Red
    'education': '\033[30m',     # Black
    'default': '\033[0m'         # Reset
}

def filter_and_save_subdomains(input_file, output_dir):
    # Define prefixes to filter
    prefixes = [
        'api', 'admin', 'dev', 'staging', 'test', 'portal', 'internal', 'vpn', 'mail', 'blog', 
        'auth', 'billing', 'cdn', 'docs', 'download', 'git', 'ftp', 'ldap', 'monitoring', 'mx', 
        'ns1', 'ns2', 'ns3', 'ns4', 'oauth', 'partner', 'proxy', 'reports', 'secure', 'shop', 
        'status', 'support', 'sysadmin', 'syslog', 'trac', 'updates', 'video', 'webmail', 'www', 
        'backup', 'chat', 'demo', 'dns', 'files', 'forum', 'gateway', 'image', 'info', 'jobs', 
        'log', 'mobile', 'office', 'pay', 'wiki', 'smtp', 'sync', 'api-docs', 'billing-api', 
        'code', 'demo-api', 'mysql', 'postgres', 'oracle', 'mssql', 'dbadmin', 'crm', 'app', 
        'payment', 'web', 'forum', 'phpmyadmin', 'preprod', 'qa', 'sandbox', 'services', 
        'staging-admin', 'svn', 'team', 'upload', 'vault', 'voip', 'webadmin', 'ws', 'chat', 
        'firewall', 'ldapadmin', 'proxy', 'sso', 'dns', 'exchange', 'helpdesk', 'imap', 'logs',
        'account', 'access', 'cloud', 'configure', 'console', 'dashboard', 'partner', 'payments',
        'feedback', 'manifest', 'events', 'enterprises', 'enroll', 'security', 'education'
    ]
    
    # Convert prefixes to a set for faster lookup
    prefixes_set = set(prefixes)
    
    # Modify prefixes list to combine 'dev' and 'developer'
    prefixes_set.add('developer')  # Add 'developer' to the prefixes set
    
    # Create output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Dictionary to store subdomains by prefix
    subdomain_categories = {prefix: [] for prefix in prefixes}
    subdomain_categories['others'] = []  # For subdomains that don't match any prefix
    
    # Read subdomains from file and categorize
    with open(input_file, 'r') as file:
        subdomains = file.read().strip().split('\n')
        
    for subdomain in subdomains:
        # Find matching prefix
        matched = False
        for prefix in prefixes_set:
            if subdomain.startswith(prefix + '.') or re.match(f'^{prefix}-[a-z]', subdomain):
                # Special case: merge 'dev' and 'developer' subdomains into 'dev'
                if prefix == 'developer':
                    subdomain_categories['dev'].append(subdomain)
                else:
                    subdomain_categories[prefix].append(subdomain)
                matched = True
                break
        if not matched:
            subdomain_categories['others'].append(subdomain)
    
    # Save subdomains to separate files in the specified output directory
    for prefix, subdomain_list in subdomain_categories.items():
        if subdomain_list:
            output_file = os.path.join(output_dir, f'{prefix}_subs.txt')
            try:
                with open(output_file, 'w') as file:
                    file.write('\n'.join(subdomain_list))
                    print(f'{COLORS.get(prefix, COLORS["default"])}Saved {len(subdomain_list)} {prefix} subdomains to {output_file}{COLORS["default"]}')
            except IOError as e:
                print(f'Error writing {prefix} subdomains to {output_file}: {e}')
        else:
            print(f'No {prefix} subdomains found.')
    
    print('All subdomains categorized and saved successfully.')

# Function to prompt user for input
def prompt_user_for_input():
    input_file = input('Enter the path to your subdomains file (.txt): ').strip()
    output_dir = input('Enter the name of the directory to save output files: ').strip()
    return input_file, output_dir

# Example usage:
if __name__ == "__main__":
    input_file, output_dir = prompt_user_for_input()
    
    # Validate input file existence
    if not os.path.isfile(input_file):
        print(f'Error: Input file "{input_file}" not found.')
    else:
        filter_and_save_subdomains(input_file, output_dir)
