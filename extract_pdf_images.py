from pdf2image import convert_from_path
import pytesseract
import os

pdf_path = "JOY WATER BATHROOM ACCESSORIES.pdf"

try:
    print("Converting PDF pages to images...")
    # Convert first 10 pages to see the structure
    pages = convert_from_path(pdf_path, first_page=1, last_page=10)
    
    print(f"Converted {len(pages)} pages")
    
    # OCR each page
    for i, page in enumerate(pages):
        print(f"\n=== PAGE {i+1} ===")
        text = pytesseract.image_to_string(page)
        print(text[:500])  # Print first 500 chars
        
        with open(f"page_{i+1}.txt", "w", encoding="utf-8") as f:
            f.write(text)
    
    print("\nExtraction complete!")

except Exception as e:
    print(f"Error: {e}")
    print("\nTrying alternative method...")
    
    # Alternative: Just list what we have
    import PyPDF2
    with open(pdf_path, 'rb') as file:
        pdf = PyPDF2.PdfReader(file)
        print(f"Total pages in PDF: {len(pdf.pages)}")
        print("\nTrying to extract text from first 5 pages...")
        for i in range(min(5, len(pdf.pages))):
            text = pdf.pages[i].extract_text()
            if text.strip():
                print(f"\n--- Page {i+1} ---")
                print(text[:300])
