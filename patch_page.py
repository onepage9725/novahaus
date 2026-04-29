import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Add use client and useLanguage import
if '"use client"' not in content:
    content = '"use client";\nimport { useLanguage } from "@/context/LanguageContext";\n' + content

# Add hook usage inside the component
if 'const { t, toggleLanguage } = useLanguage()' not in content:
    content = re.sub(r'export default function Home\(\) {\n', r'export default function Home() {\n  const { t, toggleLanguage } = useLanguage();\n', content)

# Replace hardcoded strings
content = content.replace('>Home<', '>{t("nav_home")}<')
content = content.replace('>Career<', '>{t("nav_career")}<')
content = content.replace('className="bg-white text-[#1e1e1e] px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center hover:bg-[#ead7c7] transition min-w-[60px]"\n              >', 'className="bg-white text-[#1e1e1e] px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center hover:bg-[#ead7c7] transition min-w-[60px]"\n                onClick={toggleLanguage}\n              >')

content = content.replace('>NovaHaus Property Management</h1>', '>{t("hero_title")}</h1>')
content = content.replace('>Connecting Students with Quality Living</p>', '>{t("hero_subtitle")}</p>')
content = content.replace('>Explore Property &rarr;</a>', '>{t("hero_btn")}</a>')
content = content.replace('>Trusted by 4K+ clients</div>', '>{t("hero_trusted")}</div>')

content = content.replace('>Why Choose Us ?</h2>', '>{t("why_title")}</h2>')
content = content.replace('>Reliable Management</h3>', '>{t("why_1_title")}</h3>')
content = content.replace('>We ensure your property is well-maintained and profitable.</p>', '>{t("why_1_desc")}</p>')
content = content.replace('>Student Focus</h3>', '>{t("why_2_title")}</h3>')
content = content.replace('>Specialized in catering to the needs of student accommodations.</p>', '>{t("why_2_desc")}</p>')
content = content.replace('>Transparent Pricing</h3>', '>{t("why_3_title")}</h3>')
content = content.replace('>No hidden fees, straightforward property management.</p>', '>{t("why_3_desc")}</p>')

content = content.replace('Providing top-tier property management services for students and professionals.', '{t("footer_desc")}')
content = content.replace('>Company<', '>{t("footer_company")}<')
content = content.replace('>Support<', '>{t("footer_support")}<')
content = content.replace('>Contact<', '>{t("footer_contact")}<')
content = content.replace('© 2026 NovaHaus. All rights reserved.', '{t("footer_rights")}')


with open('src/app/page.tsx', 'w') as f:
    f.write(content)
