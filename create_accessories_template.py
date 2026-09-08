import os
import json

# Get all image files
accessories_dir = "JOY WATER BATHROOM ACCESSORIES (1)"
image_files = sorted([f for f in os.listdir(accessories_dir) if f.endswith(('.jpg', '.png'))])

print(f"Found {len(image_files)} images")

# Create a template structure
# Assuming typical bath accessories categories based on the image count distribution
accessories_data = []

# Common bath accessories categories we can infer:
# - Towel Rods
# - Towel Rings  
# - Soap Dishes
# - Toothbrush Holders
# - Robe Hooks
# - Paper Holders
# - Glass Shelves
# - Shower Caddies
# - etc.

for img_file in image_files:
    img_num = img_file.split('.')[0]
    
    product = {
        "image_file": img_file,
        "image_num": img_num,
        "image_path": f"/JOY WATER BATHROOM ACCESSORIES (1)/{img_file}",
        "code": f"JW-{img_num.zfill(4)}",  # Placeholder code
        "name": "PLACEHOLDER - Need product name from PDF",
        "category": "PLACEHOLDER - Need category",
        "finish": "PLACEHOLDER - Need finish",
        "price": 0  # Placeholder price
    }
    
    accessories_data.append(product)

# Save to JSON for review
with open("accessories_template.json", "w", encoding="utf-8") as f:
    json.dump(accessories_data, f, indent=2, ensure_ascii=False)

print(f"Created template with {len(accessories_data)} products")
print("Saved to accessories_template.json")
print("\nFirst 5 entries:")
for i in range(min(5, len(accessories_data))):
    print(f"{i+1}. {accessories_data[i]['image_file']} -> {accessories_data[i]['code']}")
