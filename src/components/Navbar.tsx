"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "jp", label: "日本語", flag: "🇯🇵" },
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3 shadow-lg">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
          <span className="text-primary">M</span>R
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="hover:text-primary transition-colors font-medium">{t.nav.about}</Link>
          <Link href="#projects" className="hover:text-primary transition-colors font-medium">{t.nav.projects}</Link>
          <Link href="#contact" className="hover:text-primary transition-colors font-medium">{t.nav.contact}</Link>
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 hover:text-primary transition-colors cursor"
            >
              <Globe size={20} />
              <span className="uppercase text-sm font-bold">{language}</span>
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 glass rounded-xl overflow-hidden flex flex-col shadow-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`px-4 py-2 text-left hover:bg-primary/20 transition-colors flex items-center space-x-2 ${language === lang.code ? 'text-primary font-bold' : ''}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={toggleTheme} className="p-2 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-colors">
            {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button onClick={toggleTheme} className="p-2">
            {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top-5">
          <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.nav.about}</Link>
          <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.nav.projects}</Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.nav.contact}</Link>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-500 mb-2">Select Language</p>
            <div className="flex space-x-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl ${language === lang.code ? 'opacity-100 scale-110' : 'opacity-50'}`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
