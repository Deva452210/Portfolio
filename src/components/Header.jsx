import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library, install with: npm install lucide-react

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-6 py-4 bg-primary text-text-color shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">DEVAKARUN</div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 ">
          <button className="px-4 py-2 rounded-md hover:cursor-pointer">
            About
          </button>
          <button className="px-4 py-2 rounded-md hover:cursor-pointer">
            Projects
          </button>
          <button className="px-4 py-2 rounded-md hover:cursor-pointer">
            Contact
          </button>
          <button className="px-4 py-2 rounded-md bg-amber-300 hover:bg-amber-400 text-black font-bold cursor-pointer transition">
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 px-4 pb-4">
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 transition">
            About
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Projects
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Contact
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Resume
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
