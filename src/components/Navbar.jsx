import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#top" className="text-2xl font-bold">
          Jastegh's Portfolio
        </a>
        <div className="flex space-x-6">
          <a href="#top" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
