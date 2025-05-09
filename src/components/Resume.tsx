"use client";
import Image from "next/image";
import { FaDownload, FaStar } from "react-icons/fa";
import resumeImage from "@/assets/images/react-img.png";
const Resume = () => {
  const handleDownload = () => {
    const pdfUrl = "/resume.pdf"; // Corrected path
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-4xl font-bol mb-4">My Resume</h2>
            <p className="mb-6">
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
              <p className="ml-2">
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
