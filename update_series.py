import re

with open('src/lib/catalog/bathroomAccessoriesProducts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def update_or_add_product(code, new_cat, new_img, new_price, new_name, finish="Chrome"):
    global content
    pattern = r'(  \{\s*id: \"[^\"]+\",\s*name: \")([^\"]+)(\",\s*slug: \"[^\"]+\",\s*category: \")([^\"]+)(\",\s*finish: \"[^\"]+\",\s*price: )(\d+)(,\s*code: \")(' + re.escape(code) + r')(\",\s*image: \")([^\"]+)(\"\s*\})'
    
    def repl(m):
        name = new_name if new_name else m.group(2)
        cat = new_cat if new_cat else m.group(4)
        price = str(new_price) if new_price else m.group(6)
        img = new_img if new_img else m.group(10)
        return f"{m.group(1)}{name}{m.group(3)}{cat}{m.group(5)}{price}{m.group(7)}{m.group(8)}{m.group(9)}{img}{m.group(11)}"

    new_content, num_subs = re.subn(pattern, repl, content)
    if num_subs == 0:
        # Product not found (probably deleted), append it!
        print(f"Product {code} not found, appending it.")
        
        # generate random slug/id based on code
        slug_code = code.lower().replace(' ', '-')
        new_block = f'''  {{
    id: "{slug_code}",
    name: "{new_name}",
    slug: "{slug_code}",
    category: "{new_cat}",
    finish: "{finish}",
    price: {new_price},
    code: "{code}",
    image: "{new_img}"
  }}'''
        # insert before the last "];"
        content = content.replace('\n];\n', f',\n{new_block}\n];\n')
    else:
        content = new_content
        print(f"Updated product {code}")

updates = [
    # Pyramid Series
    ("PR 104", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/22.jpg", 1530, "Glass Soap Dish"),
    ("PR 106", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/18.jpg", 1530, "Tumbler Holder"),
    ("PR 103", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/23.jpg", 3960, "Towel Rod 600 mm"),
    ("PR 102", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/24.jpg", 2070, "Napkin Ring"),
    ("SW 101", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/25.jpg", 1530, "Soap Dish"),
    ("PR 105", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/26.jpg", 3150, "Liquid Dispenser"),
    ("PR 109", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/29.jpg", 10350, "Towel Rack 600 mm"),
    ("PR 110", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/30.jpg", 2700, "Toilet Brush Holder"),
    ("PR 107", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/27.jpg", 3150, "Paper Holder With Flap"),
    ("PR 108", "pyramid-series", "/JOY WATER BATHROOM ACCESSORIES (1)/28.jpg", 1350, "Robe Hook"),
    
    # Signature Series
    ("SG 109", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/32.jpg", 8400, "Towel Rack"),
    ("SG 110", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/33.jpg", 10800, "Towel Rack with Shelf"),
    ("SG 101", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/34.jpg", 2610, "Soap Holder"),
    ("SG 102", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/35.jpg", 2610, "Napkin Ring"),
    ("SG 103", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/36.jpg", 5700, "Towel Bar 600mm"),
    ("SG 104", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/37.jpg", 2700, "Tumbler Holder"),
    ("SG 105", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/39.jpg", 3600, "Liquid Dispenser"),
    ("SG 106", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/40.jpg", 1800, "Paper Holder"),
    ("SG 107", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/41.jpg", 3600, "Roll Holder With Mobile Stand"),
    ("SG 108", "signature-series", "/JOY WATER BATHROOM ACCESSORIES (1)/38.jpg", 990, "Robe Hook"),
    
    # Fortune Series
    ("FT 109", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/1.jpg", 8450, "Towel Rack"),
    ("FT 107", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/5.jpg", 3200, "Roll Holder With Mobile Stand"),
    ("FT 110", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/43.jpg", 10800, "Towel Rack With Shelf"),
    ("FT 105", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/46.jpg", 2430, "Tumbler Holder"),
    ("FT 102", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/44.jpg", 3200, "Napkin Holder"),
    ("FT 103", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/45.jpg", 5650, "Towel Bar 600mm"),
    ("FT 101", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/14.jpg", 2350, "Soap Holder"),
    ("FT 104", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/47.jpg", 3510, "Liquid Dispenser"),
    ("FT 108", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/48.jpg", 7500, "Tumbler + Liquid+ Napkin Ring Holder"),
    ("FT 106", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/49.jpg", 2100, "Paper Holder"),
    ("FT 111", "fortune-series", "/JOY WATER BATHROOM ACCESSORIES (1)/50.jpg", 4500, "Tumbler Liquid Dispenser"),

    # Solitaire Series
    ("SLT 111-A", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/51.jpg", 6450, "Towel Rack 600mm"),
    ("SLT 111-B", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/51.jpg", 6120, "Towel Rack 450mm"), # Wait, image 51 has two products
    ("SLT 101", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/52.jpg", 1200, "Soap Holder"),
    ("SLT 102", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/53.jpg", 1260, "Napkin Ring"),
    ("SLT 103A", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/54.jpg", 2160, "Towel Bar 600mm"),
    ("SLT 103B", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/54.jpg", 1980, "Towel Bar 450mm"),
    ("SLT 104", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/55.jpg", 1080, "Soap Holder"),
    ("SLT 105", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/56.jpg", 1200, "Liquid Dispenser"),
    ("SLT 106", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/57.jpg", 1170, "Tumbler Holder"),
    ("SLT 107", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/58.jpg", 1890, "Paper Holder With Flap"),
    ("SLT 108", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/59.jpg", 2810, "Robe Hook"),
    ("SLT 109", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/61.jpg", 2160, "Dual Soup Dish"),
    ("SLT 110", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/62.jpg", 2160, "Soap Tumbler Holder"),
    ("SLT 112", "solitaire-series", "/JOY WATER BATHROOM ACCESSORIES (1)/63.jpg", 2160, "Liquid Dispenser + Tumbler Holder"),
]

for u in updates:
    update_or_add_product(u[0], u[1], u[2], u[3], u[4])

with open('src/lib/catalog/bathroomAccessoriesProducts.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updates applied successfully.")
