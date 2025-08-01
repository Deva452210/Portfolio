import React from "react";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

const SideGigs = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-16 px-4 text-center"
      style={{
        backgroundColor: "var(--background-color)",
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
            onClick={() => navigate("/sidegigsdetails", { state: gig })}
            className=" cursor-pointer rounded-lg shadow-md text-left hover:shadow-xl transition"
          >
            <img
              src={gig.image}
              alt={gig.title}
              className="w-full h-fit object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-1">{gig.title}</h3>
            <p className="text-sm text-gray-200 mb-2">{gig.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideGigs;
