import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  skills: string[];
}
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-[#3345A4] text-white px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
