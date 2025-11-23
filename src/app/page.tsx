"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
// import CustomCursor from "@/components/CustomCursor";
import AboutModal from "@/components/AboutModal";

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openAbout = () => {
    setIsAboutOpen(true);
  };

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* <CustomCursor /> */}
      <StarBackground />
      <Navbar onOpenAbout={openAbout} />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </main>
  );
}
