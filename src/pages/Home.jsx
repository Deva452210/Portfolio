import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SideGigs from "../components/Sidegigs";
import Collection from "../components/Collection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <SideGigs />
      <Collection />
    </div>
  );
};

export default Home;
