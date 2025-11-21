"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.sales_dashboard.title,
      tech: "React, Django, Postgres",
      desc: t.projects.sales_dashboard.desc,
      links: {
        github: "https://github.com/MatthewJRayner/breadbybike-dashboard",
        live: "https://sales-dashboard-preview.vercel.app",
      },
      image: "/Assets/dashboard-mockup.png",
    },
    {
      title: t.projects.bread_by_bike.title,
      tech: "HTML, CSS, JavaScript, Liquid",
      desc: t.projects.bread_by_bike.desc,
      links: {
        live: "https://www.breadbybike.com",
      },
      image: "/Assets/bbb-mockup.png",
    },
    {
      title: t.projects.portfolio.title,
      tech: "Next.js, Tailwind, Framer Motion",
      desc: t.projects.portfolio.desc,
      links: {
        github: "https://github.com/MatthewJRayner/matthewjrayner.github.io",
        live: "https://matthewjrayner.github.io",
      },
      image: "/Assets/portfolio-mockup.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          {t.projects.title} <span className="text-primary">{t.projects.title_highlight}</span>.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                 <div className="absolute inset-0 transition-colors duration-300 z-10" />
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-contain transition-transform duration-500 group-hover:scale-110"
                 />
              </div>

              <div className="p-6 text-gray-600 dark:text-gray-300">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary font-semibold mb-4">{project.tech}</p>
                <p className="mb-6 text-sm leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex space-x-4">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-105 active:scale-95 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-105 active:scale-95 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
