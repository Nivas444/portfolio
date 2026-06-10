import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CircuitBackground } from "@/components/CircuitBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated circuit board background — fixed behind everything */}
      <CircuitBackground />

      {/* Noise grain texture */}
      <div className="noise-overlay" />

      {/* All content sits above */}
      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Section dividers */}
        <div className="divider" />
        <About />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
