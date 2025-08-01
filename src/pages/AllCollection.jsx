import React from "react";
import data from "../data/data.json";
import CollectionCard from "../components/CollectionCard"; // adjust path if needed

const AllCollections = () => {
  return (
    <section
      className=" pt-32 py-16 px-4 text-center"
      style={{
        backgroundColor: "var(--background-color-lite)",
        color: "var(--text-color)",
      }}
    >
      <h2
        className="text-5xl font-bold mb-10"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        COLLECTIONS
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {data.MyCollections.map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default AllCollections;
