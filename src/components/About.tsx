"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Code2, Sparkles, MapPin, Award, BookOpen, Terminal, Database, Cpu, Layers } from "lucide-react";

const coreSkills = [
  {
    name: "Python",
    category: "AI & Core Logic",
    description: "Primary language for AI modeling, backend development, and automation.",
    icon: Terminal,
  },
  {
    name: "FastAPI",
    category: "API & Microservices",
    description: "High-performance asynchronous REST APIs & backend orchestration.",
    icon: Cpu,
  },
  {
    name: "RAG & ChromaDB",
    category: "AI & Vector Search",
    description: "Retrieval-Augmented Generation, vector indexation, & semantic search.",
    icon: Sparkles,
  },
  {
    name: "SQL & PostgreSQL",
    category: "Database Engineering",
    description: "Relational schema design, data modeling, & query optimization.",
    icon: Database,
  },
  {
    name: "Data Science & EDA",
    category: "Analytics & ML",
    description: "Data processing & exploratory analysis using Pandas & NumPy.",
    icon: Layers,
  },
  {
    name: "React & Next.js",
    category: "Frontend Systems",
    description: "Building fast, responsive, & interactive modern web applications.",
    icon: Code2,
  },
];

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
    <section id="about" className="py-32 relative z-10 bg-[#1F2B24]/70 backdrop-blur-md border-t border-[#CFE8D6]/10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5FAF7]/[0.06] border border-[#CFE8D6]/20 text-[#95C7A4] font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Discovery
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading text-[#F5FAF7]">
            About <span className="text-[#95C7A4] text-sage-glow">Me</span>
          </h2>
          <div className="h-1 w-20 bg-[#95C7A4] mx-auto lg:mx-0 rounded-full mt-4" />
        </motion.div>

        {/* Editorial Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-28">
          
          {/* Left: Portrait with rounded 32px corners */}
          <motion.div 
            className="w-full lg:w-5/12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants} 
              className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden glass-panel border border-[#CFE8D6]/20 shadow-[0_20px_50px_rgba(18,27,22,0.9)] group"
            >
              <Image 
                src="/saptaparni-profile-v2.jpg"
                alt="Saptaparni Saha"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25332B] via-transparent to-transparent opacity-85" />
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
            <div className="space-y-6 mb-12">
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

        {/* LUXURY SKILLS SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="pt-8"
        >
          <div className="mb-12 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold flex items-center justify-center lg:justify-start gap-3 text-[#F5FAF7] font-heading">
              <Code2 className="text-[#95C7A4]" /> Core Skills &amp; Proficiencies
            </h3>
            <p className="text-sm text-[#CFE8D6]/70 mt-2 font-light">
              Technical proficiencies in AI engineering, framework orchestration, and data science.
            </p>
          </div>

          {/* Grid of Core Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSkills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div 
                  key={skill.name} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-[#CFE8D6]/20 flex flex-col justify-between group relative overflow-hidden shadow-[0_10px_30px_rgba(18,27,22,0.6)]"
                >
                  <div>
                    {/* Header: Icon & Category Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-[#95C7A4]/15 text-[#95C7A4] border border-[#95C7A4]/25 group-hover:scale-110 group-hover:bg-[#95C7A4]/20 transition-all">
                        <SkillIcon size={20} />
                      </div>
                      <span className="font-mono text-[11px] text-[#95C7A4] font-semibold px-3 py-1 rounded-full bg-[#95C7A4]/10 border border-[#95C7A4]/20 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-[#F5FAF7] font-heading mb-2 group-hover:text-[#95C7A4] transition-colors">
                      {skill.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#CFE8D6]/70 leading-relaxed font-light">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line on Hover */}
                  <div className="mt-5 pt-3 border-t border-[#CFE8D6]/10 flex items-center justify-between text-xs font-mono text-[#CFE8D6]/50">
                    <span>Core Competency</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#95C7A4] group-hover:animate-ping" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
