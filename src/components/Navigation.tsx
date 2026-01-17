"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Reflection", id: "reflection" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          AMD
        </motion.div>

        {/* Nav Items - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group text-sm font-medium text-slate-300 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <motion.div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
                transition={{ type: "spring", stiffness: 380, damping: 40 }}
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 rounded-lg text-sm font-semibold transition-all shadow-lg"
        >
          Contact
        </motion.a>
      </div>
    </motion.nav>
  );
}
