import re

with open('src/app/page.tsx', 'r') as f:
    text = f.read()

text = text.replace('import { useLanguage } from "@/context/LanguageContext";\n"use client";\n', '"use client";\nimport { useLanguage } from "@/context/LanguageContext";\n')

with open('src/app/page.tsx', 'w') as f:
    f.write(text)
