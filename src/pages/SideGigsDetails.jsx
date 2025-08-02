import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import BackButton from "../components/BackButton";

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

  const renderList = (items) => (
    <ul className="list-disc list-inside space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-sm text-[var(--text-gray)]">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="max-w-4xl pt-28 px-6 mx-auto">
        <BackButton />
      </div>

      <section
        className="pt-6 pb-20 px-6 max-w-4xl mx-auto"
        style={{
          backgroundColor: "var(--background-color-lite)",
          color: "var(--text-color)",
        }}
      >
        <img
          src={gig.image}
          alt={gig.title}
          className="w-full rounded-lg mb-6 object-cover"
        />

        <h1 className="text-4xl font-bold mb-4">{gig.title}</h1>
        <p className="text-base text-gray-400 italic mb-6">{gig.category}</p>
        <p className="text-md text-[var(--text-color)] mb-6">{gig.context}</p>

        {/* Problem */}
        {gig.problem && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Problem</h3>
            {renderList(gig.problem)}
          </div>
        )}

        {/* Solution */}
        {gig.solution && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Solution</h3>
            <p className="text-sm text-[var(--text-gray)]">{gig.solution}</p>
          </div>
        )}

        {/* Features */}
        {gig.features && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            {renderList(gig.features)}
          </div>
        )}

        {/* Results */}
        {gig.results && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Results</h3>
            {renderList(gig.results)}
          </div>
        )}

        {/* Learnings */}
        {gig.learnings && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">What I Learned</h3>
            {renderList(gig.learnings)}
          </div>
        )}

        {/* My Role */}
        {gig.myRole && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">My Role</h3>
            {renderList(gig.myRole)}
          </div>
        )}
      </section>
    </>
  );
};

export default SideGigDetails;
