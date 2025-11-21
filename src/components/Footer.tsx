"use client";

import React from "react";
import { Github, Linkedin, FileText, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <a href="#landing-page" className="text-2xl font-bold tracking-tighter mb-2 hover:text-primary transition-colors">
            MR.
          </a>
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com/MatthewJRayner" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/matthew-rayner-816a3b383" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="/Assets/Resume ENG.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FileText size={24} />
            </a>
          </div>
          
          <a href="#landing-page" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-primary transition-colors">
            <span>{t.footer.top}</span>
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
