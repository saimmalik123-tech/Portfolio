import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
