import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Optional icon

const BackButton = ({ label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-sm px-4 py-2 rounded-md cursor-pointer  bg-[var(--card-category)] text-[var(--text-color)] hover:bg-[#313131]"
    >
      <ArrowLeft size={16} />
      {label}
    </button>
  );
};

export default BackButton;
