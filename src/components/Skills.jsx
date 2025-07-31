import React from "react";
import data from "../data/data.json"; // Make sure MySkills is inside this JSON

const Skills = () => {
  return (
    <section
      className="py-14 px-4 text-center"
      style={{
        backgroundColor: "#3E2DC0",
        background:
          "linear-gradient(90deg, rgba(62, 45, 192, 1) 0%, rgba(141, 33, 127, 1) 50%, rgba(29, 21, 90, 1) 100%)",
      }}
    >
      <h2
        className="text-5xl font-bold mb-10"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        SKILLS
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {data.MySkills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center gap-2 px-4 py-3 bg-[var(--text-color)] text-white rounded-md shadow-md hover:scale-105 transition cursor-pointer"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-18 h-18 object-contain"
            />
            {/* <span className="text-sm text-black font-medium w-[90px]">
              {skill.name}
            </span> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
