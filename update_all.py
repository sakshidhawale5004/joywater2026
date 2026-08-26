import re

file_path = r'c:\Users\Sakshi\Downloads\aquajoy-creations-main\aquajoy-creations-main\src\lib\catalog\sanitarywareProducts.ts'

# Wall-hung WC: image -> (new_code, new_price)
wc_updates = {
    '/wallhungwc/44.jpg': ('JW-6067', 30000),
    '/wallhungwc/45.jpg': ('JW-6513', 30000),
    '/wallhungwc/40.jpg': ('JW-6067', 30000),
    '/wallhungwc/42.jpg': ('JW-6512', 17000),
    '/wallhungwc/46.jpg': ('JW-6507', 30000),
    '/wallhungwc/48.jpg': ('JW-6508', 30000),
    '/wallhungwc/50.jpg': ('JW-6511', 17000),
    '/wallhungwc/55.jpg': ('JW-6510', 18500),
    '/wallhungwc/56.jpg': ('JW-6504', 30000),
    '/wallhungwc/59.jpg': ('JW-6509', 20000),
    '/wallhungwc/60.jpg': ('JW-6503', 30000),
    '/wallhungwc/63.jpg': ('JW-6502', 39000),
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

# 1. Update WC codes and prices
updated_wc = 0
i = 0
while i < len(lines):
    line = lines[i]
    for img_path, (new_code, new_price) in wc_updates.items():
        if f'"{img_path}"' in line:
            for j in range(i-1, max(i-10, 0)-1, -1):
                if '"price"' in lines[j]:
                    lines[j] = re.sub(r'"price":\s*\d+', f'"price": {new_price}', lines[j])
                if '"code"' in lines[j]:
                    lines[j] = re.sub(r'"code":\s*"[^"]*"', f'"code": "{new_code}"', lines[j])
            updated_wc += 1
            break
    i += 1

print(f'Updated {updated_wc} wall-hung WC products.')

# 2. Move 176.jpg from wall-hung-wc to ceramic-wash-basins
content2 = '\n'.join(lines)
# Find the block containing 176.jpg and update its category
lines2 = content2.split('\n')
i = 0
moved = 0
while i < len(lines2):
    if '"/premiumbasin/176.jpg"' in lines2[i]:
        for j in range(i-1, max(i-10, 0)-1, -1):
            if '"category"' in lines2[j]:
                lines2[j] = re.sub(r'"category":\s*"[^"]*"', '"category": "ceramic-wash-basins"', lines2[j])
                moved += 1
                break
        break
    i += 1

print(f'Moved 176.jpg to ceramic-wash-basins: {moved}')

content3 = '\n'.join(lines2)

# 3. Find the last ceramic-wash-basins entry to append after it
# We'll insert the new products after the 197.jpg entry (last of wall-hung-wc ceramic, before stone)
# Actually let's insert before the stone-is-the-king-of-luxury-1 entry
# Find position of last ceramic entry + add new entries before stone products

new_products = '''
  {
    "id": "sanitaryware-basins-82",
    "name": "Copper Crocodile Finish Wall Hung WC With Seat Cover",
    "slug": "sanitaryware-basins-82",
    "category": "wall-hung-wc",
    "finish": "Copper Crocodile",
    "price": 39000,
    "code": "JW-6505",
    "image": "/images/PDF1_P17_IMG2.png"
  },'''

new_ceramic = '''
  {
    "id": "sanitaryware-basins-83",
    "name": "Glossy White Wash Basin",
    "slug": "sanitaryware-basins-83",
    "category": "ceramic-wash-basins",
    "finish": "Glossy White",
    "price": 7450,
    "code": "JW-6034",
    "image": "/images/PDF1_P5_IMG12.png"
  },
  {
    "id": "sanitaryware-basins-84",
    "name": "Matt Black Round Wash Basin",
    "slug": "sanitaryware-basins-84",
    "category": "ceramic-wash-basins",
    "finish": "Matt Black",
    "price": 11500,
    "code": "JW-6014",
    "image": "/images/PDF1_P54_IMG2.png"
  },
  {
    "id": "sanitaryware-basins-85",
    "name": "Glossy White Round Wash Basin",
    "slug": "sanitaryware-basins-85",
    "category": "ceramic-wash-basins",
    "finish": "Glossy White",
    "price": 6300,
    "code": "JW-6028",
    "image": "/images/PDF1_P54_IMG1.png"
  },'''

# Insert WC product before the first non-wc entry (find "sanitaryware-basins-65" which is wall-hung wash basin area)
# Actually let's insert the WC product after the last wallhungwc image entry (63.jpg line)
# And insert ceramic products before stone products (before stone-is-the-king-of-luxury-1)

lines3 = content3.split('\n')

# Insert WC product after the block containing 63.jpg (around line 130)
wc_inserted = False
ceramic_inserted = False

result_lines = []
i = 0
while i < len(lines3):
    line = lines3[i]
    result_lines.append(line)
    
    # After the closing brace of the 63.jpg product block
    if not wc_inserted and '"/wallhungwc/63.jpg"' in line:
        # Find the closing }
        for k in range(i+1, i+5):
            if k < len(lines3):
                result_lines.append(lines3[k])
                if lines3[k].strip() == '},':
                    # Insert new WC product here
                    for prod_line in new_products.split('\n'):
                        result_lines.append(prod_line)
                    wc_inserted = True
                    i = k + 1
                    break
        else:
            i += 1
        continue
    
    # Before the stone-is-the-king-of-luxury-1 block
    if not ceramic_inserted and '"id": "stone-is-the-king-of-luxury-1"' in line:
        # Insert before this line
        result_lines.pop()  # Remove the line we just added
        for prod_line in new_ceramic.split('\n'):
            result_lines.append(prod_line)
        result_lines.append(line)  # Re-add the stone product line
        ceramic_inserted = True
    
    i += 1

final_content = '\n'.join(result_lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f'WC product inserted: {wc_inserted}')
print(f'Ceramic products inserted: {ceramic_inserted}')
print('All done!')
