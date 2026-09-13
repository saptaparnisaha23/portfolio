"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Download, FolderGit2, Mail, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

const roles = [
  "AI & Data Engineer",
  "AI Engineer",
  "ML Developer",
  "FastAPI Specialist",
  "Data Analyst",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center z-10">
        
        {/* Centered Editorial Content */}
        <motion.div 
          className="w-full max-w-4xl flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tiny Badge inside Glass Capsule */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5FAF7]/[0.06] border border-[#CFE8D6]/20 mb-6 shadow-[0_0_20px_rgba(149,199,164,0.12)] backdrop-blur-xl"
          >
            <Sparkles size={13} className="text-[#95C7A4]" />
            <span className="text-[#95C7A4] font-mono text-[11px] tracking-[0.2em] uppercase font-semibold">
              AI &amp; DATA ENGINEERING • MACHINE LEARNING • FULL STACK
            </span>
          </motion.div>
          
          {/* Huge Cinematic Heading */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight font-heading leading-[1.08] text-[#F5FAF7]"
          >
            Hi, I&apos;m <span className="text-surname-gradient drop-shadow-[0_0_25px_rgba(149,199,164,0.35)]">Saptaparni Saha</span>
          </motion.h1>
          
          {/* Smooth Morphing Role */}
          <motion.div variants={itemVariants} className="h-10 md:h-12 mb-6 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl font-medium text-[#CFE8D6] font-mono tracking-wide"
              >
                &gt; {roles[currentRoleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>
          
          {/* Calm Editorial Summary */}
          <motion.p variants={itemVariants} className="text-[#CFE8D6]/85 text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light text-center">
            AI &amp; Data Engineer specializing in Machine Learning, Retrieval-Augmented Generation (RAG), high-throughput FastAPI backends, and elegant production web applications.
          </motion.p>
          
          {/* Pill-Shaped Magnetic Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-5 mb-12">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(149,199,164,0.5)" }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1GIXXRIwbVm8kWMHgWn4g14vwTQWF1j1C/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#95C7A4] text-[#25332B] font-extrabold px-9 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(149,199,164,0.3)] cursor-pointer relative z-20 text-sm tracking-wide"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(207,232,214,0.12)", borderColor: "rgba(149,199,164,0.5)" }}
              whileTap={{ scale: 0.97 }}
              href="#projects" 
              className="border border-[#CFE8D6]/30 text-[#CFE8D6] font-semibold px-9 py-4 rounded-full flex items-center justify-center gap-2.5 glass-panel transition-all cursor-pointer relative z-20 text-sm tracking-wide"
            >
              <FolderGit2 size={18} />
              View Projects
            </motion.a>
          </motion.div>

          {/* Translucent Circular Glass Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 relative z-20">
            <motion.a 
              whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(149,199,164,0.2)", borderColor: "rgba(149,199,164,0.6)" }} 
              href="https://github.com/saptaparnisaha23/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-13 h-13 glass-panel rounded-full flex items-center justify-center text-[#CFE8D6] hover:text-[#95C7A4] transition-all cursor-pointer relative z-20 shadow-[0_6px_20px_rgba(18,27,22,0.6)]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(149,199,164,0.2)", borderColor: "rgba(149,199,164,0.6)" }} 
              href="https://www.linkedin.com/in/saptaparni-saha/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-13 h-13 glass-panel rounded-full flex items-center justify-center text-[#CFE8D6] hover:text-[#95C7A4] transition-all cursor-pointer relative z-20 shadow-[0_6px_20px_rgba(18,27,22,0.6)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(149,199,164,0.2)", borderColor: "rgba(149,199,164,0.6)" }} 
              href="mailto:saptaparnisaha23@gmail.com" 
              className="w-13 h-13 glass-panel rounded-full flex items-center justify-center text-[#CFE8D6] hover:text-[#95C7A4] transition-all cursor-pointer relative z-20 shadow-[0_6px_20px_rgba(18,27,22,0.6)]"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
