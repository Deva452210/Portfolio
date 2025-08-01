import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/logo-1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null); // Ref to detect outside click

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleClick = () => navigate("/");

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className="w-full px-6 py-6 text-text-color shadow-md fixed top-0 left-0 z-50"
      style={{ backgroundColor: "var(--background-color-lite)" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-4xl font-bold cursor-pointer"
          onClick={handleClick}
        >
          <img src={logo} alt="" className=" w-[50px] object-cover" />
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex gap-2"
          style={{ fontFamily: "var(--font-primary)" }}
        >
          <button className="px-4 py-2 rounded-md">
            <Link to={"/allprojects"}>Projects</Link>
          </button>
          <button className="px-4 py-2 rounded-md">
            <Link to={"/allsidegigs"}>Side Gigs</Link>
          </button>
          <button className="px-4 py-2 rounded-md">
            <Link to={"/allcollections"}>Collection</Link>
          </button>
          <button
            className="px-4 py-2 font-bold text-black"
            style={{ color: "var(--primary-color)" }}
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden mt-3 flex flex-col gap-3 px-4 pb-4"
        >
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 transition">
            <Link to={"/allprojects"}>Projects</Link>
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 transition">
            <Link to={"/allsidegigs"}>Side Gigs</Link>
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 transition">
            <Link to={"/allcollections"}>Collection</Link>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
