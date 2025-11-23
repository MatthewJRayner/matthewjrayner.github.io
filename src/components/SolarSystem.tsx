"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticWrapper from "./MagneticWrapper";

const planets = [
  { name: "mercury", size: 10, distance: 50, duration: 4, color: "#8d8d8d" },
  { name: "venus", size: 18, distance: 80, duration: 7, color: "#e6c8aa" },
  { name: "earth", size: 20, distance: 110, duration: 10, color: "#00aaff" },
  { name: "mars", size: 15, distance: 140, duration: 13, color: "#d25a3c" },
  { name: "jupiter", size: 35, distance: 200, duration: 25, color: "#f0b48c" },
  { name: "saturn", size: 30, distance: 260, duration: 35, color: "#e6c8aa", ring: true },
  { name: "uranus", size: 25, distance: 320, duration: 50, color: "#afeeee" },
  { name: "neptune", size: 25, distance: 380, duration: 65, color: "#4682b4" },
];

export default function SolarSystem() {
  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center pointer-events-none z-0">
      {/* Sun */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-[#ffcc33] shadow-[0_0_40px_rgba(255,204,51,0.6)] z-10"
        animate={{
          boxShadow: [
            "0 0 40px rgba(255,204,51,0.6)",
            "0 0 60px rgba(255,204,51,0.8)",
            "0 0 40px rgba(255,204,51,0.6)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Planets */}
      {planets.map((planet, index) => {
        const initialRotation = index % 2 === 0 ? 0 : 180;
        return (
          <motion.div
            key={planet.name}
            className="absolute rounded-full border border-gray-300/20"
            style={{
              width: planet.distance * 2,
              height: planet.distance * 2,
            }}
            initial={{ rotate: initialRotation }}
            animate={{ rotate: initialRotation + 360 }}
            transition={{
              duration: planet.duration * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <MagneticWrapper
              className="absolute rounded-full pointer-events-auto"
              strength={1.0}
              style={{
                width: planet.size,
                height: planet.size,
                backgroundColor: planet.color,
                top: "50%",
                left: "100%",
                marginTop: -planet.size / 2,
                marginLeft: -planet.size / 2,
                boxShadow: `0 0 10px ${planet.color}`,
              }}
            >
              {planet.ring && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-gray-400/50 rounded-full" />
              )}
            </MagneticWrapper>
          </motion.div>
        );
      })}
    </div>
  );
}
