import os

# Generate all 428 bathroom accessories products
accessories_dir = "JOY WATER BATHROOM ACCESSORIES (1)"
image_files = sorted([f for f in os.listdir(accessories_dir) if f.lower().endswith(('.jpg', '.png'))])

print(f"Found {len(image_files)} images")

# Common bathroom accessories categories
categories = [
    "towel-rod",
    "glass-shelf", 
    "soap-dispenser",
    "paper-holder",
    "robe-hook",
    "towel-ring",
    "tumbler-holder",
    "toothbrush-holder",
    "toilet-brush-holder",
    "bathroom-shelf",
    "corner-shelf",
    "double-robe-hook",
    "towel-bar",
    "bathroom-rack"
]

finishes = ["Chrome", "Brushed Gold", "Rose Gold", "Graphite Grey", "Matt Black", "Brushed Nickel"]

# Generate TypeScript code
output = """import { Product } from "./types";

// Bathroom Accessories Products - All 428 products
// Images are in: /JOY WATER BATHROOM ACCESSORIES (1)/ folder
// NOTE: Update product names, codes, prices, categories, and finishes as per catalog

export const bathroomAccessoriesProducts: Product[] = [
"""

for i, img_file in enumerate(image_files):
    img_num = img_file.split('.')[0]
    
    # Rotate through categories and finishes
    category = categories[i % len(categories)]
    finish = finishes[i % len(finishes)]
    
    product = f"""  {{
    id: "bathroom-accessory-{i + 1}",
    name: "Bathroom Accessory {i + 1}",
    slug: "bathroom-accessory-{i + 1}",
    category: "{category}",
    finish: "{finish}",
    price: 2500,
    code: "JW-BA-{str(i + 1).zfill(3)}",
    image: "/JOY WATER BATHROOM ACCESSORIES (1)/{img_file}"
  }},
"""
    output += product

# Remove last comma and close array
output = output.rstrip(',\n') + "\n];\n"

# Write to file
with open("src/lib/catalog/bathroomAccessoriesProducts.ts", "w", encoding="utf-8") as f:
    f.write(output)

print(f"Generated {len(image_files)} bathroom accessories products!")
print("File created: src/lib/catalog/bathroomAccessoriesProducts.ts")
print("\nNOTE: All products have placeholder data. Update with actual:")
print("  - Product names")
print("  - Product codes (JW-XXXX)")
print("  - Prices")
print("  - Categories")
print("  - Finishes")
