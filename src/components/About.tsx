"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload, FaArrowRight } from "react-icons/fa";
import aboutImage from "@/assets/images/img.png";
import { PROFILE } from "@/data/profile";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-10 pb-14 md:pt-16 md:pb-20"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="blob absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/30" />
        <div
          className="blob absolute top-32 -right-20 h-72 w-72 rounded-full bg-primary/20"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              👋 Hello, I&apos;m {PROFILE.firstName}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              {PROFILE.name}
              <span className="mt-2 block text-gradient">{PROFILE.role}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 max-w-xl text-content-muted"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-primary px-6 py-3 rounded-full">
                Let&apos;s Connect <FaArrowRight size={14} />
              </a>
              <a href="#resume" className="btn-ghost px-6 py-3 rounded-full">
                <FaDownload size={14} /> Résumé
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="btn-ghost h-12 w-12 rounded-full p-0"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="btn-ghost h-12 w-12 rounded-full p-0"
              >
                <FaGithub size={18} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {PROFILE.stats.map((s) => (
                <div key={s.label} className="glass-card px-3 py-3 text-center">
                  <dt className="text-xl font-bold text-gradient">{s.value}</dt>
                  <dd className="mt-0.5 text-xs text-content-muted">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: circular portrait with gradient ring + glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-sm"
          >
            {/* soft glow */}
            <div className="absolute -inset-6 rounded-full bg-primary/25 blur-3xl" />
            {/* gradient ring */}
            <div className="relative h-full w-full rounded-full bg-primary p-1.5 shadow-card">
              <div className="h-full w-full overflow-hidden rounded-full bg-[#2a2f86]">
                <Image
                  src={aboutImage}
                  alt={PROFILE.name}
                  className="h-full w-full scale-[1.14] object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
