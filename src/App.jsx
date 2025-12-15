import { Toaster } from "react-hot-toast";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
