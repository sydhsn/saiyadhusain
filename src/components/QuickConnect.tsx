"use client";

import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { PROFILE } from "@/data/profile";

const QuickConnect = () => {
  return (
    <div className="card p-6 sm:p-8">
      <h3 className="mb-2 text-xl font-bold text-content">Quick Connect</h3>
      <p className="mb-6 text-content-muted">
        Prefer a channel? Reach me directly — I usually reply within a day.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href={PROFILE.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#0077B5] px-6 py-3 text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
        <a
          href={PROFILE.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-6 py-3 text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>
        <a
          href={PROFILE.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          <FaWhatsapp className="text-xl" />
          <span>WhatsApp</span>
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          <FaEnvelope className="text-lg" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
};

export default QuickConnect;
