import LoadingScreen from "@/components/LoadingScreen";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#081510] text-[#F5FAF7]">
      {/* Custom Sage Cursor */}
      <CustomCursor />

      {/* Initial SS Loader */}
      <LoadingScreen />

      {/* Background stays behind everything */}
      <ParticleBackground />
      
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

