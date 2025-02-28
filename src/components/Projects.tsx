"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("");

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and TailwindCSS.",
      skills: ["Next.js", "TailwindCSS", "React.js", "TypeScript"],
    },
    {
      title: "AI Chatbot",
      description: "An AI-powered chatbot using TensorFlow.js and Next.js.",
      skills: ["TensorFlow.js", "Next.js", "React.js", "TypeScript"],
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      skills: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description:
        "A task management application with drag-and-drop functionality and real-time updates.",
      skills: ["React.js", "TypeScript", "Redux", "Firebase"],
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather forecasting app that provides real-time weather data using a third-party API.",
      skills: ["React.js", "TypeScript", "TailwindCSS", "OpenWeatherMap API"],
    },
    {
      title: "Social Media Dashboard",
      description:
        "A dashboard for managing social media accounts, scheduling posts, and analyzing engagement.",
      skills: ["React.js", "Redux", "TypeScript", "Chart.js"],
    },
    {
      title: "Blog Platform",
      description:
        "A blogging platform with markdown support, user authentication, and comment functionality.",
      skills: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Firebase"],
    },
    {
      title: "Expense Tracker",
      description:
        "An expense tracking app with visualization of spending patterns using charts.",
      skills: ["React.js", "Redux", "TypeScript", "Chart.js"],
    },
  ];

  const filteredProjects = filter
    ? projects.filter((project) => project.skills.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-2">
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/1 p-6">
            <p className="text-lg mb-2">Projects</p>
            <h2 className="text-3xl font-bold mb-4">
              Skills I&apos;ve Worked With
            </h2>
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setFilter("")}
                className="bg-[#3345A4] text-white p-2 rounded"
              >
                All
              </button>
              <button
                onClick={() => setFilter("Next.js")}
                className="bg-[#3345A4] text-white p-2 rounded"
              >
                Next.js
              </button>
              <button
                onClick={() => setFilter("TensorFlow.js")}
                className="bg-[#3345A4] text-white p-2 rounded"
              >
                TensorFlow.js
              </button>
            </div>
            {/* Updated Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <div className="w-full p-6">
              <p className="mb-6">Check out some of my recent projects:</p>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3345A4] text-white px-6 py-2 rounded-full hover:bg-[#ff0058] transition-colors duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
