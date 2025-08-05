import nameImg from "/assets/name.png";
import {
  Github,
  Linkedin,
  Brush,
  CodeXml,
  CircleArrowRight,
} from "lucide-react";
// import profileImg from "/assets/heroBg.png";

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
              color: "var(--primary-color)",}}
          >
            I’m Devakarun
          </h1> */}

          <img src={nameImg} alt="" className=" object-cover" />

          {/* Description (Bottom) */}
          <p className="text-lg md:text-lg max-w-lg text-center">
            I am a Software developer with 1+ years of experience
          </p>

          {/* Contact */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button className="px-4 py-2 rounded text-white font-semibold  cursor-pointer  bg-[var(--card-category)]  hover:bg-[#313131] ">
              Contact me
            </button>
            <button className="px-4 py-2 rounded flex items-center gap-1 font-semibold  bg-[var(--primary-color)] hover:bg-[#F5D400]  text-black cursor-pointer ">
              About me
              <CircleArrowRight size={18} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="p-4 rounded-full cursor-pointer  bg-[var(--card-category)]  hover:bg-[#313131] ">
              <Github />
            </div>
            <div className="p-4 rounded-full cursor-pointer  bg-[var(--card-category)]  hover:bg-[#313131] ">
              <Linkedin />
            </div>
            <div className="p-4 rounded-full cursor-pointer  bg-[var(--card-category)]  hover:bg-[#313131] ">
              <Brush />
            </div>
            <div className="p-4 rounded-full cursor-pointer  bg-[var(--card-category)]  hover:bg-[#313131] ">
              <CodeXml />
            </div>
          </div>
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
