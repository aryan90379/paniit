import sys
with open('src/components/AeroShards.tsx', 'r') as f:
    text = f.read()

text = text.replace('\\`', '`')
text = text.replace('\\$', '$')

with open('src/components/AeroShards.tsx', 'w') as f:
    f.write(text)
