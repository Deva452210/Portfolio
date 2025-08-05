import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { ExternalLink } from "lucide-react";
import data from "../data/data.json"; // Add at the top with other imports
import ProjectCard from "../components/ProjectCard"; // If not imported already

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
      <div className="max-w-4xl pt-28 py-10 px-6 mx-auto">
        <BackButton />
      </div>

      <section
        className="relative pt-0 pb-20 px-6 max-w-4xl mx-auto"
        style={{
          backgroundColor: "var(--background-color-lite)",
          color: "var(--text-color)",
        }}
      >
        {/* Floating card only visible on large screens */}
        {project.liveLink && (
          <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
            <div
              className="bg-white shadow-lg rounded-lg p-4 w-[260px] flex flex-col items-center"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-color)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded mb-3"
              />
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center font-semibold bg-[var(--primary-color)] hover:bg-[#F5D400] text-black py-2 px-4 rounded"
              >
                View Live
              </a>
            </div>
          </div>
        )}

        {/* Main Content */}
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

      {/* Sticky button for mobile */}
      {project.liveLink && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 px-4 py-3 bg-[var(--card-background)] shadow-md z-50">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded font-medium"
          >
            🔗 View Live
          </a>
        </div>
      )}

      {/* Similar Projects Section */}
      {/* Similar Projects Section */}
      {project && (
        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Similar Projects
          </h2>

          {(() => {
            // Step 1: Filter next 3 from same category and ID > current
            const similarCategoryProjects = data.MyProjects.filter(
              (p) => p.category === project.category && p.id > project.id
            ).slice(0, 3);

            // Step 2: Fallback to any available projects after current.id (if same-category is empty)
            const fallbackProjects =
              similarCategoryProjects.length > 0
                ? similarCategoryProjects
                : data.MyProjects.filter(
                    (p) => p.id > project.id && p.id !== project.id
                  ).slice(0, 3);

            return (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {fallbackProjects.map((similarProject) => (
                  <div
                    key={similarProject.id}
                    onClick={() =>
                      navigate(`/project/${similarProject.id}`, {
                        state: { project: similarProject },
                      })
                    }
                    className="cursor-pointer"
                  >
                    <ProjectCard {...similarProject} />
                  </div>
                ))}
              </div>
            );
          })()}
        </section>
      )}
    </>
  );
};

export default ProjectDetails;
