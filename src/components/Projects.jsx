import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import data from "../data/data.json"; // Your file has "MyProjects" key

const categories = ["Recent", "java", "frontend", "uiux"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Recent");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // ✅ Use the array inside the MyProjects key
    const filtered = data.MyProjects.filter(
      (project) => project.category === activeTab
    );
    setFilteredProjects(filtered);
  }, [activeTab]);

  return (
    <section className="py-20 bg-gray-50 text-center px-4">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">PROJECTS</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-full text-sm font-medium border ${
              activeTab === category
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300"
            } transition`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
