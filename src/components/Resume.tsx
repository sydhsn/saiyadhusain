"use client";
import Image from "next/image";
import { FaDownload, FaStar } from "react-icons/fa";
import resumeImage from "@/assets/images/react-img.png";
const Resume = () => {
  const handleDownload = () => {
    const pdfUrl = "@/assets/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section className="bg-gray-50" id="resume">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Resume</h2>
            <p className="text-gray-600 mb-6">
              Download my resume to learn more about my experience, skills, and
              achievements.
            </p>
            {/* Testimonial Section */}
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 ml-2">
                Rated <span className="font-bold">5/5</span> by peers and
                mentors.
              </p>
            </div>
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="bg-[#3345A4] text-white px-6 py-3 rounded-full hover:bg-[#ff0058] transition-colors duration-300 flex items-center space-x-2"
            >
              <FaDownload />
              <span>Download Resume</span>
            </button>
          </div>
          {/* Right: Beautiful Image */}
          <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-end">
            <Image src={resumeImage} alt="Resume" width={350} height={350} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
