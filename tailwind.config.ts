module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Semantic colors backed by "R G B" channel CSS variables
      // (see src/styles/globals.css). The <alpha-value> placeholder
      // lets opacity modifiers work, e.g. bg-primary/30, text-accent/60.
      colors: {
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
          2: "rgb(var(--color-surface-2) / <alpha-value>)",
        },
        border: "rgb(var(--color-border) / <alpha-value>)",
        content: {
          DEFAULT: "rgb(var(--color-content) / <alpha-value>)",
          muted: "rgb(var(--color-content-muted) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          hover: "rgb(var(--color-primary-hover) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          hover: "rgb(var(--color-accent-hover) / <alpha-value>)",
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 12px 40px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
