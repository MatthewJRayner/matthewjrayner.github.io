"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SolarSystem from "./SolarSystem";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Typewriter = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    setDisplayText("");
    
    const timer = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setDisplayText(text.substring(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 50);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="landing-page" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Solar System Background Layer */}
      <div className="absolute md:inset-0 top-20 md:top-0  flex items-center justify-center opacity-80 pointer-events-none">
        <SolarSystem />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[300px] md:mt-[400px]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          <span className="text-primary">{t.hero.greeting}</span> {t.hero.name}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.description_start}
          <span className="text-primary font-bold">
            <Typewriter text={t.hero.role} delay={1000} />
          </span>
          {t.hero.description_end}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }} // Wait for typewriter
          className="mt-12 flex justify-center space-x-6"
        >
           {/* Social Links could go here or in footer, keeping clean for now */}
        </motion.div>
      </div>

      <motion.a 
        href="#projects"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 p-2 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
