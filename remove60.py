import re
with open('src/lib/catalog/bathroomAccessoriesProducts.ts', 'r', encoding='utf-8') as f:
    content = f.read()
pattern = r'  \{\s*id: \"[^\"]+\",\s*name: \"[^\"]+\",\s*slug: \"[^\"]+\",\s*category: \"[^\"]+\",\s*finish: \"[^\"]+\",\s*price: \d+,\s*code: \"[^\"]+\",\s*image: \"/JOY WATER BATHROOM ACCESSORIES \(1\)/60\.jpg\"\s*\},\n?'
content = re.sub(pattern, '', content)
with open('src/lib/catalog/bathroomAccessoriesProducts.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Removed 60.jpg product")
