"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { FaGithub } from "react-icons/fa";
import { PROFILE } from "@/data/profile";

const FILTERS = ["All", "Next.js", "NestJS", "AWS"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? PROFILE.projects
      : PROFILE.projects.filter((p) => p.skills.includes(filter));

  return (
    <section id="projects" className="py-14">
      <div className="container mx-auto px-4">
        <Reveal className="mb-10 text-center">
          <span className="eyebrow">Projects</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Selected <span className="text-gradient">work</span>
          </h2>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                filter === f
                  ? "bg-primary text-white"
                  : "border border-border bg-surface text-content-muted hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 rounded-full"
          >
            <FaGithub size={16} /> View more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
