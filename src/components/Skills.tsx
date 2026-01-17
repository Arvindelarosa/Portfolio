"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programmingLanguages = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 95 },
    { name: "SQL", level: 88 },
    { name: "PHP", level: 85 },
  ];

  const toolsAndFrameworks = [
    { name: "React Native", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "MySQL", level: 88 },
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "Firebase", level: 80 },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-6 relative overflow-hidden section-container"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass p-8 rounded-2xl border border-blue-400/20"
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-300">
              💻 Programming Languages
            </h3>

            <div className="space-y-6">
              {programmingLanguages.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                    <span className="text-sm text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden border border-blue-500/30">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Frameworks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass p-8 rounded-2xl border border-purple-400/20"
          >
            <h3 className="text-2xl font-bold mb-8 text-purple-300">
              🛠️ Tools, Frameworks & Platforms
            </h3>

            <div className="space-y-6">
              {toolsAndFrameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                    <span className="text-sm text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden border border-purple-500/30">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-400"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
