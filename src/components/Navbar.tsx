"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 160) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 140,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: isScrolled ? 0.96 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={clsx(
          "pointer-events-auto rounded-full transition-all duration-500",
          "bg-[#25332B]/80 backdrop-blur-2xl border border-[#CFE8D6]/20 shadow-[0_15px_40px_rgba(18,27,22,0.8)]",
          "px-5 py-2.5 sm:px-7 sm:py-3 flex items-center justify-between gap-6 max-w-5xl w-full"
        )}
      >
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollTo(e, "#home")}
          className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5FAF7] hover:opacity-90 transition-opacity font-heading"
        >
          Saptaparni<span className="text-[#95C7A4]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={clsx(
                  "text-xs sm:text-sm font-medium transition-all duration-300 relative px-3.5 py-1.5 rounded-full",
                  isActive
                    ? "text-[#95C7A4] font-semibold"
                    : "text-[#CFE8D6]/75 hover:text-[#F5FAF7]"
                )}
              >
                {/* Active Glowing Capsule Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-full bg-[#95C7A4]/15 border border-[#95C7A4]/35 shadow-[0_0_15px_rgba(149,199,164,0.2)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                
                <span className="relative z-10">{link.name}</span>

                {/* Underline Growing from Center */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#95C7A4] rounded-full shadow-[0_0_8px_#95C7A4]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-[#CFE8D6] hover:text-[#95C7A4] transition-colors p-1.5 rounded-full bg-[#95C7A4]/10 border border-[#95C7A4]/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto fixed top-20 left-6 right-6 z-40 bg-[#25332B]/95 backdrop-blur-2xl border border-[#CFE8D6]/20 rounded-3xl p-6 shadow-[0_20px_50px_rgba(18,27,22,0.9)] md:hidden flex flex-col space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={clsx(
                  "text-base font-medium px-4 py-2.5 rounded-2xl transition-all",
                  activeSection === link.href.substring(1)
                    ? "bg-[#95C7A4]/15 text-[#95C7A4] border border-[#95C7A4]/30 font-semibold"
                    : "text-[#CFE8D6]/80 hover:text-[#F5FAF7]"
                )}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
