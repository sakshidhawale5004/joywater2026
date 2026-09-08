import pdfplumber
import json
import re

pdf_path = "JOY WATER BATHROOM ACCESSORIES.pdf"

try:
    accessories = []
    
    with pdfplumber.open(pdf_path) as pdf:
        print(f"Total pages: {len(pdf.pages)}")
        
        for page_num, page in enumerate(pdf.pages, 1):
            text = page.extract_text()
            
            if text:
                print(f"\n=== PAGE {page_num} ===")
                print(text[:500])  # Print first 500 chars
                
                # Try to extract product codes (JW-XXXX format)
                codes = re.findall(r'JW-[\w-]+', text)
                if codes:
                    print(f"Found codes: {codes}")
                
                # Try to extract prices
                prices = re.findall(r'₹[\s]?[\d,]+', text)
                if prices:
                    print(f"Found prices: {prices}")
                
                # Save full text for first 10 pages
                if page_num <= 10:
                    with open(f"page_{page_num}_text.txt", "w", encoding="utf-8") as f:
                        f.write(text)
    
    print("\nExtraction complete! Check page_X_text.txt files for details.")

except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
