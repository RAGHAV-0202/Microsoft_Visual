import pandas as pd
from barcode import Code128
from barcode.writer import ImageWriter
from fpdf import FPDF
import os
import re

# Load the CSV File
csv_path = "D:/Microsoft Visual/Python/hemant_barcode/Quality_Check_curtain.csv"
try:
    df = pd.read_csv(csv_path)
    print("CSV loaded successfully.")
except Exception as e:
    print(f"Error loading CSV: {e}")
    exit()

# Create a directory for barcodes
barcode_dir = "barcodes"
os.makedirs(barcode_dir, exist_ok=True)

# Validate FSN
def is_valid_fsn(fsn):
    return bool(re.match(r'^[A-Za-z0-9]+$', str(fsn)))

# Function to generate barcode for FSN
def generate_barcode(fsn):
    if not is_valid_fsn(fsn):
        print(f"Invalid FSN detected (skipped): {fsn}")
        return None
    
    barcode_path = os.path.join(barcode_dir, f"{fsn}.png")

    if os.path.exists(barcode_path):
        print(f"Barcode already exists: {fsn}")
        return barcode_path

    try:
        barcode = Code128(str(fsn), writer=ImageWriter())
        barcode.save(barcode_path)
        print(f"Barcode generated: {barcode_path}")
        return barcode_path
    except Exception as e:
        print(f"Error generating barcode for FSN: {fsn}. Error: {e}")
        return None

# Generate barcodes and store paths
barcode_files = {}
for fsn in df["FSN"].unique():
    barcode_path = generate_barcode(fsn)
    if barcode_path:
        barcode_files[fsn] = barcode_path

print("Barcode generation completed.")

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

# Generate labels in PDF
for _, row in df.iterrows():
    qty = int(row.get("Qty", 1))
    fsn = str(row.get("FSN", "Unknown"))
    barcode_path = barcode_files.get(fsn, None)

    for _ in range(qty):
        col, row_pos = label_count % COLS, (label_count // COLS) % ROWS
        x, y = PADDING + (LABEL_W + PADDING) * col, PADDING + (LABEL_H + PADDING) * row_pos

        pdf.set_xy(x, y)
        pdf.set_font("Arial", size=8)

        if barcode_path and os.path.exists(barcode_path):
            pdf.image(barcode_path, x=x + 5, y=y, w=50, h=20)
        else:
            print(f"Barcode not found for FSN: {fsn}")
            pdf.set_xy(x + 5, y + 10)
            pdf.multi_cell(LABEL_W - 10, 4, "Barcode Missing")

        # Prepare Label Data
        text = f"""FSN: {fsn}\nSKU: {row.get('SKU', 'N/A')}\nBrand: {row.get('brand', 'N/A')}\nColor: {row.get('color_for_refiner', 'N/A')}\n"""
        text += f"Designed for: {row.get('designed_for', 'N/A')}\nModel: {row.get('model_number', 'N/A')}\nType: {row.get('pattern', 'N/A')}\n"
        text += f"MRP: Rs. {row.get('MRP', 'N/A')} (Incl. taxes)\nGeneric Name: {row.get('Generic Name', 'N/A')}\nDimensions: {row.get('Dimensions (in mm/cm)', 'N/A')}\n"
        text += f"Mfg Date: {row.get('Month & Year of Manufacturing', 'N/A')}\nManufacturer: {row.get('Manufactured by / Marketed by & Customer Care Details', 'N/A')[:50]}..."

        pdf.set_xy(x + 5, y + 30)
        pdf.multi_cell(LABEL_W - 10, 4, text)

        label_count += 1
        if label_count % 6 == 0:
            pdf.add_page()

# Save PDF
output_path = "Labels_Output.pdf"
pdf.output(output_path)
print(f"Labels PDF with barcodes generated successfully! Saved to {output_path}")
