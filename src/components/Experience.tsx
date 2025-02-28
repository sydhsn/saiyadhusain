"use client";
import experiencesimg from "@/assets/images/experiences.png";
import Image from "next/image";

const experience = [
  {
    type: "2 Years of web application development exprience with JavaScript & PHP.",
  },
  {
    type: "2 Years of mobile application development exprience with angularjs and ionic.",
  },
  {
    type: "5 Years of web application development exprience with React JS & Redux.",
  },
  {
    type: "1 Years of mobile application development exprience with React Native.",
  },
  { type: "Currently working on React Native & React JS and AWS, AI & ML." },
];

const Experience = () => {
  return (
    <section className="py-16" id="experience">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={experiencesimg}
              alt="Experiences"
              width={350}
              height={350}
            />
          </div>
          {/* Right: Text Content */}
          <div className="flex-grow p-6">
            <p className="text-lg mb-2">Experience</p>
            <h2 className="text-3xl font-bold mb-4">Skill-Based Experience</h2>
            <ul className="space-y-4">
              {experience.map((item, index) => (
                <li key={index}>
                  <span className="text-[#3345A4] mr-2">•</span>
                  {item.type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
