import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideGigsDetails = () => {
  const { state: gig } = useLocation();
  const navigate = useNavigate();

  if (!gig) {
    return (
      <div className="pt-24 text-center">
        <p>No side gig found.</p>
        <button onClick={() => navigate(-1)} className="underline mt-4">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="pt-32 px-4 max-w-4xl mx-auto">
      <img
        src={gig.image}
        alt={gig.title}
        className="w-full max-h-fit object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">{gig.title}</h1>
      <p className="italic text-gray-600 mb-4">{gig.subtitle}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {gig.tags.map((tag, i) => (
          <span key={i} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-lg leading-relaxed">
        {gig.description || "Description coming soon..."}
      </p>
    </section>
  );
};

export default SideGigsDetails;
