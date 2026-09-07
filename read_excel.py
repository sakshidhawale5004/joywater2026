import pandas as pd
import json

# Read the Excel file
excel_file = r'public\PRICE FOR SHOWERS, BODY JET, BODY SHOWER, HAND SHOWER AND WATERFALL.xlsx'

try:
    # Try to read all sheets
    excel_data = pd.read_excel(excel_file, sheet_name=None, engine='openpyxl')
    
    # Print all sheet names
    print("Available sheets:", list(excel_data.keys()))
    print("\n" + "="*80 + "\n")
    
    # Print data from each sheet
    for sheet_name, df in excel_data.items():
        print(f"Sheet: {sheet_name}")
        print("="*80)
        # Convert to string and print to avoid encoding issues
        print(df.to_string())
        print("\n" + "="*80 + "\n")
        
except Exception as e:
    print(f"Error reading Excel: {e}")
    # Try alternative approach with xlrd
    try:
        excel_data = pd.read_excel(excel_file, sheet_name=None, engine='xlrd')
        for sheet_name, df in excel_data.items():
            print(f"Sheet: {sheet_name}")
            print(df.to_string())
            print("\n" + "="*80 + "\n")
    except Exception as e2:
        print(f"Alternative error: {e2}")
