"use client";
import React, { useState } from "react";
import { X, Menu } from "lucide-react";

interface NavbarProps {
  lang: "en" | "zh";
  activePath: string; // e.g. "/" or "/career"
}

export function Navbar({ lang, activePath }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const homeLink = lang === "en" ? "/" : "/zh";
  const careerLink = lang === "en" ? "/career" : "/zh/career";
  const switchLangLink = lang === "en" ? "/zh" : "/";

  return (
    <>
      <nav className="fixed w-full z-[60] top-0 py-4 px-8 flex justify-between items-center text-white bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-sm shadow-black/5">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="NovaHaus Logo" className="h-12 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href={homeLink} className="hover:text-[#ead7c7]">{lang === "en" ? "Home" : "首页"}</a>
          <a href={careerLink} className="hover:text-[#ead7c7]">{lang === "en" ? "Career" : "招贤纳士"}</a>
        </div>

        <div className="hidden md:block">
          <a href={switchLangLink}>
            <button className="bg-white text-[#1e1e1e] px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center hover:bg-[#ead7c7] transition min-w-[60px]">
              🇨🇳 / 🇬🇧
            </button>
          </a>
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white hover:text-[#ead7c7] transition focus:outline-none">
             <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div 
        className={`fixed inset-0 z-[70] bg-[#ead7c7] transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="p-8 flex justify-end">
          <button onClick={toggleMenu} className="text-[#34a0a4] hover:text-[#2a8286] transition focus:outline-none">
            <X className="w-10 h-10" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-2/3 gap-12 text-[#34a0a4]">
          <a href={homeLink} className="text-4xl font-bold hover:scale-105 transition-transform" onClick={toggleMenu}>
            {lang === "en" ? "Home" : "首页"}
          </a>
          <a href={careerLink} className="text-4xl font-bold hover:scale-105 transition-transform" onClick={toggleMenu}>
            {lang === "en" ? "Career" : "招贤纳士"}
          </a>

          <a href={switchLangLink} onClick={toggleMenu}>
            <button className="bg-[#34a0a4] text-white px-8 py-4 rounded-full text-xl font-bold flex items-center justify-center shadow-md">
              🇨🇳 / 🇬🇧 Switch Language
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
