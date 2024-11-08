import json
from collections import defaultdict
from metaphone import doublemetaphone  # For phonetic clustering

# Step 1: Load the JSON data
with open("D:/Microsoft Visual/Python/city-product-sales.json", "r") as file:
    sales_data = json.load(file)

# Step 2: Initialize a dictionary to group sales by city
sales_by_city = defaultdict(int)

# Step 3: Filter entries for "Hats" and sales >= 51
for entry in sales_data:
    if entry['product'] == 'Hats' and entry['sales'] >= 51:
        # Phonetic clustering of city names
        phonetic_city = doublemetaphone(entry['city'])[0]  # Use the first result of double metaphone
        # Group sales by the phonetic city name
        sales_by_city[phonetic_city] += entry['sales']

# Step 4: Find the city with the highest sales
city_with_max_sales = max(sales_by_city, key=sales_by_city.get)
max_sales = sales_by_city[city_with_max_sales]

print(f"City with the highest unit sales: {city_with_max_sales}")
print(f"Total units sold: {max_sales}")
