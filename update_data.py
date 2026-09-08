import re

with open('src/lib/catalog/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_categories = """
    // Bathroom Accessories Series
    {
      slug: "pyramid-series",
      title: "Pyramid Series",
      group: "bathroom-accessories",
      description: "Premium Pyramid Series bathroom accessories in various finishes.",
      features: ["11 Years Unmatched Assurance"]
    },
    {
      slug: "signature-series",
      title: "Signature Series",
      group: "bathroom-accessories",
      description: "Premium Signature Series bathroom accessories.",
      features: ["11 Years Unmatched Assurance"]
    },
    {
      slug: "fortune-series",
      title: "Fortune Series",
      group: "bathroom-accessories",
      description: "Premium Fortune Series bathroom accessories.",
      features: ["11 Years Unmatched Assurance"]
    },
    {
      slug: "solitaire-series",
      title: "Solitaire Series",
      group: "bathroom-accessories",
      description: "Premium Solitaire Series bathroom accessories.",
      features: ["11 Years Unmatched Assurance"]
    },
"""

# inject into categories array
content = content.replace('// Sanitaryware', new_categories + '\n    // Sanitaryware', 1)

# inject into megaMenu
# find "Bath Accessories": [
mega_menu_replacement = """      "Bath Accessories": [
        "pyramid-series",
        "signature-series",
        "fortune-series",
        "solitaire-series",
        "soap-dispenser"
      ]"""

content = re.sub(r'\"Bath Accessories\":\s*\[\s*\"soap-dispenser\"\s*\]', mega_menu_replacement, content)

with open('src/lib/catalog/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated data.ts.")
