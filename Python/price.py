import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
import datetime
import time

# Telegram Bot Details
TELEGRAM_BOT_TOKEN = "7884338928:AAGorq94q6_m8Fzy_0-_ogC__6LJYmYX6T8"
CHAT_ID = "5989512301"

# MongoDB Setup
client = MongoClient("mongodb://localhost:27017/")
db = client["amazon_tracker"]
collection = db["products"]

# Function to extract product links from Best Sellers Page
def get_best_sellers():
    url = "https://www.amazon.in/gp/bestsellers/"
    headers = {"User-Agent": "Mozilla/5.0"}
    
    print("[INFO] Fetching best seller products...")
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"[ERROR] Failed to fetch Amazon best sellers. Status code: {response.status_code}")
        return []

    soup = BeautifulSoup(response.text, "html.parser")

    products = []
    for item in soup.find_all("a", class_="a-link-normal"):
        link = "https://www.amazon.in" + item["href"]
        if "/dp/" in link:
            products.append(link)
    
    print(f"[INFO] Found {len(products)} product links.")
    return products

# Function to scrape product price
def get_amazon_price(url):
    headers = {"User-Agent": "Mozilla/5.0"}
    
    print(f"[INFO] Fetching price for {url}")
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"[ERROR] Failed to fetch product details. Status code: {response.status_code}")
        return None, None

    soup = BeautifulSoup(response.text, "html.parser")

    name = soup.find("span", {"id": "productTitle"})
    price = soup.find("span", {"class": "a-price-whole"})
    
    product_name = name.text.strip() if name else "Unknown Product"
    
    if price:
        product_price = price.text.replace(",", "").strip()
        if "." in product_price:
            product_price = product_price.split(".")[0]
        try:
            product_price = int(product_price)
        except ValueError:
            print(f"[ERROR] Unable to convert price '{product_price}' to int.")
            return product_name, None
    else:
        product_price = None

    print(f"[INFO] Extracted: {product_name} - ₹{product_price}")
    return product_name, product_price

# Function to store price history in MongoDB
def save_price(product_id, name, price, url):
    collection.update_one(
        {"product_id": product_id},
        {
            "$set": {"name": name, "url": url},
            "$push": {"price_history": {"price": price, "date": datetime.datetime.now()}}
        },
        upsert=True
    )
    print(f"[INFO] Price history updated for {name} (ID: {product_id}) - ₹{price}")

# Function to check for price drops
def check_price_drop(product_id, new_price):
    product = collection.find_one({"product_id": product_id})
    if product and "price_history" in product and len(product["price_history"]) > 1:
        old_price = product["price_history"][-1]["price"]
        if new_price < old_price:
            print(f"[INFO] Price drop detected: {product['name']} from ₹{old_price} to ₹{new_price}")
            return old_price - new_price
    return None

# Function to send Telegram alert
def send_telegram_alert(product_name, old_price, new_price, url):
    message = f"🔥 Price Drop Alert 🔥\n\n{product_name}\nOld Price: ₹{old_price}\nNew Price: ₹{new_price}\n🔗 {url}"
    response = requests.get(f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage?chat_id={CHAT_ID}&text={message}")

    if response.status_code == 200:
        print(f"[INFO] Telegram alert sent for {product_name}!")
    else:
        print(f"[ERROR] Failed to send Telegram alert. Status: {response.status_code}, Response: {response.text}")

# Main function to scan Amazon and check price drops
def amazon_price_tracker():
    while True:
        product_urls = get_best_sellers()
        for url in product_urls:
            product_id = url.split("/dp/")[1].split("/")[0]
            name, new_price = get_amazon_price(url)

            if new_price is not None:
                drop = check_price_drop(product_id, new_price)
                if drop:
                    send_telegram_alert(name, collection.find_one({"product_id": product_id})["price_history"][-1]["price"], new_price, url)
                save_price(product_id, name, new_price, url)
        
        print("[INFO] Sleeping for 1 hour before next scan...\n")
        time.sleep(3600)  # Run every hour

# Run script
if __name__ == "__main__":
    amazon_price_tracker()
