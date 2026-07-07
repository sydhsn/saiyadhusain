"use client";
import { FaDownload } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { PROFILE } from "@/data/profile";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Md-Saiyad-Husain-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-14">
      <div className="container mx-auto px-4">
        <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-primary p-8 text-center text-white md:p-12">
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s build something that matters
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Open to Senior Frontend, Full-Stack, and Tech Lead roles. Grab my
            résumé for the full picture — {PROFILE.stats[0].value} years,{" "}
            {PROFILE.experience.length} enterprise employers, {PROFILE.location}.
          </p>
          <button
            onClick={handleDownload}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <FaDownload /> Download Résumé
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Resume;
