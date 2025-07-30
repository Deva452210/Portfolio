import React from "react";

const ProjectCard = ({ image, title, desc, stack }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 px-2 py-1 rounded-full"
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
