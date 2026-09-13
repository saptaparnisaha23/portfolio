"use client";

import { motion } from "framer-motion";
import { Award, Code, Trophy, Sparkles, Star } from "lucide-react";
import clsx from "clsx";

const achievements = [
  {
    id: 1,
    number: "8.04",
    suffix: "/10",
    label: "CGPA Score",
    description: "Academic excellence in B.Tech Computer Science & Engineering.",
    icon: Award,
    height: "lg:h-72",
    offset: "lg:mt-0",
  },
  {
    id: 2,
    number: "GSSoC",
    suffix: "'24",
    label: "Open Source Contributor",
    description: "Active contributor to GirlScript Summer of Code repositories.",
    icon: Code,
    height: "lg:h-84",
    offset: "lg:-mt-6",
  },
  {
    id: 3,
    number: "5+",
    suffix: "Models",
    label: "AI & ML Projects",
    description: "Architected RAG pipelines, FastAPI services, and predictive models.",
    icon: Star,
    height: "lg:h-76",
    offset: "lg:mt-4",
  },
  {
    id: 4,
    number: "2+",
    suffix: "Events",
    label: "Hackathons Participated",
    description: "Built full-stack prototype applications under high-pressure sprints.",
    icon: Trophy,
    height: "lg:h-80",
    offset: "lg:-mt-4",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative z-10 bg-[#1F2B24]/20 backdrop-blur-sm border-t border-[#CFE8D6]/10">
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5FAF7]/[0.06] border border-[#CFE8D6]/20 text-[#95C7A4] font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Recognition
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading text-[#F5FAF7]">
            Milestones &amp; <span className="text-[#95C7A4] text-sage-glow">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-[#95C7A4] mx-auto rounded-full mt-4" />
        </motion.div>
      </div>

      {/* Four Floating Statistic Cards with Staggered Heights & Whitespace */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-start">
          {achievements.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={clsx(
                  "glass-panel border border-[#CFE8D6]/20 rounded-[32px] p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(18,27,22,0.8)] hover:border-[#95C7A4]/50 hover:shadow-[0_30px_70px_rgba(149,199,164,0.2)] transition-all duration-500 group bg-[#25332B]/90 backdrop-blur-2xl relative overflow-hidden",
                  item.height,
                  item.offset
                )}
              >
                {/* Frosted Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#95C7A4]/15 border border-[#95C7A4]/30 flex items-center justify-center text-[#95C7A4] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(149,199,164,0.2)]">
                  <IconComp size={24} />
                </div>

                {/* Animated Upward Counter / Text */}
                <div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#F5FAF7] font-heading tracking-tight group-hover:text-[#95C7A4] transition-colors">
                      {item.number}
                    </span>
                    <span className="text-sm font-mono text-[#95C7A4] font-bold">
                      {item.suffix}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F5FAF7] font-heading mb-2">
                    {item.label}
                  </h3>

                  <p className="text-xs text-[#CFE8D6]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Decorative Divider */}
                <div className="mt-6 pt-4 border-t border-[#CFE8D6]/10 flex items-center">
                  <span className="w-10 h-0.5 bg-[#95C7A4]/40 rounded-full group-hover:w-16 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
