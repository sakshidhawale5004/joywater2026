"""
Extract product data from image-based PDF using OCR.
This will process the PDF pages as images and extract text.
"""
import sys

try:
    from pdf2image import convert_from_path
    from PIL import Image
    import pytesseract
    import re
    import json
    
    print("All required packages are installed!")
    
    def extract_from_pdf_with_ocr(pdf_path, max_pages=10):
        """Extract text from image-based PDF using OCR."""
        
        print(f"Converting PDF to images (first {max_pages} pages)...")
        
        # Convert PDF pages to images (first few pages for testing)
        images = convert_from_path(pdf_path, first_page=1, last_page=max_pages)
        
        print(f"Converted {len(images)} pages to images")
        
        all_text = ""
        products = []
        
        for i, image in enumerate(images):
            print(f"\nProcessing page {i + 1}...")
            
            # Perform OCR on the image
            text = pytesseract.image_to_string(image, lang='eng')
            
            print(f"Extracted {len(text)} characters")
            print(f"First 300 chars: {text[:300]}")
            
            all_text += f"\n\n=== PAGE {i + 1} ===\n\n{text}"
            
            # Look for product codes and prices
            codes = re.findall(r'JW-\d+', text)
            prices = re.findall(r'₹\s*[\d,]+|Rs\.?\s*[\d,]+', text)
            
            if codes:
                print(f"Found codes on page {i + 1}: {codes}")
            if prices:
                print(f"Found prices on page {i + 1}: {prices}")
        
        # Save extracted text
        with open('bathroom_accessories_ocr_text.txt', 'w', encoding='utf-8') as f:
            f.write(all_text)
        
        print(f"\n\nOCR text saved to bathroom_accessories_ocr_text.txt")
        return all_text
    
    if __name__ == "__main__":
        pdf_path = "JOY WATER BATHROOM ACCESSORIES.pdf"
        extract_from_pdf_with_ocr(pdf_path, max_pages=5)
        
except ImportError as e:
    print(f"\nMissing package: {e}")
    print("\nPlease install required packages:")
    print("pip install pdf2image pillow pytesseract")
    print("\nAlso install Tesseract OCR:")
    print("- Windows: Download from https://github.com/UB-Mannheim/tesseract/wiki")
    print("- Mac: brew install tesseract")
    sys.exit(1)
