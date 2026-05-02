import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import WikiTools from "@/components/WikiTools";
import Communities from "@/components/Communities";
import Hackathons from "@/components/Hackathons";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import WikiIdentity from "@/components/WikiIdentity";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-cream-50">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <WikiTools />
      <Communities />
      <Hackathons />
      <Skills />
      <Education />
      <WikiIdentity />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
