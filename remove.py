import re

with open('src/lib/catalog/bathroomAccessoriesProducts.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def remove_product(code):
    global content
    pattern = r'  \{\s*id: \"[^\"]+\",\s*name: \"[^\"]+\",\s*slug: \"[^\"]+\",\s*category: \"[^\"]+\",\s*finish: \"[^\"]+\",\s*price: \d+,\s*code: \"' + code + r'\",\s*image: \"[^\"]+\"\s*\},\n?'
    content = re.sub(pattern, '', content)

remove_product('SG 105')
remove_product('SG 106')
remove_product('FT 109')
remove_product('FT 107')

with open('src/lib/catalog/bathroomAccessoriesProducts.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Removed specified products.')
