import re

file_path = r'c:\Users\Sakshi\Downloads\aquajoy-creations-main\aquajoy-creations-main\src\lib\catalog\sanitarywareProducts.ts'

# Map image filename -> (new_code, new_price)
# 232.jpg has no code given, only price
updates = {
    '206.jpg': ('JW-8100-C', 96000),
    '207.jpg': ('JW-8100-B', 96000),
    '208.jpg': ('JW-8099', 66000),
    '209.jpg': ('JW-8098', 63000),
    '210.jpg': ('JW-8097', 58000),
    '213.jpg': ('JW-8096', 63000),
    '214.jpg': ('JW-8095', 115000),
    '216.jpg': ('JW-8094', 66000),
    '219.jpg': ('JW-8091', 63000),
    '222.jpg': ('JW-8092', 68000),
    '223.jpg': ('JW-8090', 105000),
    '225.jpg': ('JW-8089', 60000),
    '226.jpg': ('JW-8088', 54000),
    '227.jpg': ('JW-8086', 94500),
    '228.jpg': ('JW-8085', 95000),
    '229.jpg': ('JW-8084', 72000),
    '230.jpg': ('JW-8083', 72000),
    '231.jpg': ('JW-8082', 72000),
    '232.jpg': (None, 66000),   # No code provided
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')

updated = 0
i = 0
while i < len(lines):
    line = lines[i]
    for img, (new_code, new_price) in updates.items():
        if f'/stoneisthekingofluxury/{img}' in line:
            # Look backwards for price and code fields (within 10 lines above)
            for j in range(i-1, max(i-10, 0)-1, -1):
                if '"price"' in lines[j]:
                    lines[j] = re.sub(r'"price":\s*\d+', f'"price": {new_price}', lines[j])
                if '"code"' in lines[j] and new_code is not None:
                    lines[j] = re.sub(r'"code":\s*"[^"]*"', f'"code": "{new_code}"', lines[j])
            updated += 1
            break
    i += 1

new_content = '\n'.join(lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f'Updated {updated} stone pedestal products with new codes and prices.')
