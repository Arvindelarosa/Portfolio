"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

interface ReflectionItem {
  question: string;
  answer: string;
  icon: string;
}

export default function Reflection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reflections: ReflectionItem[] = [
    {
      question: "What technologies did I use and why?",
      answer:
        "I used PHP and MySQL for backend development because they're reliable for server-side logic and database management. Python was utilized for data processing and automation tasks. On the frontend, I leveraged HTML, CSS, and JavaScript for responsive web design. React Native allows me to build cross-platform mobile applications. Tailwind CSS accelerates styling with utility-first approach. Git and GitHub enable version control and collaboration. These technologies were chosen to create scalable, maintainable applications.",
      icon: "🛠️",
    },
    {
      question: "Which parts were easiest?",
      answer:
        "HTML and CSS styling were straightforward to implement, especially with Tailwind CSS utility classes. JavaScript interactions and DOM manipulation came naturally. The basic PHP backend logic and MySQL queries were manageable. Git version control workflows became second nature quickly. These foundational technologies provided a solid base to build upon.",
      icon: "✨",
    },
    {
      question: "Which parts were most challenging?",
      answer:
        "Integrating PHP backend with responsive frontend designs required careful attention to data flow. Optimizing MySQL queries for performance was complex. Learning React Native for mobile development presented a steep learning curve. Managing state across different parts of the application became challenging as projects grew. Debugging issues across multiple technologies and layers was time-consuming.",
      icon: "🎯",
    },
    {
      question: "What do I want to learn next?",
      answer:
        "I want to deepen my skills in React and modern frontend frameworks like Next.js. I'm interested in advanced React Native optimization and cross-platform mobile development. Learning Node.js for full-stack JavaScript development appeals to me. I also want to explore AI/ML integration in web applications and improve my database optimization skills with advanced SQL techniques.",
      icon: "🚀",
    },
    {
      question: "What apps do I want to build?",
      answer:
        "I want to build cross-platform mobile applications using React Native that solve real-world problems. I'm interested in creating web applications with intelligent features, real-time collaboration tools, and data analytics dashboards. I'd like to develop environmental monitoring solutions, productivity apps, and systems that integrate AI for enhanced user experiences.",
      icon: "💡",
    },
  ];

  return (
    <section
      id="reflection"
      ref={ref}
      className="py-20 px-6 relative overflow-hidden section-container"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-96 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-96 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Development Reflection</span>
          </h2>
          <p className="text-slate-400 text-lg">
            My insights and learnings from building this portfolio
          </p>
        </motion.div>

        {/* Reflection Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {reflections.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="glass p-8 rounded-2xl border-l-4 border-blue-500/50 hover:border-blue-400 transition-all group cursor-pointer relative overflow-hidden"
            >
              <div className="flex gap-4 md:gap-6 relative z-10">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-300 group-hover:text-cyan-300 transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>

              {/* Animated glow background */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-blue-500 transition-opacity pointer-events-none"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Interested in collaborating or learning more about my work?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold shadow-lg hover:shadow-glow transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
