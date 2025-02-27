"use client";
import Image from "next/image";
import aboutImage from "@/assets/images/img.png";

const About = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image src={aboutImage} alt="About" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <p className="text-lg text-gray-600 mb-2">About Me</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Hello, I'm Md Saiyad Husain.
          </h2>
          <p className="text-gray-600 mb-6">
            I am a passionate developer with expertise in web development, UI/UX
            design, and problem-solving. I love building scalable and
            user-friendly applications.
          </p>
          <a
            href="#skills"
            className="bg-[#3345A4] text-white px-6 py-2 rounded-full hover:bg-[#ff0058] transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
