import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ image, title, desc, stack, ...project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`, {
      state: { project: { image, title, desc, stack, ...project } },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-xl shadow-md overflow-hidden w-full cursor-pointer hover:shadow-lg transition"
      style={{
        backgroundColor: "var(--card-background)",
        color: "var(--text-color)",
      }}
    >
      <img src={image} alt={title} className="w-full h-fit object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* One-line description with ellipsis */}
        <p
          className="text-sm mb-3 truncate"
          style={{
            color: "var(--text-gray)",
            maxWidth: "100%",
          }}
        >
          {desc}
        </p>

        <h4 className="font-medium mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="text-xs  px-3 py-2 rounded-sm"
              style={{
                backgroundColor: "var(--card-category)",
                color: "var(--text-color)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
