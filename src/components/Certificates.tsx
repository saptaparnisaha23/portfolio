"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, ExternalLink } from "lucide-react";

const certificates = [
  { 
    id: 1, 
    title: "Database Management System Part-1", 
    issuer: "Infosys", 
    date: "Jul 2026",
    url: "https://drive.google.com/file/d/12Ggh8q1_KUSj7OqqbR-_2ICdbUP3e6yA/view?usp=drive_link",
    rotate: "-2deg",
    translateY: "0px",
  },
  { 
    id: 2, 
    title: "Java Programming Fundamentals", 
    issuer: "Infosys", 
    date: "Aug 2025",
    url: "https://drive.google.com/file/d/16fsUqmcIfCccUuQvrPTAkkHhqZTyn11A/view?usp=drive_link",
    rotate: "2deg",
    translateY: "-15px",
  },
  { 
    id: 3, 
    title: "100 Days of Code | Python Pro Bootcamp", 
    issuer: "Udemy", 
    date: "Aug 2025",
    url: "https://drive.google.com/file/d/1EQjcFHukxP5Q3ngwFJr07oImT4UoBKk-/view?usp=sharing",
    rotate: "-1deg",
    translateY: "-30px",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="pt-36 sm:pt-44 pb-32 scroll-mt-36 relative z-10 overflow-hidden bg-transparent border-t border-[#CFE8D6]/10">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5FAF7]/[0.06] border border-[#CFE8D6]/20 text-[#95C7A4] font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Qualifications
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading text-[#F5FAF7]">
            Licenses &amp; <span className="text-[#95C7A4] text-sage-glow">Certificates</span>
          </h2>
          <div className="h-1 w-20 bg-[#95C7A4] mx-auto rounded-full mt-4" />
        </motion.div>
      </div>

      {/* Stacked Floating Luxury Stationery Cards Layout */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.id} 
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, rotate: cert.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: cert.rotate }}
              whileHover={{ 
                scale: 1.05, 
                rotate: "0deg", 
                y: -12,
                zIndex: 30,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="w-full glass-panel border border-[#CFE8D6]/20 rounded-[28px] p-8 shadow-[0_20px_50px_rgba(18,27,22,0.7)] hover:border-[#95C7A4]/60 hover:shadow-[0_30px_70px_rgba(149,199,164,0.25)] transition-all duration-500 group cursor-pointer relative z-20 bg-[#1F2B24]/90 backdrop-blur-2xl"
            >
              {/* Header Icon & External Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#95C7A4]/15 flex items-center justify-center text-[#95C7A4] border border-[#95C7A4]/30 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(149,199,164,0.2)]">
                  <Award size={28} />
                </div>
                <div className="p-2.5 rounded-xl bg-[#95C7A4]/10 text-[#95C7A4] border border-[#95C7A4]/20 group-hover:bg-[#95C7A4] group-hover:text-[#25332B] transition-all">
                  <ExternalLink size={16} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#F5FAF7] mb-3 line-clamp-2 font-heading group-hover:text-[#95C7A4] transition-colors leading-snug">
                {cert.title}
              </h3>
              
              <p className="text-[#95C7A4] font-medium text-sm mb-6 font-mono">
                Issued by {cert.issuer}
              </p>

              <div className="pt-4 border-t border-[#CFE8D6]/15 flex justify-between items-center text-xs font-mono text-[#CFE8D6]/70">
                <span className="text-[#95C7A4] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Credential &rarr;
                </span>
                <span>{cert.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
