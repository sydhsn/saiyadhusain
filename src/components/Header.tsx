"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { PROFILE } from "@/data/profile";

const NAV = [
  { href: "#about", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-md bg-[var(--glass-bg)]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="#about" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-bold text-white">
            SH
          </span>
          <span className="hidden font-bold sm:block">{PROFILE.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-content-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-full px-4 py-2 text-sm"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="text-content md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="border-t border-border bg-surface px-4 py-3 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 font-medium text-content-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
