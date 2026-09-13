"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cpu, Layers, Coffee, Zap } from "lucide-react";

const coreSkills = [
  {
    category: "CORE LANGUAGE",
    title: "Python",
    icon: Terminal,
    tags: ["Python 3.12", "AsyncIO", "OOP", "Scripting"],
  },
  {
    category: "CORE LANGUAGE",
    title: "Java",
    icon: Coffee,
    tags: ["Java", "OOP", "Data Structures", "Backend Systems"],
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI & RAG Systems",
    icon: Cpu,
    tags: ["ChromaDB", "Vector Search", "Gemini AI", "Claude AI"],
  },
  {
    category: "DATA SCIENCE & AI",
    title: "Machine Learning (ML)",
    icon: Layers,
    tags: ["Predictive Models", "Scikit-Learn", "Model Training", "Evaluation"],
  },
  {
    category: "DATA ARCHITECTURE",
    title: "Data Engineering",
    icon: Database,
    tags: ["PostgreSQL", "SQL", "ETL Pipelines", "Data Processing"],
  },
  {
    category: "MICROSERVICES",
    title: "FastAPI & Backend",
    icon: Zap,
    tags: ["FastAPI", "REST APIs", "Microservices", "Pydantic"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-20 sm:pt-24 pb-20 scroll-mt-20 relative z-10 bg-transparent border-t border-[#CFE8D6]/10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs font-mono text-[#95C7A4] uppercase tracking-[0.25em] mb-2 font-semibold">
            <span className="w-5 h-[1px] bg-[#95C7A4]" /> SKILLS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5FAF7] font-heading tracking-tight">
            Core Skills
          </h2>
        </motion.div>

        {/* Grid of Core Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSkills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div 
                key={skill.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#CFE8D6]/15 flex flex-col justify-between group hover:border-[#95C7A4]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(18,27,22,0.6)]"
              >
                <div>
                  {/* Card Header: Icon Box + Category Sub-label & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-[#25332B] text-[#95C7A4] border border-[#CFE8D6]/15 group-hover:border-[#95C7A4]/30 group-hover:scale-105 transition-all flex items-center justify-center flex-shrink-0">
                      <SkillIcon size={24} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#95C7A4] font-bold tracking-widest uppercase block mb-1">
                        {skill.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F5FAF7] font-heading group-hover:text-white transition-colors">
                        {skill.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skill.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-[#18231C]/90 border border-[#CFE8D6]/15 text-xs font-mono text-[#CFE8D6]/80 group-hover:border-[#95C7A4]/25 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
