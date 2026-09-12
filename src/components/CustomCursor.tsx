"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);

  // Mouse position state
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer ring
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 220, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Only activate custom cursor on devices with fine pointer (mouse/trackpad)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      // Check if mouse is hovering over an interactive element
      const interactiveEl = target?.closest(
        'button, a, input, textarea, [role="button"], .group, .glass-panel-hover, [data-cursor-hover]'
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);

        // Check if element is a button/card suitable for magnetic attraction
        const isMagneticEl = target?.closest(
          'button, a.bg-\\[\\#95C7A4\\], .group\\/btn, [data-cursor-magnetic]'
        ) as HTMLElement | null;

        if (isMagneticEl) {
          setIsMagnetic(true);
          const rect = isMagneticEl.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          // Pull cursor slightly toward target center (22% pull)
          const pullX = e.clientX + (centerX - e.clientX) * 0.22;
          const pullY = e.clientY + (centerY - e.clientY) * 0.22;

          mouseX.set(pullX);
          mouseY.set(pullY);
          return;
        } else {
          setIsMagnetic(false);
        }
      } else {
        setIsHovered(false);
        setIsMagnetic(false);
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Smooth Animated Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isMagnetic ? 68 : isHovered ? 56 : 32,
          height: isMagnetic ? 68 : isHovered ? 56 : 32,
          backgroundColor: isHovered
            ? "rgba(149, 199, 164, 0.12)"
            : "rgba(149, 199, 164, 0.04)",
          borderColor: isHovered
            ? "rgba(149, 199, 164, 0.7)"
            : "rgba(149, 199, 164, 0.35)",
          scale: isMagnetic ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="fixed top-0 left-0 rounded-full border border-[#95C7A4]/40 pointer-events-none transition-shadow duration-300 shadow-[0_0_18px_rgba(149,199,164,0.25)]"
      />

      {/* Inner Precision Sage Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#CFE8D6" : "#95C7A4",
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#95C7A4] pointer-events-none shadow-[0_0_10px_rgba(149,199,164,0.8)]"
      />
    </div>
  );
}
