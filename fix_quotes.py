import re

with open('src/lib/catalog/bathroomAccessoriesProducts.ts', 'r', encoding='utf-8') as f:
    lines = f.read().split('\n')

for i, line in enumerate(lines):
    if line.strip().startswith('name: '):
        # The line is something like:     name: "HEAVY LONG WASTE COUPLING FT/HT 125 MM (5")",
        # We want to replace all '"' inside the string with '\"'
        
        # Everything after 'name: '
        after_name = line[line.find('name:') + 5:].strip()
        
        if after_name.startswith('"') and after_name.endswith('",'):
            inner_content = after_name[1:-2] # remove start quote and end ",
            
            # unescape and then correctly escape
            inner_content = inner_content.replace('\\"', '"')
            inner_content = inner_content.replace('"', '\\"')
            
            # re-insert
            new_line = line[:line.find('name:') + 5] + f' "{inner_content}",'
            lines[i] = new_line

with open('src/lib/catalog/bathroomAccessoriesProducts.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("Fixed quotes in TS file.")
