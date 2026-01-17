import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Reflection from "@/components/Reflection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Reflection />
      <Footer />
    </main>
  );
}
