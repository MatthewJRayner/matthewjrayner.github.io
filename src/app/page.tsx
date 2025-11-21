import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <CustomCursor />
      <StarBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
