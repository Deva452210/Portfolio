import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import data from "../data/data.json";
import ProjectCard from "../components/ProjectCard";
import BackButton from "../components/BackButton";

const categories = ["Recent", "Java/Spingboot", "Frontend", "UI/UX"];

const AllProjects = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || "Recent";

  const [activeTab, setActiveTab] = useState(initialCategory);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = data.MyProjects.filter(
      (project) => project.category === activeTab
    );
    setFilteredProjects(filtered);
  }, [activeTab]);

  return (
    <section
      className="py-14 pt-32 max-w-7xl mx-auto"
      style={{
        color: "var(--text-color)",
      }}
    >
      <div className="max-w-7xl mx-auto relative flex items-center justify-between mb-10">
        {/* Back Button on the left */}
        <div className="absolute left-0">
          <BackButton />
        </div>

        {/* Centered Title */}
        <h2
          className="w-full text-5xl font-bold text-center"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          PROJECTS
        </h2>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 cursor-pointer rounded-sm text-md font-semibold ${
              activeTab === category
                ? "bg-[var(--primary-color)] text-[var(--background-color-lite)]"
                : "bg-[var(--background-color-lite)] text-[var(--text-color)]"
            } transition`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
