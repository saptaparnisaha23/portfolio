"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#25332B] border-t border-[#CFE8D6]/10 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative">
        <div className="text-[#F5FAF7] font-extrabold text-xl font-heading tracking-tight">
          Saptaparni<span className="text-[#95C7A4]">.</span>
        </div>
        
        {/* Animated Heartbeat Line */}
        <div className="flex items-center gap-2">
          <svg className="w-36 h-8 text-[#95C7A4]" viewBox="0 0 200 40" preserveAspectRatio="none">
            <motion.path 
              d="M0,20 L60,20 L70,8 L80,32 L90,2 L100,38 L110,20 L200,20" 
              fill="none" 
              stroke="#95C7A4" 
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Soft Background Path */}
            <path 
              d="M0,20 L60,20 L70,8 L80,32 L90,2 L100,38 L110,20 L200,20" 
              fill="none" 
              stroke="#95C7A4" 
              strokeWidth="1.5"
              strokeOpacity="0.25"
            />
          </svg>
        </div>

        <p className="text-[#CFE8D6]/60 text-xs font-mono">
          &copy; {new Date().getFullYear()} Saptaparni Saha. Editorial Luxury Portfolio.
        </p>
      </div>
    </footer>
  );
}
