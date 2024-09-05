# import pandas as pd

# # Load the data from the two Excel files
# file1_df = pd.read_excel('Python\hemant\itemlist.xlsx', sheet_name='Worksheet')  # Replace 'Sheet1' with your sheet name if different
# file2_df = pd.read_excel('Python\hemant\Inventory.xlsx', sheet_name='Sheet1')  # Replace 'Sheet1' with your sheet name if different

# # Ensure column names are as expected (if needed)
# file1_df.columns = ['ASIN']
# file2_df.columns = ['ASIN', 'SKU']

# # Merge the data on the ASIN column
# merged_df = pd.merge(file1_df, file2_df, on='ASIN', how='left')

# # Select only unique ASINs and their corresponding SKUs
# unique_df = merged_df[['ASIN', 'SKU']].drop_duplicates()

# # Save the result to a new Excel file
# unique_df.to_excel('Python\hemant\output_file.xlsx', index=False)

# print("Data processing complete. Check 'output_file.xlsx' for results.")





import pandas as pd
 
# Load the data from the two Excel files
file1_df = pd.read_excel('D:\Microsoft Visual\Python\hemant\itemlist.xlsx', sheet_name='Sheet1')  # Adjust the sheet name if needed
file2_df = pd.read_excel('D:\Microsoft Visual\Python\hemant\Inventory.xlsx', sheet_name='Sheet1')  # Adjust the sheet name if needed

# Ensure column names are as expected (rename if necessary)
file1_df.columns = ['SKU', 'ASIN', 'ASIN Type', 'Suggested Price']
file2_df.columns = ['ASIN', 'SKU']

# Merge file1 with file2 on the ASIN column to populate SKU in file1
merged_df = pd.merge(file1_df, file2_df, on='ASIN', how='left', suffixes=('', '_file2'))

# Update the SKU column in file1 with the SKU from file2
file1_df['SKU'] = merged_df['SKU_file2']

# Save the updated file1 to a new Excel file
file1_df.to_excel(r'd:\Microsoft Visual\Python\hemant\updated_file1.xlsx', index=False)

print("File processing complete. Check 'updated_file1.xlsx' for the updated results.")