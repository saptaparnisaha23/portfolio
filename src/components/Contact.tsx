"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/a5fce3205d4bd27b976ba3f1a820ccde", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:saptaparnisaha23@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:saptaparnisaha23@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-36 sm:pt-44 pb-32 scroll-mt-36 relative z-10 bg-transparent border-t border-[#CFE8D6]/10 overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#95C7A4]/08 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#CFE8D6]/06 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Panel: Contact Studio Heading & Cards */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5FAF7]/[0.06] border border-[#CFE8D6]/20 text-[#95C7A4] font-mono text-xs uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Contact Studio
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-heading text-[#F5FAF7] leading-[1.1]">
              Let&apos;s Create Something <span className="text-[#95C7A4] text-sage-glow">Beautiful</span>
            </h2>

            <p className="text-[#CFE8D6]/80 text-base md:text-lg mb-10 leading-relaxed font-light">
              Whether you are looking to collaborate on cutting-edge AI/ML models, RAG architectures, or full-time software engineering roles, reach out directly.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 mb-10">
              <a 
                href="mailto:saptaparnisaha23@gmail.com" 
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 border border-[#CFE8D6]/20 group cursor-pointer relative z-20 transition-all duration-300"
              >
                <div className="p-3.5 bg-[#95C7A4]/15 rounded-xl text-[#95C7A4] group-hover:scale-110 group-hover:bg-[#95C7A4] group-hover:text-[#25332B] transition-all duration-300 border border-[#95C7A4]/25">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#CFE8D6]/60 block mb-0.5">Direct Email</span>
                  <span className="text-[#F5FAF7] font-semibold text-sm md:text-base group-hover:text-[#95C7A4] transition-colors font-heading">
                    saptaparnisaha23@gmail.com
                  </span>
                </div>
              </a>

              <a 
                href="https://github.com/saptaparnisaha23/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 border border-[#CFE8D6]/20 group cursor-pointer relative z-20 transition-all duration-300"
              >
                <div className="p-3.5 bg-[#95C7A4]/15 rounded-xl text-[#95C7A4] group-hover:scale-110 group-hover:bg-[#95C7A4] group-hover:text-[#25332B] transition-all duration-300 border border-[#95C7A4]/25">
                  <Github size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#CFE8D6]/60 block mb-0.5">GitHub Repository</span>
                  <span className="text-[#F5FAF7] font-semibold text-sm md:text-base group-hover:text-[#95C7A4] transition-colors font-heading">
                    github.com/saptaparnisaha23
                  </span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/saptaparni-saha/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 border border-[#CFE8D6]/20 group cursor-pointer relative z-20 transition-all duration-300"
              >
                <div className="p-3.5 bg-[#95C7A4]/15 rounded-xl text-[#95C7A4] group-hover:scale-110 group-hover:bg-[#95C7A4] group-hover:text-[#25332B] transition-all duration-300 border border-[#95C7A4]/25">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#CFE8D6]/60 block mb-0.5">LinkedIn Profile</span>
                  <span className="text-[#F5FAF7] font-semibold text-sm md:text-base group-hover:text-[#95C7A4] transition-colors font-heading">
                    linkedin.com/in/saptaparni-saha
                  </span>
                </div>
              </a>
            </div>

            {/* Direct Resume Action Pill */}
            <motion.a 
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(149,199,164,0.4)" }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1GIXXRIwbVm8kWMHgWn4g14vwTQWF1j1C/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#95C7A4] text-[#25332B] font-extrabold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(149,199,164,0.3)] transition-all cursor-pointer relative z-20 text-sm tracking-wide"
            >
              <Download size={18} />
              Download Official Resume (CV)
            </motion.a>
          </motion.div>

          {/* Right Panel: Floating Glass Form Studio */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <form 
              onSubmit={handleSubmit}
              className="glass-panel p-8 sm:p-11 rounded-[32px] border border-[#CFE8D6]/25 shadow-[0_25px_60px_rgba(18,27,22,0.9)] flex flex-col gap-6 relative overflow-hidden bg-[#1F2B24]/90 backdrop-blur-2xl"
            >
              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#95C7A4]/20 text-[#95C7A4] mx-auto flex items-center justify-center border border-[#95C7A4]/40 text-2xl font-bold shadow-[0_0_20px_rgba(149,199,164,0.3)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#F5FAF7] font-heading">Message Delivered!</h3>
                  <p className="text-[#CFE8D6]/80 text-sm max-w-sm mx-auto leading-relaxed font-light">
                    Thank you for writing! Your message was sent directly to <span className="text-[#95C7A4] font-mono font-semibold">saptaparnisaha23@gmail.com</span>. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    type="button"
                    className="text-xs font-mono text-[#95C7A4] underline hover:text-[#CFE8D6] pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F5FAF7] font-heading mb-1.5">
                      Send a Message
                    </h3>
                    <p className="text-xs text-[#CFE8D6]/70 font-light">
                      Please enter your contact details below. Your inquiry will land straight in Saptaparni&apos;s primary inbox.
                    </p>
                  </div>

                  {/* Visitor Name */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="name" className="text-xs font-mono font-medium text-[#CFE8D6]/90 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#25332B]/90 border border-[#CFE8D6]/25 rounded-2xl px-5 py-4 text-[#F5FAF7] placeholder:text-[#CFE8D6]/30 focus:outline-none focus:border-[#95C7A4] focus:ring-1 focus:ring-[#95C7A4] focus:shadow-[0_0_20px_rgba(149,199,164,0.2)] transition-all text-sm font-sans"
                      placeholder="e.g. Alex Smith"
                    />
                  </div>
                  
                  {/* Visitor Email */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="email" className="text-xs font-mono font-medium text-[#CFE8D6]/90 uppercase tracking-wider">
                      Your Email Address (For Reply)
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#25332B]/90 border border-[#CFE8D6]/25 rounded-2xl px-5 py-4 text-[#F5FAF7] placeholder:text-[#CFE8D6]/30 focus:outline-none focus:border-[#95C7A4] focus:ring-1 focus:ring-[#95C7A4] focus:shadow-[0_0_20px_rgba(149,199,164,0.2)] transition-all text-sm font-sans"
                      placeholder="alex@company.com"
                    />
                  </div>
                  
                  {/* Message Content */}
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="message" className="text-xs font-mono font-medium text-[#CFE8D6]/90 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-[#25332B]/90 border border-[#CFE8D6]/25 rounded-2xl px-5 py-4 text-[#F5FAF7] placeholder:text-[#CFE8D6]/30 focus:outline-none focus:border-[#95C7A4] focus:ring-1 focus:ring-[#95C7A4] focus:shadow-[0_0_20px_rgba(149,199,164,0.2)] transition-all resize-none text-sm font-sans"
                      placeholder="Hello Saptaparni, I would like to discuss a project or role..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(149,199,164,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#95C7A4] text-[#25332B] font-extrabold py-4 rounded-full flex justify-center items-center gap-2.5 transition-all mt-2 disabled:opacity-70 shadow-[0_0_20px_rgba(149,199,164,0.35)] relative overflow-hidden group/btn cursor-pointer text-sm tracking-wide font-heading"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-[#25332B] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="relative z-10">Send Message Directly</span>
                        <Send size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
