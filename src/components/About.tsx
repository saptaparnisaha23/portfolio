"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Sparkles, MapPin, Award, BookOpen } from "lucide-react";

const aboutCards = [
  {
    title: "University",
    value: "Lovely Professional University",
    sub: "Punjab, India",
    icon: GraduationCap,
  },
  {
    title: "Degree",
    value: "B.Tech in CSE",
    sub: "AI & Data Engineering Specialization",
    icon: BookOpen,
  },
  {
    title: "CGPA Score",
    value: "8.04 / 10",
    sub: "Academic Standing",
    icon: Award,
  },
  {
    title: "Graduation Years",
    value: "2024 – 2028",
    sub: "Full Time Undergraduate",
    icon: MapPin,
  },
];

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="pt-20 sm:pt-24 pb-20 scroll-mt-20 relative z-10 bg-transparent border-t border-[#CFE8D6]/10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5FAF7]/[0.06] border border-[#CFE8D6]/20 text-[#95C7A4] font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles size={14} /> Discovery
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#F5FAF7]">
            About <span className="text-[#95C7A4] text-sage-glow">Me</span>
          </h2>
          <div className="h-1 w-16 bg-[#95C7A4] mx-auto lg:mx-0 rounded-full mt-3" />
        </motion.div>

        {/* Editorial Split Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          
          {/* Left: Portrait filling the box completely, parallel to right content */}
          <motion.div 
            className="w-full lg:w-5/12 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants} 
              className="relative w-full h-full min-h-[380px] lg:min-h-[420px] rounded-[32px] overflow-hidden glass-panel border border-[#CFE8D6]/20 shadow-[0_20px_50px_rgba(18,27,22,0.9)] group bg-[#25332B]"
            >
              <Image 
                src="/saptaparni-profile-v2.jpg"
                alt="Saptaparni Saha"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25332B]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Right: Editorial Typography Short Blocks + Soft Glass Info Cards */}
          <motion.div 
            className="w-full lg:w-7/12 flex flex-col justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Elegant Short Text Blocks */}
            <div className="space-y-6 mb-8">
              <motion.div variants={itemVariants} className="space-y-2">
                <span className="text-xs font-mono font-semibold text-[#95C7A4] uppercase tracking-[0.25em]">
                  ABOUT
                </span>
                <p className="text-2xl sm:text-3xl font-light text-[#F5FAF7] leading-snug font-heading">
                  AI Engineer passionate about RAG systems, FastAPI backends, and intelligent digital products.
                </p>
              </motion.div>

              <motion.p variants={itemVariants} className="text-[#CFE8D6]/80 text-base sm:text-lg leading-relaxed font-light">
                Specializing in Retrieval-Augmented Generation architectures, vector embedding indexes like ChromaDB, predictive data modeling, and production-grade full-stack web applications.
              </motion.p>
            </div>

            {/* 4 Soft Glass Cards Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={card.title}
                    className="glass-panel glass-panel-hover p-6 rounded-2xl flex items-start gap-4 border border-[#CFE8D6]/20 shadow-[0_10px_30px_rgba(18,27,22,0.6)]"
                  >
                    <div className="p-3 bg-[#95C7A4]/15 rounded-xl text-[#95C7A4] flex-shrink-0 border border-[#95C7A4]/25">
                      <IconComponent size={22} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#CFE8D6]/60 uppercase tracking-wider block">
                        {card.title}
                      </span>
                      <p className="text-[#F5FAF7] font-semibold text-sm sm:text-base font-heading">
                        {card.value}
                      </p>
                      <p className="text-[#95C7A4] text-xs font-mono font-medium">
                        {card.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
