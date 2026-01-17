"use client";

import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Arvindelarosa", label: "GitHub" },
    { icon: FaFacebook, href: "https://web.facebook.com/arvin.delarosa.338", label: "Facebook" },
    { icon: FaEnvelope, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 glass border-t border-slate-700/50 section-container">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">AMD</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-Stack Web Developer & UI/UX Designer crafting beautiful, functional digital experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {["Home", "Skills", "Projects", "Reflection"].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-purple-300">Get In Touch</h4>
            <p className="text-slate-400 text-sm mb-4">
              Let's collaborate and create something amazing together!
            </p>
            <motion.a
              href="mailto:arvin@example.com"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg text-sm font-semibold text-blue-300 transition-all border border-blue-500/30"
            >
              💌 Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-8 py-8 border-t border-b border-slate-700/50"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full text-blue-400 hover:text-cyan-300 hover:shadow-glow transition-all border border-blue-500/30 hover:border-blue-400"
              aria-label={social.label}
              title={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-400 text-sm space-y-2"
        >
          <p>
            © {currentYear} Arvin M. Dela Rosa. All rights reserved.
          </p>
          <p>
            Crafted with <span className="text-red-400 animate-pulse">❤️</span> using <span className="text-blue-300">Next.js</span>, <span className="text-emerald-300">Tailwind CSS</span> & <span className="text-pink-300">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
