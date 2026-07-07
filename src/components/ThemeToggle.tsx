"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Sync initial state from the class set by the no-flash script in layout.
  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
      return next;
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-5 left-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-border bg-[var(--glass-bg)] text-content shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:text-primary"
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={dark ? "sun" : "moon"}
            initial={{ rotate: -90, opacity: 0, scale: 0.4 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.2 }}
          >
            {dark ? (
              <FaSun size={18} className="text-yellow-400" />
            ) : (
              <FaMoon size={16} />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
};

export default ThemeToggle;
