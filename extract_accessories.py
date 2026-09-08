import PyPDF2
import re
import json

pdf_path = "JOY WATER BATHROOM ACCESSORIES.pdf"

try:
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        all_text = ""
        
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text = page.extract_text()
            all_text += f"\n\n=== PAGE {page_num + 1} ===\n\n"
            all_text += text
        
        # Save to file for review
        with open("accessories_extracted.txt", "w", encoding="utf-8") as out:
            out.write(all_text)
        
        print("Extraction complete! Saved to accessories_extracted.txt")
        print(f"Total pages: {len(pdf_reader.pages)}")
        
        # Try to find product codes
        codes = re.findall(r'JW-\d+', all_text)
        print(f"\nFound {len(codes)} product codes")
        print("Sample codes:", codes[:20])

except Exception as e:
    print(f"Error: {e}")
