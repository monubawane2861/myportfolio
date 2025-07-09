import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <section id="home">
        {" "}
        <Hero />{" "}
      </section>

      <section id="about" className="py-20 bg-white">
        <About />
      </section>

      <section id="skills" className="py-20 bg-gray-50">
        <Skills />
      </section>

      <section id="projects" className="py-20 bg-white">
        <Projects />
      </section>

      <section id="experience" className="py-20 bg-gray-50">
        <Experience />
      </section>

      <section id="education" className="py-20 bg-white">
        <Education />
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
