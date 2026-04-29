import re

with open('src/app/page.tsx', 'r') as f:
    text = f.read()

# Fix the duplicate imports
text = re.sub(r'import { useLanguage } from "@/context/LanguageContext";\n', '', text)
text = 'import { useLanguage } from "@/context/LanguageContext";\n' + text

with open('src/app/page.tsx', 'w') as f:
    f.write(text)
