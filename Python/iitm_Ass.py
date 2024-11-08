import datetime
import calendar
import re

def parse_log_line(line):
    """Parses a log line into a dictionary of fields."""
    pattern = r'(\S+) (\S+) (\S+) \[([^\]]+)\] "([^"]*)" (\d+) (\d+) "([^"]*)" "([^"]*)" (\S+) (\S+)'
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
            'user_agent': match.group(9),
            'vhost': match.group(10),
            'server': match.group(11)
        }
    return {}

def is_desired_request(log_entry, start_time, end_time):
    """Checks if the log entry meets the desired criteria."""
    try:
        method, url, _ = log_entry['request'].split()
        timestamp = datetime.datetime.strptime(log_entry['time'], '%d/%b/%Y:%H:%M:%S %z')
        
        if timestamp.weekday() != calendar.SUNDAY:
            return False
        
        return (start_time <= timestamp < end_time) and \
               method == 'GET' and \
               url.startswith('/telugu/') and \
               200 <= int(log_entry['status']) < 300
    except (ValueError, KeyError):
        return False

def main():
    # Set the time zone to GMT-0500
    tz = datetime.timezone(datetime.timedelta(hours=-5))

    with open("D:/Microsoft Visual/Python/data", 'r') as log_file:
        count = 0
        for line in log_file:
            log_entry = parse_log_line(line)
            if log_entry:
                try:
                    timestamp = datetime.datetime.strptime(log_entry['time'], '%d/%b/%Y:%H:%M:%S %z')
                    # Check for requests on Sunday between 00:00 and 22:00
                    if (timestamp.weekday() == calendar.SUNDAY and
                        0 <= timestamp.hour < 22 and
                        log_entry['request'].startswith('GET /telugu/') and
                        200 <= int(log_entry['status']) < 300):
                        count += 1
                except (ValueError, KeyError):
                    continue

    print(f"Number of successful GET requests for /telugu/ on Sundays (00:00 - 22:00): {count}")

if __name__ == "__main__":
    main()
