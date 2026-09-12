"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Download, FolderGit2, Mail, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

const roles = [
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
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-14 z-10">
        
        {/* Left Editorial Content */}
        <motion.div 
          className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
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
              AI • MACHINE LEARNING • FULL STACK DEVELOPER
            </span>
          </motion.div>
          
          {/* Huge Cinematic Heading */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight font-heading leading-[1.05] text-[#F5FAF7]"
          >
            Hi, I&apos;m <br />
            Saptaparni <span className="text-surname-gradient drop-shadow-[0_0_25px_rgba(149,199,164,0.35)]">Saha</span>
          </motion.h1>
          
          {/* Smooth Morphing Role */}
          <motion.div variants={itemVariants} className="h-10 md:h-12 mb-6">
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
          <motion.p variants={itemVariants} className="text-[#CFE8D6]/85 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            AI &amp; Machine Learning Engineer specializing in Retrieval-Augmented Generation (RAG), high-throughput FastAPI backends, and elegant production web applications.
          </motion.p>
          
          {/* Pill-Shaped Magnetic Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-12">
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
          <motion.div variants={itemVariants} className="flex items-center gap-4 relative z-20">
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

        {/* Right Photograph Showcase Frame */}
        <motion.div 
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center"
          >
            {/* Soft Ambient Radial Halo */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(149,199,164,0.25)_0%,transparent_70%)] blur-3xl -z-10 animate-pulse" />

            {/* Outer Rotating Dotted Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-14px] rounded-full border border-dashed border-[#95C7A4]/40"
            />
            {/* Inner Counter-Rotating Dotted Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-28px] rounded-full border border-dashed border-[#CFE8D6]/25"
            />
            
            {/* Orbiting Micro-Particles */}
            <div className="absolute top-2 -right-3 w-3 h-3 rounded-full bg-[#95C7A4] blur-[0.5px] animate-bounce" />
            <div className="absolute bottom-8 -left-4 w-2 h-2 rounded-full bg-[#CFE8D6] blur-[0.5px] animate-pulse" />
            <div className="absolute top-1/2 -left-8 w-2 h-2 rounded-full bg-[#95C7A4]/80 blur-[0.5px]" />

            {/* Luxury Profile Container with Glass Reflection Highlight */}
            <div className="relative w-full h-full rounded-[36px] overflow-hidden border-2 border-[#CFE8D6]/30 shadow-[0_25px_60px_rgba(18,27,22,0.9)] glass-panel group">
              <Image 
                src="/saptaparni-profile-v2.jpg"
                alt="Saptaparni Saha"
                fill
                className="object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Subtle Glass Reflection Angle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#25332B]/60 via-transparent to-white/10 opacity-70 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
