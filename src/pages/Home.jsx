import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SideGigs from "../components/SideGigs";
import Collection from "../components/Collection";
import ScrollToTopButton from "../components/ScrollToTopButton"; // Add this

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <SideGigs />
      <Collection />
      <ScrollToTopButton /> {/* Add this */}
    </div>
  );
};

export default Home;
