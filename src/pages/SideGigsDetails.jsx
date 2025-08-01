import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const SideGigDetails = () => {
  const { id } = useParams();
  const gig = data.MyCaseStudies.find((item) => item.id.toString() === id);

  if (!gig) {
    return (
      <div className="pt-32 text-center text-red-500 text-xl">
        No details found for this side gig.
      </div>
    );
  }

  return (
    <section
      className="pt-32 px-4 py-16 max-w-4xl mx-auto"
      style={{
        backgroundColor: "var(--background-color-lite)",
        color: "var(--text-color)",
      }}
    >
      <h1 className="text-4xl font-bold mb-6">{gig.title}</h1>
      <img
        src={gig.image}
        alt={gig.title}
        className="w-full rounded-lg mb-6 object-cover"
      />
      <p className="text-lg italic text-gray-400 mb-4">{gig.subtitle}</p>
      <div className="text-sm mb-6">{gig.description}</div>

      <div className="flex flex-wrap gap-2">
        {gig.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SideGigDetails;
