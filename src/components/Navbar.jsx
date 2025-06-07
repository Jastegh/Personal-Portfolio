import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#top" className="text-2xl font-bold">
          Jastegh's Portfolio
        </a>

        {/* Hamburger Menu Button - Visible on Small Screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links - hidden on small screens, shown on md+ */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#top" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#work-experience" className="hover:text-gray-400 transition">
            Work
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>
      </div>

      {/* Dropdown Menu - visible only on small screens when open */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 pb-4">
          <a href="#top" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="block hover:text-gray-400">
            Projects
          </a>
          <a href="#work-experience" className="block hover:text-gray-400">
            Work
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;