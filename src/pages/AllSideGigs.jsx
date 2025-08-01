import React from "react";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

const AllSideGigs = () => {
  const navigate = useNavigate();

  const handleCardClick = (gig) => {
    navigate(`/sidegig/${gig.id}`, { state: { gig } });
  };

  return (
    <section
      className="pt-32 py-16 px-4 text-center"
      style={{
        backgroundColor: "var(--background-color-lite)",
        color: "var(--text-color)",
      }}
    >
      <h2
        className="text-5xl font-bold mb-10"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        SIDE GIGS
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {data.MyCaseStudies.map((gig) => (
          <div
            key={gig.id}
            onClick={() => handleCardClick(gig)}
            className="rounded-lg shadow-md text-left hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={gig.image}
              alt={gig.title}
              className="w-full h-fit object-cover rounded-md mb-4"
            />
            <div className="px-4 pb-4">
              <h3 className="text-xl font-bold mb-1">{gig.title}</h3>
              <p className="text-sm text-gray-600 mb-2 italic">
                {gig.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllSideGigs;
