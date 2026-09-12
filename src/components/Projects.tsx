"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import clsx from "clsx";

const projects = [
  {
    id: 1,
    title: "DocuMind AI",
    subtitle: "Enterprise Document Intelligence & RAG System",
    description: "An AI-powered document intelligence RAG platform to process PDF, DOCX, PPTX, and TXT files using semantic chunking, BM25, and ChromaDB vector indexing.",
    image: "/documind-v2.png",
    tags: ["RAG", "FastAPI", "React", "ChromaDB", "Gemini"],
    github: "https://github.com/saptaparnisaha23/DocuMind-AI",
    demo: "https://github.com/saptaparnisaha23/DocuMind-AI",
    offset: "lg:mt-0",
  },
  {
    id: 2,
    title: "Student Performance Tracker",
    subtitle: "Real-Time Student Analytics & Insights System",
    description: "Full-stack student analytics system to manage, store, and analyze academic performance data with a real-time interactive dashboard.",
    image: "/student-v2.png",
    tags: ["FastAPI", "PostgreSQL", "React", "Plotly"],
    github: "https://github.com/saptaparnisaha23/student-performance-dashboard",
    demo: "https://github.com/saptaparnisaha23/student-performance-dashboard",
    offset: "lg:mt-12",
  },
  {
    id: 3,
    title: "Doom Scrolling EDA",
    subtitle: "Behavioral Analytics & Screen Time Consumption Patterns",
    description: "Exploratory Data Analysis of digital user scrolling behaviors to uncover engagement patterns, screen time habits, and content consumption trends.",
    image: "/doom-v2.png",
    tags: ["Python", "Pandas", "EDA", "Seaborn"],
    github: "https://github.com/saptaparnisaha23",
    demo: "https://github.com/saptaparnisaha23",
    offset: "lg:mt-6",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={clsx(
        "group relative w-full rounded-[32px] glass-panel border border-[#CFE8D6]/20 p-7 flex flex-col transition-all duration-500 hover:border-[#95C7A4]/50 hover:shadow-[0_30px_70px_rgba(18,27,22,0.9)] overflow-hidden bg-[#1F2B24]/80 backdrop-blur-2xl",
        project.offset
      )}
    >
      {/* Spotlight Effect Glow */}
      <motion.div 
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-80 h-80 bg-[#95C7A4]/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Large Rounded Screenshot (rounded-[24px]) */}
      <div className="relative w-full h-60 rounded-[24px] overflow-hidden mb-6 border border-[#CFE8D6]/15 shadow-lg bg-[#25332B]">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#25332B]/85 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-500 z-10" />
      </div>

      {/* Project Heading & Subtitle */}
      <div className="flex flex-col flex-grow relative z-10">
        <h3 className="text-2xl font-bold text-[#F5FAF7] mb-1 font-heading tracking-tight group-hover:text-[#95C7A4] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-[#95C7A4] font-medium mb-4">
          {project.subtitle}
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[11px] font-mono font-medium bg-[#95C7A4]/10 border border-[#95C7A4]/25 text-[#95C7A4] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-[#CFE8D6]/80 text-sm leading-relaxed mb-6 font-light line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#CFE8D6]/10">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-semibold text-[#CFE8D6] hover:text-[#95C7A4] transition-colors p-2.5 rounded-2xl glass-panel cursor-pointer relative z-20"
            >
              <Github size={16} /> Code
            </a>
          )}
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-xs font-mono font-bold bg-[#95C7A4] text-[#25332B] hover:bg-[#CFE8D6] px-5 py-2.5 rounded-2xl transition-all shadow-[0_0_15px_rgba(149,199,164,0.3)] ml-auto cursor-pointer relative z-20"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 bg-[#1F2B24]/50 backdrop-blur-md border-t border-[#CFE8D6]/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5FAF7]/[0.06] border border-[#CFE8D6]/20 text-[#95C7A4] font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading text-[#F5FAF7]">
            Featured <span className="text-[#95C7A4] text-sage-glow">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-[#95C7A4] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Behance Case Study Grid with Editorial Staggered Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
