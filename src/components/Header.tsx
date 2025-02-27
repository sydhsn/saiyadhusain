import Image from "next/image";
import logo from "@/assets/logo.png";
const Header = () => {
  return (
    <header className="sticky top-0 bg-[#3345A4] dark:bg-gray-900 p-2 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Gradient Text Logo (Profile Image Removed) */}
        <div className="flex items-center space-x-4">
          {/* Gradient Text Logo */}
          <Image
            src={logo}
            alt="Logo"
            height={35}
            width={250} // Set the height
          />
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex space-x-6">
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
      </div>
    </header>
  );
};

export default Header;
