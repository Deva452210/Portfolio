import React from "react";
import data from "../data/data.json";
import CollectionCard from "../components/CollectionCard"; // adjust path if needed
import BackButton from "../components/BackButton";

const AllCollections = () => {
  return (
    <section
      className=" pt-32 py-16 px-4 text-center"
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
          COLLECTIONS
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {data.MyCollections.map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default AllCollections;
