"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Briefcase, Calendar, Sparkles, Building2, ExternalLink, Award, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for soft card glow spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id="experience" className="pt-36 sm:pt-44 pb-32 scroll-mt-36 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5FAF7]/[0.06] border border-[#CFE8D6]/20 text-[#95C7A4] font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Career Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading text-[#F5FAF7]">
            Work <span className="text-[#95C7A4] text-sage-glow">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-[#95C7A4] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Oversized Apple Product Showcase Card */}
        <motion.div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="w-[92%] max-w-6xl mx-auto min-h-[340px] glass-panel border border-[#CFE8D6]/20 rounded-[32px] shadow-[0_25px_60px_rgba(18,27,22,0.85)] overflow-hidden flex flex-col lg:flex-row group transition-all duration-500 hover:border-[#95C7A4]/50 hover:shadow-[0_30px_70px_rgba(149,199,164,0.2)] relative bg-[#1F2B24]/40 backdrop-blur-md"
        >
          {/* Mouse Spotlight Glow */}
          <motion.div 
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="absolute w-96 h-96 bg-[#95C7A4]/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Left Panel (32%) */}
          <div className="lg:w-[32%] bg-[#25332B]/85 p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#CFE8D6]/15 relative overflow-hidden z-10">
            {/* Floating Background Geometric Shapes */}
            <div className="absolute -bottom-24 -left-16 w-44 h-44 rounded-full border-[18px] border-[#95C7A4]/08 pointer-events-none group-hover:scale-125 origin-bottom-left transition-transform duration-700 z-0" />
            <div className="absolute top-6 right-4 w-12 h-12 rounded-xl border border-[#CFE8D6]/20 rotate-45 pointer-events-none animate-pulse z-0" />

            <div className="relative z-20">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#95C7A4]/15 flex items-center justify-center text-[#95C7A4] border border-[#95C7A4]/30 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_20px_rgba(149,199,164,0.2)]">
                  <Building2 size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#95C7A4] uppercase tracking-widest block font-bold">
                    Internship
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAF7] font-heading">
                    Futurense
                  </h3>
                </div>
              </div>

              <h4 className="text-base font-semibold text-[#95C7A4] mb-3.5 flex items-center gap-2">
                <Briefcase size={16} /> Machine Learning Intern
              </h4>

              <div className="inline-flex items-center text-[#CFE8D6] text-xs font-mono bg-[#25332B] px-4 py-2 rounded-full border border-[#CFE8D6]/20 shadow-inner">
                <Calendar size={14} className="mr-2 text-[#95C7A4]" />
                Jun 2026 – Jul 2026
              </div>
            </div>

            {/* Direct Internship Certificate Link */}
            <div className="mt-8 pt-5 border-t border-[#CFE8D6]/15 flex flex-col gap-3 relative z-20">
              <p className="text-xs text-[#CFE8D6]/70 font-mono relative z-20">Full Stack AI &amp; RAG Systems</p>
              <a 
                href="https://drive.google.com/file/d/14dlh0XcSOouJzCC0akyCRvkRhOEG_nIO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-mono font-bold bg-[#95C7A4]/15 border border-[#95C7A4]/40 text-[#95C7A4] hover:bg-[#95C7A4] hover:text-[#25332B] px-4 py-2.5 rounded-2xl transition-all shadow-[0_0_20px_rgba(149,199,164,0.15)] cursor-pointer relative z-20"
              >
                <Award size={15} /> View Internship Certificate
              </a>
            </div>
          </div>

          {/* Right Panel (68%) */}
          <div className="lg:w-[68%] p-8 lg:p-10 relative flex flex-col justify-between bg-[#1F2B24]/40 z-10">
            {/* Title & Bullets */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#F5FAF7] font-heading tracking-tight">
                  Machine Learning Intern
                </h3>
                <a 
                  href="https://drive.google.com/file/d/14dlh0XcSOouJzCC0akyCRvkRhOEG_nIO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold bg-[#95C7A4] text-[#25332B] hover:bg-[#CFE8D6] px-4 py-2 rounded-full transition-all shadow-[0_0_20px_rgba(149,199,164,0.3)] cursor-pointer relative z-20 flex-shrink-0"
                >
                  <Award size={14} /> Certificate <ExternalLink size={12} />
                </a>
              </div>
              
              <p className="text-[#CFE8D6]/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Led the end-to-end design, model evaluation, API orchestration, and deployment of production AI document intelligence systems.
              </p>

              {/* Animated Checkmark Bullet Points */}
              <ul className="text-[#CFE8D6] space-y-4 mb-8 text-sm lg:text-base font-light">
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 size={18} className="text-[#95C7A4] flex-shrink-0 mt-0.5" />
                  <span>Architected <strong>DocuMind AI</strong>, a multi-format document intelligence RAG platform supporting PDF, DOCX, PPTX, and TXT files.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 size={18} className="text-[#95C7A4] flex-shrink-0 mt-0.5" />
                  <span>Engineered hybrid semantic retrieval pipelines blending <strong>ChromaDB</strong>, BM25 keyword matching, Reciprocal Rank Fusion (RRF), and Gemini Embeddings.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <CheckCircle2 size={18} className="text-[#95C7A4] flex-shrink-0 mt-0.5" />
                  <span>Built high-throughput <strong>FastAPI REST APIs</strong> integrated with React &amp; Streamlit user interfaces for real-time document chat.</span>
                </li>
              </ul>
            </div>

            {/* Rounded Technology Chips */}
            <div className="pt-5 border-t border-[#CFE8D6]/15">
              <span className="text-[11px] font-mono text-[#CFE8D6]/60 uppercase tracking-wider block mb-3">Technologies Used</span>
              <div className="flex flex-wrap gap-2.5">
                {["FastAPI", "RAG", "ChromaDB", "React", "Gemini", "Streamlit"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-1.5 bg-[#95C7A4]/10 border border-[#95C7A4]/30 text-[#95C7A4] text-xs font-mono font-semibold rounded-full hover:bg-[#95C7A4] hover:text-[#25332B] transition-all cursor-default shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
