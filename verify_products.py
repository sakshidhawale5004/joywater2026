import pandas as pd
import re

# Read the Excel file
excel_file = r'public\PRICE FOR SHOWERS, BODY JET, BODY SHOWER, HAND SHOWER AND WATERFALL.xlsx'
df = pd.read_excel(excel_file, sheet_name='Sheet1', engine='openpyxl')

# Clean up the dataframe
df = df.dropna(how='all')

# Create a dictionary from Excel
excel_products = {}
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
                'function': str(function).strip() if pd.notna(function) else '',
                'colour': str(colour).strip() if pd.notna(colour) else ''
            }
        except:
            pass

# Read data.ts file
with open('src/lib/catalog/data.ts', 'r', encoding='utf-8') as f:
    data_ts_content = f.read()

# Find all product codes in data.ts
code_pattern = r'"(JW-\d+)"'
codes_in_file = re.findall(code_pattern, data_ts_content)

print("="*100)
print("🔍 PRODUCT VERIFICATION REPORT")
print("="*100)

# Check for duplicates in data.ts
print("\n📋 DUPLICATE CODES IN data.ts:")
print("-"*100)
code_counts = {}
for code in codes_in_file:
    code_counts[code] = code_counts.get(code, 0) + 1

duplicates = {code: count for code, count in code_counts.items() if count > 1 and code.startswith('JW-101')}
if duplicates:
    for code, count in sorted(duplicates.items()):
        if code in excel_products:
            print(f"❌ {code}: appears {count} times | Excel: ₹{excel_products[code]['price']:,} | {excel_products[code]['colour']} | {excel_products[code]['function'][:60]}")
        else:
            print(f"❌ {code}: appears {count} times | NOT IN EXCEL")
else:
    print("✅ No duplicates found")

# Check for missing codes
print("\n📋 CODES IN EXCEL BUT NOT IN data.ts:")
print("-"*100)
missing_codes = []
for code in sorted(excel_products.keys()):
    if code.startswith('JW-101') and code not in codes_in_file:
        missing_codes.append(code)
        print(f"❌ {code}: ₹{excel_products[code]['price']:>7,} | {excel_products[code]['colour']:20} | {excel_products[code]['function'][:50]}")

if not missing_codes:
    print("✅ All Excel codes are in data.ts")

# Check for codes in data.ts but not in Excel
print("\n📋 CODES IN data.ts BUT NOT IN EXCEL:")
print("-"*100)
extra_codes = []
for code in sorted(set(codes_in_file)):
    if code.startswith('JW-101') and code not in excel_products:
        extra_codes.append(code)
        print(f"⚠️  {code}: in data.ts but not in Excel sheet")

if not extra_codes:
    print("✅ All data.ts codes match Excel")

# Summary
print("\n" + "="*100)
print("📊 SUMMARY:")
print("="*100)
print(f"Total products in Excel: {len(excel_products)}")
print(f"Unique codes in data.ts: {len(set(codes_in_file))}")
print(f"Duplicate codes: {len(duplicates)}")
print(f"Missing from data.ts: {len(missing_codes)}")
print(f"Extra in data.ts: {len(extra_codes)}")
print("="*100)
