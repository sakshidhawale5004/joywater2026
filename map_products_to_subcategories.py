import re

# Read data.ts
with open('src/lib/catalog/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all createCategoryProducts calls and their current categories
pattern = r'createCategoryProducts\(\s*"([^"]+)",\s*"([^"]+)"'
matches = re.findall(pattern, content)

print("="*100)
print("CURRENT PRODUCT CATEGORIES (Need to update)")
print("="*100)

# Group by category
from collections import defaultdict
products_by_category = defaultdict(list)

for category, title in matches:
    products_by_category[category].append(title)

# Identify which products should go to which subcategories
print("\n📦 CEILING-MOUNTED SHOWERS:")
for cat, titles in products_by_category.items():
    if 'ceiling' in cat or 'shower' in cat:
        for title in titles:
            print(f"  Category: {cat:40} | Title: {title}")

print("\n📦 WALL-MOUNTED SHOWERS:")
for cat, titles in products_by_category.items():
    if 'wall' in cat:
        for title in titles:
            print(f"  Category: {cat:40} | Title: {title}")

print("\n📦 HAND SHOWERS:")
for cat, titles in products_by_category.items():
    if 'hand' in cat:
        for title in titles:
            print(f"  Category: {cat:40} | Title: {title}")

print("\n📦 BODY JETS:")
for cat, titles in products_by_category.items():
    if 'body' in cat:
        for title in titles:
            print(f"  Category: {cat:40} | Title: {title}")

# Create mapping recommendations
print("\n" + "="*100)
print("RECOMMENDED CATEGORY UPDATES:")
print("="*100)

mappings = {
    # Ceiling 2-Function
    "2 Function Shower (Rain & Mist)": "2-function-ceiling-showers",
    "2 function shower rain mist hexagon": "2-function-ceiling-showers",
    "2 Function Shower (Rain & Large Waterfall)": "2-function-ceiling-showers",
    "2 function shower soft rain +waterfall": "2-function-ceiling-showers",
    
    # Ceiling 3-Function
    "3 Function Ceiling Shower": "3-function-ceiling-showers",
    "3 Function Shower (LED)": "3-function-ceiling-showers",
    "3 Function Shower (Rain, Mist & Large Waterfall)": "3-function-ceiling-showers",
    "3 Function Shower (Large Waterfall)": "3-function-ceiling-showers",
    
    # Ceiling 4-Function
    "4 Function Shower Rain, 6 Mist, 2 Waterfall and Water Column": "4-function-ceiling-showers",
    "4 functional shower rain +  4 mist  +4side flap rain + water column": "4-function-ceiling-showers",
    
    # Ceiling Single Function
    "single function shower rain celing mounted shower": "single-function-ceiling-showers",
    "overhead abs shower": "single-function-ceiling-showers",
    "Single Function Celing Round": "single-function-ceiling-showers",
    
    # Wall 2-Function
    "2 Function Wall Mounted Shower with Arm": "2-function-wall-showers",
    "2 Function shower (Rain & Single Waterfall)": "2-function-wall-showers",
    
    # Wall Single Function
    "Single Function Rain Shower": "single-function-wall-showers",
    
    # Wall Spot
    "joy spot wall mounted shower (Rain)": "spot-wall-showers",
    "joy spot wall mounted shower (Cascade)": "spot-wall-showers",
    "joy spot wall mounted shower (Bubble)": "spot-wall-showers",
    
    # Wall Waterfall
    "Waterfall Shower System": "waterfall-wall-showers",
    
    # Hand Showers
    "4 function hand shower": "4-function-hand-showers",
    "hand shower": "2-function-hand-showers",  # Actually these are mixed 2-function and single
    
    # Body Jets
    "Body Jet (2 Function - Rain & Mist) - Chrome Finish": "2-function-body-jets",
    "One Line Series Body Shower": "single-function-body-showers",
    "Eminence Series Body Shower": "single-function-body-showers",
}

for old_title, new_cat in mappings.items():
    print(f"{old_title:60} → {new_cat}")
