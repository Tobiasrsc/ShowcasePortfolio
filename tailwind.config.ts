import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // These map to CSS variables defined in globals.css, which flip
        // automatically when the `.dark` class is present on <html>.
        bg: "var(--bg)",
        bgAlt: "var(--bg-alt)",
        cardBg: "var(--card-bg)",
        ink: "var(--ink)",
        secondary: "var(--secondary)",
        border: "var(--border)",
        chipBg: "var(--chip-bg)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sf: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
