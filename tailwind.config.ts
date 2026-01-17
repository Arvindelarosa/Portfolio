import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#1e293b",
        accent: "#3b82f6",
        glow: "#60a5fa",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.6)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      backdropFilter: {
        glass: "blur(10px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-in": "slide-in 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          "@apply": "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl",
        },
        ".glass-lg": {
          "@apply": "bg-white/5 backdrop-blur-xl border border-white/10",
        },
        ".gradient-text": {
          "@apply": "bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
        },
        ".glow-accent": {
          "@apply": "shadow-lg shadow-blue-500/50",
        },
        ".btn-glass": {
          "@apply": "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95",
        },
        ".section-container": {
          "@apply": "px-4 md:px-8 lg:px-16 py-20 max-w-7xl mx-auto",
        },
      });
    }),
  ],
};
export default config;
