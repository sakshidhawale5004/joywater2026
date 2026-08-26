import json
import re

file_path = r'c:\Users\Sakshi\Downloads\aquajoy-creations-main\aquajoy-creations-main\src\lib\catalog\sanitarywareProducts.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The file exports a default array. Let's do a regex replacement.
# We will match objects and update the category if the image is in our list.

pedestals = ['200', '203', '205', '206', '207', '208', '209', '210', '213', '214', '216', '219', '222', '223', '225', '226', '227', '228', '229', '230', '231', '232']

def replace_category(match):
    block = match.group(0)
    # Extract the image number
    img_match = re.search(r'\"image\":\s*\"/stoneisthekingofluxury/(\d+)\.jpg\"', block)
    if img_match:
        img_num = img_match.group(1)
        if img_num in pedestals:
            # Change category to stone-pedestal
            block = re.sub(r'\"category\":\s*\"[^\"]+\"', '\"category\": \"stone-pedestal\"', block)
        else:
            # For non-pedestals in this folder, ensure they are stone-basin
            # Note: The request only asked to classify between basin and pedestal.
            block = re.sub(r'\"category\":\s*\"[^\"]+\"', '\"category\": \"stone-basin\"', block)
    return block

# We only want to apply this to stoneisthekingofluxury products.
# Let's find all objects with slug 'stone-is-the-king-of-luxury-X'
pattern = r'\{[^{}]*\"id\":\s*\"stone-is-the-king-of-luxury-\d+\"[^{}]*\}'
new_content = re.sub(pattern, replace_category, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Updated sanitarywareProducts.ts')
