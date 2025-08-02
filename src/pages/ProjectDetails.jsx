import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="text-center py-20 pt-32">
        <p className="text-xl text-red-600">Project not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl pt-28 py-10 px-6  mx-auto">
        {/* Back Button on the left */}
        <BackButton />
      </div>

      <section
        className=" pt-0 py-20 px-6 max-w-4xl mx-auto"
        style={{
          backgroundColor: "var(--background-color-lite)",
          color: "var(--text-color)",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-fit object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
        <p className="text-md mb-4">{project.desc}</p>

        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
