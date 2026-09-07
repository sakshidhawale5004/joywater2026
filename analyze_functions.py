import pandas as pd

# Read the Excel file
excel_file = r'public\PRICE FOR SHOWERS, BODY JET, BODY SHOWER, HAND SHOWER AND WATERFALL.xlsx'
df = pd.read_excel(excel_file, sheet_name='Sheet1', engine='openpyxl')

# Clean up the dataframe
df = df.dropna(how='all')

# Group by category and function
functions_by_category = {}

print("="*100)
print("SHOWER FUNCTIONS BY CATEGORY")
print("="*100)

for idx, row in df.iterrows():
    shower_type = row.get('SHOWER')
    function = row.get('FUNCTION')
    
    if pd.notna(shower_type) and pd.notna(function) and function != 'FUNCTION':
        shower_type_str = str(shower_type).strip()
        function_str = str(function).strip()
        
        if shower_type_str not in functions_by_category:
            functions_by_category[shower_type_str] = set()
        
        functions_by_category[shower_type_str].add(function_str)

# Print organized by category
for category, functions in sorted(functions_by_category.items()):
    print(f"\n📦 {category}")
    print("-"*100)
    for func in sorted(functions):
        print(f"  • {func}")

print("\n" + "="*100)
print("\n📋 RECOMMENDED DROPDOWN STRUCTURE:")
print("="*100)

# Categorize functions for dropdowns
ceiling_functions = set()
wall_functions = set()
hand_functions = set()
body_functions = set()

for idx, row in df.iterrows():
    shower_type = str(row.get('SHOWER', '')).strip()
    function = str(row.get('FUNCTION', '')).strip()
    
    if function and function != 'FUNCTION' and function != 'nan':
        if 'Celling' in shower_type or 'Mounted Shower' in shower_type:
            if 'Body' not in function:
                ceiling_functions.add(function)
        if 'Wall' in shower_type:
            if 'Body' in function or 'Dancing' in function:
                body_functions.add(function)
            elif 'Waterfall' in function:
                wall_functions.add(function)
            else:
                wall_functions.add(function)
        if 'Hand' in shower_type:
            hand_functions.add(function)

print("\n🚿 CEILING-MOUNTED SHOWERS:")
for func in sorted(ceiling_functions):
    print(f"  • {func}")

print("\n🚿 WALL-MOUNTED SHOWERS:")
for func in sorted(wall_functions):
    print(f"  • {func}")

print("\n🚿 HAND SHOWERS:")
for func in sorted(hand_functions):
    print(f"  • {func}")

print("\n🚿 BODY JETS & BODY SHOWERS:")
for func in sorted(body_functions):
    print(f"  • {func}")

print("\n" + "="*100)
