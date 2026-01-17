"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "EcoSounds Group 9",
      role: "Full-Stack Developer",
      description: "Environmental audio monitoring system with data collection and analysis capabilities for ecological sound monitoring and research.",
      techStack: ["PHP", "MySQL", "Python"],
      link: "https://github.com/Arvindelarosa/ecosoundsgroup9",
      github: "https://github.com/Arvindelarosa/ecosoundsgroup9",
      color: "from-green-500 to-emerald-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9OdqrKF0s4ySHPz7h2HCRIn_fjzNrJisDw&s",
    },
    {
      title: "Boat Registration System",
      role: "Full-Stack Developer",
      description: "Comprehensive boat registration and management system with administrative controls, user authentication, and vessel tracking capabilities.",
      techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/Arvindelarosa/BoatRegSystem",
      github: "https://github.com/Arvindelarosa/BoatRegSystem",
      color: "from-blue-500 to-cyan-500",
      image: null,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-6 relative overflow-hidden section-container"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of academic and personal projects showcasing my expertise in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="glass rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-blue-400/50 transition-all"
            >
              {/* Project Header with gradient or image */}
              <div className={`h-40 bg-gradient-to-br ${project.color} opacity-20 relative overflow-hidden`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-70 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-white/10"
                  ></motion.div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                  🚀 {project.title}
                </h3>
                <p className="text-sm text-blue-400 font-semibold mb-3">Role: {project.role}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-xs rounded-full text-blue-300 border border-blue-500/40 hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-slate-700/40 text-xs rounded-full text-slate-400 border border-slate-600/40">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 flex-1 justify-center py-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg text-sm font-semibold text-blue-300 transition-all border border-blue-500/30"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 flex-1 justify-center py-2 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg text-sm font-semibold text-slate-300 transition-all border border-slate-600/30"
                  >
                    <FaGithub size={14} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
