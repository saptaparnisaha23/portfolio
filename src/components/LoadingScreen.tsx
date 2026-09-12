"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#081510] text-[#F5FAF7]"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#8FC8A9]/10 blur-[90px] animate-pulse" />

          <div className="relative flex flex-col items-center">
            {/* Outer Rotating Dotted Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-[#8FC8A9]/30"
            />

            {/* Pulsing Sage Circle Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.95, 1.05, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-24 h-24 rounded-full glass-panel border border-[#8FC8A9]/40 flex items-center justify-center shadow-[0_0_30px_rgba(143,200,169,0.2)]"
            >
              <span className="font-heading font-extrabold text-3xl tracking-widest text-[#8FC8A9] text-sage-glow">
                SS
              </span>
            </motion.div>

            {/* Subtitle reveal */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-xs uppercase tracking-[0.3em] text-[#B7C8BF]/80 font-mono"
            >
              Saptaparni Saha
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
