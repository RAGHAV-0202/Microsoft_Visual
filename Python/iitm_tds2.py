import pandas as pd
# Read the data
# Read the data
users_df = pd.read_csv('users.csv')

# Extract surnames
users_df['surname'] = users_df['name'].str.split().str[-1]  # Last word as surname

# Count occurrences of each surname
most_common_surnames = users_df['surname'].value_counts()

# Get the maximum count and corresponding surnames
max_count = most_common_surnames.max()
common_surnames = most_common_surnames[most_common_surnames == max_count].index.tolist()

# Print the common surnames and their count
print("Most common surname(s):", ', '.join(sorted(common_surnames)))
print("Number of users with the most common surname:", max_count)

