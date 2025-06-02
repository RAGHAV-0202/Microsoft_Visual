import pandas as pd
from barcode import Code128
from barcode.writer import ImageWriter
from fpdf import FPDF
import os

# Load the Excel (CSV) file
df = pd.read_csv("D:/Microsoft Visual/Python/hemant_barcode/Quality_Check_curtain.csv")

# Create a directory for barcodes
os.makedirs("barcodes", exist_ok=True)

# Function to generate barcode for FSN
def generate_barcode(fsn, save_path):
    barcode = Code128(fsn, writer=ImageWriter())
    barcode.save(save_path)

# Generate barcodes
barcode_files = {}
for fsn in df["FSN"].unique():
    barcode_path = f"barcodes/{fsn}.png"
    generate_barcode(fsn, barcode_path)
    barcode_files[fsn] = barcode_path

# PDF Constants
A4_WIDTH, A4_HEIGHT = 210, 297  # A4 dimensions in mm
COLS, ROWS = 2, 3  # Two columns, three rows per page
LABEL_W, LABEL_H = A4_WIDTH / COLS - 10, A4_HEIGHT / ROWS - 10
PADDING = 5

# Create PDF
pdf = FPDF('P', 'mm', 'A4')
pdf.set_auto_page_break(auto=True, margin=10)
pdf.add_page()

label_count = 0

# Generate labels
for _, row in df.iterrows():
    qty = row["Qty"]
    fsn = row["FSN"]
    barcode_path = barcode_files.get(fsn, None)

    for _ in range(qty):
        col, row_pos = label_count % COLS, (label_count // COLS) % ROWS
        x, y = PADDING + (LABEL_W + PADDING) * col, PADDING + (LABEL_H + PADDING) * row_pos

        pdf.set_xy(x, y)
        pdf.set_font("Arial", size=8)

        if barcode_path:
            pdf.image(barcode_path, x=x + 5, y=y, w=50, h=20)

        text = f"""FSN: {fsn}\nSKU: {row['SKU']}\nBrand: {row['brand']}\nColor: {row['color_for_refiner']}\n"""
        text += f"Designed for: {row['designed_for']}\nModel: {row['model_number']}\nType: {row['pattern']}\n"
        text += f"MRP: Rs. {row['MRP']} (Incl. taxes)\nGeneric Name: {row['Generic Name']}\nDimensions: {row['Dimensions (in mm/cm)']}\n"
        text += f"Mfg Date: {row['Month & Year of Manufacturing']}\nManufacturer: {row['Manufactured by / Marketed by & Customer Care Details'][:50]}..."
        
        pdf.set_xy(x + 5, y + 30)
        pdf.multi_cell(LABEL_W - 10, 4, text)
        
        label_count += 1
        if label_count % 6 == 0:
            pdf.add_page()

# Save PDF
pdf.output("Labels_Output.pdf")

print("Labels PDF with barcodes generated successfully!")