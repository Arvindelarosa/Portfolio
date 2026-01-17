"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-20 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements - Glassmorphism effect backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Greeting badge with glass effect */}
        <motion.div
          variants={itemVariants}
          className="inline-block glass mb-8"
        >
          <p className="text-blue-400 font-semibold px-4 py-2">👋 Welcome to my portfolio</p>
        </motion.div>

        {/* Profile Photo Placeholder - Animated */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
          >
            {/* Glowing border background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-lg animate-glow-pulse"></div>
            
            {/* Main glass container */}
            <div className="relative w-full h-full glass rounded-2xl flex items-center justify-center overflow-hidden border-2 border-blue-400/30">
              {/* Actual profile photo */}
              <Image
                src="https://scontent.fmnl33-4.fna.fbcdn.net/v/t39.30808-6/481174016_675744384882729_8330490473690316203_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFpxn_JNeODl6IYvsmdLtINMvEr7oebWkYy8Svuh5taRtj8G_6z8QyXXAuxAbA-HRHi4wUKOSsmJePprJQ3AXQP&_nc_ohc=mnSCNoJ3z7kQ7kNvwFZcYHJ&_nc_oc=AdmOLLhbfrGRLvOuBBEPzp69UhF4AYff3X7QtM1Ga7etWmZh7OKzQYQTCzALU_M5QM8&_nc_zt=23&_nc_ht=scontent.fmnl33-4.fna&_nc_gid=sSPIWgear6njz9MiGE9yrA&oh=00_AfoxtMVpJA1UBV0tUAKHD-1rU9wCY3hOPeuUTrdvcXX89Q&oe=69718ABC"
                alt="Arvin M. Dela Rosa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Arvin M. Dela Rosa</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-300 mb-8"
        >
          Full-Stack Web Developer & UI/UX Designer
        </motion.p>

        {/* Description with accomplishment and interest */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12">
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Passionate about creating beautiful, functional web experiences. My biggest accomplishment has been developing responsive, interactive web applications that seamlessly bridge design and functionality. I specialize in modern web technologies and am deeply interested in AI-driven solutions and intelligent user interfaces.
          </p>
          
          {/* Accomplishment and Interest cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="glass p-6 rounded-lg border border-blue-400/20">
              <h3 className="text-blue-400 font-semibold mb-2">🏆 Accomplishment</h3>
              <p className="text-slate-400 text-sm">
                Built full-stack web applications with modern frameworks, focusing on responsive design and user-centric development.
              </p>
            </div>
            <div className="glass p-6 rounded-lg border border-purple-400/20">
              <h3 className="text-purple-400 font-semibold mb-2">🎯 Interests</h3>
              <p className="text-slate-400 text-sm">
                Web Development with growing passion for AI/ML applications and creating intelligent, intuitive user experiences.
              </p>
            </div>
          </div>

          {/* Tech stack pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="px-3 py-1 glass rounded-full text-xs text-cyan-300">React</span>
            <span className="px-3 py-1 glass rounded-full text-xs text-blue-300">Next.js</span>
            <span className="px-3 py-1 glass rounded-full text-xs text-emerald-300">Tailwind CSS</span>
            <span className="px-3 py-1 glass rounded-full text-xs text-purple-300">TypeScript</span>
            <span className="px-3 py-1 glass rounded-full text-xs text-pink-300">Framer Motion</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-glow transition-all inline-flex items-center gap-2 group"
          >
            View My Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass rounded-lg font-semibold border border-blue-400/50 hover:bg-white/20 transition-all inline-flex items-center gap-2"
          >
            <FiDownload size={18} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: FaGithub, label: "GitHub", href: "#" },
            { icon: FaLinkedin, label: "LinkedIn", href: "#" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full text-blue-400 hover:text-cyan-300 hover:shadow-glow transition-all"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-400 hidden md:block"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
