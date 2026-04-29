import re

with open('src/app/career/page.tsx', 'r') as f:
    text = f.read()

if 'import { useLanguage } from "@/context/LanguageContext";' not in text:
    text = 'import { useLanguage } from "@/context/LanguageContext";\n' + text

if 'const { t, toggleLanguage } = useLanguage();' not in text:
    text = re.sub(r'export default function Career\(\) {\n', r'export default function Career() {\n  const { t, toggleLanguage } = useLanguage();\n', text)

text = text.replace('className="bg-white text-[#1e1e1e] px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center hover:bg-[#ead7c7] transition min-w-[60px]"\n              >', 'className="bg-white text-[#1e1e1e] px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center hover:bg-[#ead7c7] transition min-w-[60px]"\n                onClick={toggleLanguage}\n              >')

# Replace headings and descriptions
text = text.replace('>{t("nav_home")}<', '>{t("nav_home")}<')
text = text.replace('>{t("nav_career")}<', '>{t("nav_career")}<')
text = text.replace('>Home<', '>{t("nav_home")}<')
text = text.replace('>Career<', '>{t("nav_career")}<')

with open('src/app/career/page.tsx', 'w') as f:
    f.write(text)
