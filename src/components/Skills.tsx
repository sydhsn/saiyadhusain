import SkillRating from "@/components/SkillRating";
import Image from "next/image";
import skillsImage from "@/assets/images/skills.png";

const Skills = () => {
  const skills = [
    { name: "Next.js", rating: 90 },
    { name: "TailwindCSS", rating: 95 },
    { name: "TypeScript", rating: 85 },
    { name: "React", rating: 90 },
    { name: "Node.js", rating: 80 },
  ];

  return (
    <section className="py-16" id="skills">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 p-6 order-1 md:order-1">
          <div className="container mx-auto px-4 list-disc list-inside">
            <p className="text-lg mb-2">Skills</p>
            <h2 className="text-3xl font-bold mb-4">
              Skills based of rating and expertise
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <SkillRating
                  key={index}
                  name={skill.name}
                  rating={skill.rating}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right: Beautiful Image */}
        <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-end">
          <Image src={skillsImage} alt="Skills" width={350} height={350} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
