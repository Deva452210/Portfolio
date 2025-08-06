import { Brush, CodeXml, Github, Linkedin } from "lucide-react";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <div className="p-4 rounded-full cursor-pointer  bg-[var(--card-category)]  hover:text-[var(--primary-color)] ">
        <Github />
      </div>
      <div className="p-4 rounded-full cursor-pointer  bg-[var(--card-category)]  hover:text-[var(--primary-color)] ">
        <Linkedin />
      </div>
      <div className="p-4 rounded-full cursor-pointer  bg-[var(--card-category)]  hover:text-[var(--primary-color)] ">
        <Brush />
      </div>
      <div className="p-4 rounded-full cursor-pointer  bg-[var(--card-category)]  hover:text-[var(--primary-color)] ">
        <CodeXml />
      </div>
    </div>
  );
};

export default SocialIcons;
