import React from "react";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

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
      <div className="max-w-7xl mx-auto relative flex items-center justify-between mb-10">
        {/* Back Button on the left */}
        <div className="absolute left-0">
          <BackButton />
        </div>

        {/* Centered Title */}
        <h2
          className="w-full text-5xl font-bold text-center"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          SIDE GIGS
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
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
