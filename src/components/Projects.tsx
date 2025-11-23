"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Helper component for individual project cards
// Helper component for individual project cards
function ProjectCard({
  project,
  index,
  progress,
  range,
  targetScale
}: {
  project: any,
  index: number,
  progress: MotionValue<number>,
  range: [number, number],
  targetScale: number
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className="relative flex flex-col w-[95vw] md:w-[90vw] max-w-4xl h-[80vh] md:h-[70vh] rounded-3xl bg-[#0B0F17] border border-white/10 overflow-hidden shadow-2xl origin-top"
      >
        <div className="flex-1 relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 md:opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent md:via-black/50" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <h3 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 text-white leading-tight">{project.title}</h3>
          <p className="text-primary text-lg md:text-xl font-semibold mb-4 md:mb-6">{project.tech}</p>
          <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl leading-relaxed line-clamp-4 md:line-clamp-none">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-primary transition-colors bg-white/10 px-5 py-2.5 md:px-6 md:py-3 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 text-sm md:text-base">
                <Github size={20} className="md:w-6 md:h-6" />
                <span className="font-medium">GitHub</span>
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-primary transition-colors bg-primary/20 px-5 py-2.5 md:px-6 md:py-3 rounded-full backdrop-blur-md border border-primary/20 hover:bg-primary/30 text-sm md:text-base">
                <ExternalLink size={20} className="md:w-6 md:h-6" />
                <span className="font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

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
    <section id="projects" ref={container} className="relative mt-[20vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center mb-[10vh]">
        <motion.h2
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="text-5xl md:text-7xl font-bold text-center z-0"
        >
          {t.projects.title} <span className="text-primary">{t.projects.title_highlight}</span>.
        </motion.h2>
      </div>

      {projects.map((project, index) => {
        const targetScale = 1 - ((projects.length - index) * 0.05);
        return (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}

      <div className="h-[20vh]" /> {/* Spacer at the end */}
    </section>
  );
}
