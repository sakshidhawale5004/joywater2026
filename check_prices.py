import pandas as pd
import json

# Read the Excel file
excel_file = r'public\PRICE FOR SHOWERS, BODY JET, BODY SHOWER, HAND SHOWER AND WATERFALL.xlsx'
df = pd.read_excel(excel_file, sheet_name='Sheet1', engine='openpyxl')

# Clean up the dataframe
df = df.dropna(how='all')  # Remove completely empty rows

# Create a dictionary of products from Excel
excel_products = {}
mismatches = []

print("="*100)
print("PRODUCT COMPARISON: Excel vs data.ts")
print("="*100)

for idx, row in df.iterrows():
    code = row.get('CODE')
    price = row.get('MRP')
    function = row.get('FUNCTION')
    colour = row.get('COLOUR')
    
    if pd.notna(code) and pd.notna(price) and code != 'CODE':
        code_str = str(code).strip()
        try:
            price_int = int(float(price))
            excel_products[code_str] = {
                'price': price_int,
                'function': str(function) if pd.notna(function) else '',
                'colour': str(colour) if pd.notna(colour) else ''
            }
        except:
            pass

# Print all Excel products in organized format
print("\n📋 ALL PRODUCTS FROM EXCEL:")
print("="*100)

current_type = None
for code, details in sorted(excel_products.items()):
    # Detect product type changes
    if code.startswith('JW-101'):
        product_type = "SHOWER"
    else:
        product_type = "OTHER"
    
    if product_type != current_type:
        print(f"\n{'='*100}")
        current_type = product_type
    
    print(f"Code: {code:12} | Price: ₹{details['price']:>7,} | {details['colour']:20} | {details['function'][:50]}")

print("\n" + "="*100)
print(f"\n✅ Total products in Excel: {len(excel_products)}")
print("="*100)

# Save to JSON for easy reference
with open('excel_products.json', 'w') as f:
    json.dump(excel_products, f, indent=2)

print("\n💾 Saved product list to: excel_products.json")
