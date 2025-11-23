// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// export default function CustomCursor() {
//   const [isVisible, setIsVisible] = useState(false);
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);
  
//   const springConfig = { damping: 25, stiffness: 700 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       cursorX.set(e.clientX - 16);
//       cursorY.set(e.clientY - 16);
//       setIsVisible(true);
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, [cursorX, cursorY]);

//   // Only show on non-touch devices
//   if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-8 h-8 hidden md:block rounded-full border-2 border-primary pointer-events-none z-[9999]"
//       style={{
//         x: cursorXSpring,
//         y: cursorYSpring,
//         opacity: isVisible ? 1 : 0,
//       }}
//     >
//       {/* <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" /> */}
//     </motion.div>
//   );
// }
