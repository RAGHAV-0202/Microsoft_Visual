import os
import subprocess
import argparse
import time
import re
from termcolor import colored
from tqdm import tqdm

TOOL_COLORS = ["cyan", "yellow", "magenta", "blue", "green", "red", "white"]
SUBDOMAIN_REGEX = re.compile(r"(?i)(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}")
DEFAULT_WORDLIST = "/usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt"

def extract_subdomains(text):
    """Extracts valid subdomains from the tool output."""
    return [match.group() for match in SUBDOMAIN_REGEX.finditer(text)]

def run_command(command, output_file, tool_name, color, filter_progress=False):
    """Runs a command, captures live output in terminal, saves only subdomains to file."""
    print(colored(f"\n[+] Running: {tool_name} ({USED}/{TOTAL})\n", color, attrs=["bold"]))

    try:
        subdomains = set()
        temp_file = f"{output_file}.tmp"

        with open(temp_file, "w") as f:
            process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

            for line in iter(process.stdout.readline, ''):
                clean_line = line.strip()
                if filter_progress and ("Progress:" in clean_line or "%" in clean_line):
                    continue  # Skip progress messages
                print(colored(clean_line, color))
                extracted_subdomains = extract_subdomains(clean_line)
                subdomains.update(extracted_subdomains)
                f.write(clean_line + "\n")

            process.stdout.close()
            process.wait()

        if subdomains:
            with open(output_file, "w") as f:
                f.write("\n".join(sorted(subdomains)) + "\n")
            print(colored(f"[✓] {tool_name} results saved in: {output_file}", "green", attrs=["bold"]))
            os.remove(temp_file)
            return True
        else:
            raise Exception("No subdomains found")

    except Exception as e:
        print(colored(f"[✗] {tool_name} failed. Will retry later.", "red", attrs=["bold"]))
        return False

def main():
    """Main function to run subdomain enumeration tools."""
    global USED, TOTAL

    parser = argparse.ArgumentParser(description="Subdomain Extraction Tool")
    parser.add_argument("-u", "--url", required=True, help="Target domain (example.com)")
    parser.add_argument("-o", "--output", required=True, help="Output folder")
    parser.add_argument("-w", "--wordlist", default=DEFAULT_WORDLIST, help="Custom wordlist for brute force")
    args = parser.parse_args()

    domain = args.url
    output_dir = args.output
    wordlist = args.wordlist

    os.makedirs(output_dir, exist_ok=True)

    tools = {
        "subfinder": (f"subfinder -d {domain}", False),
        "assetfinder": (f"assetfinder --subs-only {domain}", False),
        "crtsh": (f"curl -s \"https://crt.sh/?q=%25.{domain}&output=json\" | jq -r '.[].name_value' | sort -u", False),
        "anubis": (f"curl -s \"https://jldc.me/anubis/subdomains/{domain}\" | jq -r '.[]'", False),
        "shodan": (f'curl -s "https://api.shodan.io/dns/domain/{domain}" -G --data-urlencode "key=YOUR_API_KEY" | jq -r ".subdomains[]" | sed "s/$/.{domain}/"', False),
        "findomain": (f"findomain -t {domain}", False),
        "dnsrecon": (f"dnsrecon -d {domain} -D {wordlist} -t brt", False),
        "gobuster": (f"gobuster dns -d {domain} -w {wordlist}", True),
        "ffuf": (f"ffuf -u https://FUZZ.{domain} -w {wordlist} -mc 200", True),
        "c99": (f"wget -O {output_dir}/c99.html 'https://subdomainfinder.c99.nl/scans/2025-03-14/{domain}' && grep -oE '[a-zA-Z0-9._-]+\\.com' {output_dir}/c99.html | sort -u > {output_dir}/c99_domains.txt && rm {output_dir}/c99.html", False),
    }

    TOTAL = len(tools)
    USED = 0
    progress_bar = tqdm(total=TOTAL, desc="Running Tools", bar_format="{l_bar}{bar}| {n_fmt}/{total_fmt}")

    failed_tools = []

    for index, (tool, (command, filter_progress)) in enumerate(tools.items()):
        output_file = os.path.join(output_dir, f"{tool}_subs.txt") if tool not in ["c99", "httpx"] else os.path.join(output_dir, "subdomains.txt")
        success = run_command(command, output_file, tool, TOOL_COLORS[index % len(TOOL_COLORS)], filter_progress)
        if success:
            USED += 1
        else:
            failed_tools.append((tool, command, output_file, TOOL_COLORS[index % len(TOOL_COLORS)], filter_progress))
        progress_bar.update(1)
        time.sleep(0.3)

    if failed_tools:
        print(colored("\n[!] Retrying failed tools...\n", "yellow", attrs=["bold"]))
        for tool, command, output_file, color, filter_progress in failed_tools:
            success = run_command(command, output_file, tool, color, filter_progress)
            if success:
                USED += 1
        progress_bar.update(len(failed_tools))

    progress_bar.close()
    print(colored(f"\n[✓] Subdomain enumeration completed! ({USED}/{TOTAL} tools successful)", "green", attrs=["bold"]))

if __name__ == "__main__":
    main()