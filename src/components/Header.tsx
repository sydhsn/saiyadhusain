"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-[#3345A4] dark:bg-gray-900 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Gradient Text Logo */}
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" className="h-auto w-auto" />
        </div>

        {/* Right: Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-white dark:text-gray-300 hover:text-[#ff0058] dark:hover:text-[#ff0058] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white dark:text-gray-300 hover:text-[#ff0058] dark:hover:text-[#ff0058] transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white dark:text-gray-300 hover:text-[#ff0058] dark:hover:text-[#ff0058] transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white dark:text-gray-300 hover:text-[#ff0058] dark:hover:text-[#ff0058] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3345A4] dark:bg-gray-900 p-4">
          <a
            href="#about"
            className="block text-white dark:text-gray-300 hover:text-[#ff0058] dark:hover:text-[#ff0058] transition-colors duration-300 py-2"
          >
            About
          </a>
          <a
            href="#skills"
            className="block text-white dark:text-gray-300 hover:text-[#ff0058] dark:hover:text-[#ff0058] transition-colors duration-300 py-2"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-white dark:text-gray-300 hover:text-[#ff0058] dark:hover:text-[#ff0058] transition-colors duration-300 py-2"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-white dark:text-gray-300 hover:text-[#ff0058] dark:hover:text-[#ff0058] transition-colors duration-300 py-2"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
