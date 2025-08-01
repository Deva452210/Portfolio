import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CollectionCard = ({ name, description, images }) => {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Touch Handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const swipeThreshold = 50; // Minimum px to be considered swipe

    if (distance > swipeThreshold) {
      nextImage(); // swipe left
    } else if (distance < -swipeThreshold) {
      prevImage(); // swipe right
    }

    // Reset
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto shadow-lg rounded-lg overflow-hidden"
      style={{ backgroundColor: "#171717" }}
    >
      {/* Image Carousel with Swipe */}
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[current]}
          alt={name}
          className="w-full h-80 sm:h-80 md:h-80 lg:h-120 object-cover transition-all duration-300"
        />

        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-[rgba(17,17,17,0.5)] hover:bg-[rgba(17,17,17,1)] text-white px-2 py-2 cursor-pointer rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-[rgba(17,17,17,0.5)] hover:bg-[rgba(17,17,17,1)] text-white px-2 py-2 cursor-pointer rounded-full "
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Info Section */}
      <div className="p-4 text-left">
        <h3
          className="text-lg font-bold mb-1"
          style={{ color: "var(--text-color)" }}
        >
          {name}
        </h3>
        <p className="text-sm" style={{ color: "var(--text-gray)" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
