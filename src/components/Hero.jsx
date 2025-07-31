import React from "react";
import profileImg from "/assets/heroBg.png";
import nameImg from "/assets/name.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        // backgroundImage: `url(${bgImage})`,
        backgroundColor: "var(--background-color-lite)", // replace with your own background image
      }} // replace with your own background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col  items-center justify-items-center gap-4 text-white">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center gap-2 w-fit">
          {/* Name (Top) */}
          {/* <h1
            className="text-4xl md:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-secondary)",
              color: "var(--primary-color)",
            }}
          >
            I’m Devakarun
          </h1> */}

          <img src={nameImg} alt="" />

          {/* Description (Bottom) */}
          <p className="text-lg md:text-lg max-w-md text-center">
            I am a Software developer with 1+ years of experience
          </p>
        </div>

        {/* Right Section (Profile Image) */}
        {/* <div className="flex justify-center">
          <img
            src={profileImg} // replace with your image
            alt="Profile"
            className="w-60 h-60 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
