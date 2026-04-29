"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_career: "Career",
    hero_title: "NovaHaus Property Management",
    hero_subtitle: "Connecting Students with Quality Living",
    hero_btn: "Explore Property →",
    hero_trusted: "Trusted by 4K+ clients",
    
    why_title: "Why Choose Us ?",
    why_1_title: "Reliable Management",
    why_1_desc: "We ensure your property is well-maintained and profitable.",
    why_2_title: "Student Focus",
    why_2_desc: "Specialized in catering to the needs of student accommodations.",
    why_3_title: "Transparent Pricing",
    why_3_desc: "No hidden fees, straightforward property management.",

    footer_desc: "Providing top-tier property management services for students and professionals.",
    footer_company: "Company",
    footer_support: "Support",
    footer_contact: "Contact",
    footer_rights: "© 2026 NovaHaus. All rights reserved.",

    career_title: "Let's Work together",
    career_desc: "At NovaHaus Property Management, we believe in providing opportunities for growth, learning and earning. We are looking for passionate individuals to join our team, whether you're a student or looking for a fresh start in the property management industry. We offer flexible working arrangements, comprehensive training and a commission-based earning structure to help you reach your full potential.",
    career_why_title: "Why You’ll Love Working With Us",
    career_why_1_title: "Work on Your Terms",
    career_why_1_desc: "Choose to work from home or in the office – the choice is yours!",
    career_why_2_title: "Generous Commissions",
    career_why_2_desc: "Earn competitive commissions starting from your very first deal.",
    career_why_3_title: "Mentorship & Guidance",
    career_why_3_desc: "Receive 1-to-1 lessons from our leadership team to ensure you succeed in closing cases and earning your commission.",
    career_ready_title: "Ready to Build Your Career ?",
    career_ready_desc: "Enjoy lucrative commissions, the opportunity to work from anywhere, and the chance to advance quickly based on meeting targets. With a fast-paced, rewarding environment, your success story starts with us.",
    career_ready_desc_2: "Take the leap and join a dynamic team where your growth is our priority. Whether you’re a student or someone looking for a new career path, we provide the platform for you to",
    career_ready_earn: "earn, learn, and succeed.",
  },
  zh: {
    nav_home: "首页",
    nav_career: "招聘",
    hero_title: "NovaHaus 物业管理",
    hero_subtitle: "为学生提供优质的居住体验",
    hero_btn: "探索房产 →",
    hero_trusted: "深受 4,000+ 客户信赖",

    why_title: "为什么选择我们？",
    why_1_title: "可靠的管理",
    why_1_desc: "我们确保您的房产得到良好维护并实现盈利。",
    why_2_title: "专注学生需求",
    why_2_desc: "专注于满足学生住宿的各种需求。",
    why_3_title: "价格透明",
    why_3_desc: "没有隐藏费用，直接的物业管理。",

    footer_desc: "为学生和专业人士提供顶级的物业管理服务。",
    footer_company: "公司",
    footer_support: "支持",
    footer_contact: "联系",
    footer_rights: "© 2026 NovaHaus. 保留所有权利。",

    career_title: "加入我们的团队",
    career_desc: "在 NovaHaus 物业管理公司，我们相信提供成长、学习和赚钱的机会。无论您是学生还是想在物业管理行业寻找新的开始，我们都在寻找充满激情的人加入我们的团队。我们提供灵活的工作安排、全面的培训和基于佣金的收入结构，帮助您发挥最大潜力。",
    career_why_title: "为什么您会喜欢与我们合作",
    career_why_1_title: "按你的方式工作",
    career_why_1_desc: "选择在家办公或在办公室工作——全凭你决定！",
    career_why_2_title: "丰厚的佣金",
    career_why_2_desc: "从你的第一笔交易开始就能获得具有竞争力的佣金。",
    career_why_3_title: "导师与指导",
    career_why_3_desc: "接受我们领导团队的 1 对 1 辅导，确保你成功完成案子并赚取佣金。",
    career_ready_title: "准备好开启你的职业生涯了吗？",
    career_ready_desc: "享受丰厚的佣金、随地工作的机会，以及根据完成目标快速晋升的可能。在快节奏、高回报的环境中，你的成功故事从这里开始。",
    career_ready_desc_2: "迈出这一步，加入一个将你的成长放在首位的充满活力的团队。无论你是学生还是在寻找新职业道路的人，我们都提供给你平台，让你",
    career_ready_earn: "赚钱、学习并取得成功。",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("app-lang") as Language;
    if (saved && (saved === "en" || saved === "zh")) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "zh" : "en";
    setLanguage(newLang);
    localStorage.setItem("app-lang", newLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
