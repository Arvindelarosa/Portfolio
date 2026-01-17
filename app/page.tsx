import Navigation from "@/src/components/Navigation";
import Hero from "@/src/components/Hero";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Reflection from "@/src/components/Reflection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-x-hidden">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Reflection />
      <Footer />
    </main>
  );
}
