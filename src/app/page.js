import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/HeroSection";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import ServicesSection from "./Components/Services";
import Philosophy from "./Components/Philosphy";

export default function Home() {
  return (
    <div>
    
    <Hero />
    <ServicesSection />
    <Projects />
    <Philosophy />
  </div>
  );
}
