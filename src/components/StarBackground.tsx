"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function StarBackground() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; depth: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      depth: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[var(--background)] transition-colors duration-300">
      {stars.map((star) => (
        <Star 
          key={star.id} 
          star={star} 
          x={x} 
          y={y} 
          windowSize={windowSize} 
        />
      ))}
    </div>
  );
}

function Star({ 
  star, 
  x, 
  y, 
  windowSize 
}: { 
  star: { id: number; x: number; y: number; size: number; depth: number; delay: number; duration: number };
  x: any;
  y: any;
  windowSize: { width: number; height: number };
}) {
  const xPos = useTransform(x, (value: number) => (value - windowSize.width / 2) * star.depth * -0.15);
  const yPos = useTransform(y, (value: number) => (value - windowSize.height / 2) * star.depth * -0.15);

  return (
    <motion.div
      className="absolute rounded-full bg-gray-600 dark:bg-white"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: star.size,
        height: star.size,
        opacity: 0.4,
        x: xPos,
        y: yPos,
      }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: star.duration,
        repeat: Infinity,
        delay: star.delay,
        ease: "easeInOut",
      }}
    />
  );
}
