"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { GraduationCap, MapPin, Award, BookOpen } from "lucide-react";

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
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="pt-24 sm:pt-28 pb-20 scroll-mt-20 relative z-10 bg-transparent border-t border-[#CFE8D6]/10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Sample-Matched 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait photo card matching the sample (rounded box, 3:4 aspect, no clipping) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4] rounded-[28px] overflow-hidden glass-panel border border-[#CFE8D6]/20 shadow-[0_20px_50px_rgba(18,27,22,0.9)] bg-[#25332B] group">
              <Image 
                src="/saptaparni-profile-v2.jpg"
                alt="Saptaparni Saha"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25332B]/60 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Title + 3 Descriptive Paragraphs + Glass Stat Cards */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Section Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-[#F5FAF7]">
                About <span className="text-[#95C7A4] text-sage-glow">Me</span>
              </h2>
              <div className="h-1 w-16 bg-[#95C7A4] rounded-full mt-3" />
            </motion.div>

            {/* 3 Sample Descriptive Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-4 text-[#CFE8D6]/85 text-base sm:text-[17px] leading-relaxed font-light mb-8">
              <p>
                I am a Computer Science student specializing in Artificial Intelligence and Data Engineering at Lovely Professional University. I enjoy solving analytical problems by breaking down data challenges into clear, logical steps.
              </p>
              <p>
                My main technical focus is on building reliable backend systems, smart search tools (RAG applications), and full-stack web products. During my Machine Learning internship at Futurense, I built automated data pipelines to make processing faster and smoother.
              </p>
              <p>
                I am always eager to learn new skills and apply logical thinking to write clean, easy-to-maintain software that delivers real-world impact.
              </p>
            </motion.div>

            {/* 4 Soft Glass Detail Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {aboutCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={card.title}
                    className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 border border-[#CFE8D6]/20 shadow-[0_10px_30px_rgba(18,27,22,0.6)]"
                  >
                    <div className="p-2.5 bg-[#95C7A4]/15 rounded-xl text-[#95C7A4] flex-shrink-0 border border-[#95C7A4]/25">
                      <IconComponent size={20} />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-[#CFE8D6]/60 uppercase tracking-wider block">
                        {card.title}
                      </span>
                      <p className="text-[#F5FAF7] font-semibold text-sm font-heading">
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
