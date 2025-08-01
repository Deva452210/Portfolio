import React from "react";
import data from "../data/data.json";
import CollectionCard from "./CollectionCard";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/collections");
  };

  return (
    <section
      className="py-16 px-4 text-center"
      style={{
        backgroundColor: "#111111",
        color: "var(--text-color)",
      }}
    >
      <h2
        className="text-5xl font-bold mb-10"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        MY COLLECTION
      </h2>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {data.MyCollections.map((book) => (
          <CollectionCard key={book.id} {...book} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8">
        <button
          onClick={handleViewAll}
          className="px-6 py-2 cursor-pointer text-sm font-semibold rounded-sm bg-[var(--card-category)] text-[var(--text-color)] hover:bg-[var(--card-background)] transition"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default Collection;
