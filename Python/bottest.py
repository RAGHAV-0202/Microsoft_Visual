import requests

BOT_TOKEN = "7884338928:AAGorq94q6_m8Fzy_0-_ogC__6LJYmYX6T8"

url = f"https://api.telegram.org/bot{BOT_TOKEN}/getUpdates"
response = requests.get(url).json()

print(response)  # Check if messages appear

# Extract Chat ID if available
if response["result"]:
    chat_id = response["result"][0]["message"]["chat"]["id"]
    print("Your Chat ID:", chat_id)
else:
    print("No messages found. Try sending a message to your bot first.")
