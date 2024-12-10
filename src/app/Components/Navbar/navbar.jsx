'use client'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-lg w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">LOGO</div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#services" className="hover:text-gray-600">About</a>
          <a href="#portfolio" className="hover:text-gray-600">Lets Connect!</a>
        </div>

        {/* Mobile Menu Toggle with Animation */}
        <button
          className={`md:hidden text-3xl focus:outline-none transform transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose className="transition-all" />
          ) : (
            <GiHamburgerMenu className="transition-all" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white  z-40 flex justify-center items-center mt-16"> {/* mt-16 for navbar height */}
          <div className="flex flex-col space-y-6 text-xl">
            <a href="#" className="hover:text-gray-600">Home</a>
            <a href="#services" className="hover:text-gray-600">About</a>
            <a href="#portfolio" className="hover:text-gray-600">Lets Connect!</a>
          </div>
        </div>
      )}
    </header>
  );
}
