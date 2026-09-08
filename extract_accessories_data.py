import PyPDF2
import re
import json

def extract_bathroom_accessories_data(pdf_path):
    """Extract product names, codes, and prices from the PDF."""
    
    products = []
    
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            print(f"Total pages: {len(pdf_reader.pages)}")
            
            all_text = ""
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()
                all_text += text + "\n\n--- PAGE BREAK ---\n\n"
                print(f"\n=== Page {page_num + 1} ===")
                print(text[:500])  # Print first 500 chars of each page
            
            # Save full text for manual inspection
            with open('bathroom_accessories_full_text.txt', 'w', encoding='utf-8') as f:
                f.write(all_text)
            
            print("\n\nFull text saved to bathroom_accessories_full_text.txt")
            
            # Try to extract product patterns
            # Common patterns: JW-XXXX or product code followed by price
            code_pattern = r'JW-\d+'
            price_pattern = r'₹\s*[\d,]+(?:\.\d{2})?|Rs\.?\s*[\d,]+(?:\.\d{2})?'
            
            codes = re.findall(code_pattern, all_text)
            prices = re.findall(price_pattern, all_text)
            
            print(f"\n\nFound {len(codes)} product codes")
            print(f"Found {len(prices)} prices")
            
            if codes:
                print("\nFirst 10 codes:", codes[:10])
            if prices:
                print("First 10 prices:", prices[:10])
            
            return all_text
            
    except Exception as e:
        print(f"Error reading PDF: {e}")
        return None

if __name__ == "__main__":
    pdf_path = "JOY WATER BATHROOM ACCESSORIES.pdf"
    extract_bathroom_accessories_data(pdf_path)
