import React from "react";
import { useLocation } from "react-router-dom";
import data from "../data/data.json";
import ProjectCard from "../components/ProjectCard";

const AllProjects = () => {
  const location = useLocation();
  const selectedCategory = location.state?.category || "Recent";

  const filtered = data.MyProjects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <section
      className="py-14 px-4 pt-24"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        {selectedCategory} Projects
      </h2>

      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filtered.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
