"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Icons from react-icons

const QuickConnect = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Quick Connect
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Let’s connect and collaborate! Reach out to me via LinkedIn, GitHub,
          or WhatsApp.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* GitHub Button */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#005582] transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918652431765" // Removed unnecessary `+` and `-`
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2 col-span-2"
          >
            <FaWhatsapp className="text-xl" />
            <span>WhatsApp Me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickConnect;
