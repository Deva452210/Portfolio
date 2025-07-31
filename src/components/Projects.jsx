import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import data from "../data/data.json"; // Your file has "MyProjects" key
import { useNavigate } from "react-router-dom";

const categories = ["Recent", "Java/Spingboot", "Frontend", "UI/UX"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Recent");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Use the array inside the MyProjects key
    const filtered = data.MyProjects.filter(
      (project) => project.category === activeTab
    );
    setFilteredProjects(filtered);
  }, [activeTab]);

  const handleViewAll = () => {
    navigate("/projects", { state: { category: activeTab } });
  };

  return (
    <section
      className="py-16 text-center px-4 "
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <h2 className="text-4xl font-bold mb-6">PROJECTS</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 cursor-pointer rounded-sm text-md font-semibold ${
              activeTab === category
                ? "bg-[var(--primary-color)] text-[var(--background-color)]"
                : "bg-[var(--background-color)] text-[var(--text-color)] "
            } transition`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-2 justify-items-center ">
        {filteredProjects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      {/* View All Button */}
      <div className="mt-8">
        <button
          onClick={handleViewAll}
          className="px-6 py-2 cursor-pointer text-sm font-semibold rounded-sm bg-[var(--card-category)] text-[var(--text-color)] hover:bg-[var(--card-background)] transition"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default Projects;
