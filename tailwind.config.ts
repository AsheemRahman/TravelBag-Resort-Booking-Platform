import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: "#123B2E",
          light: "#1B5943",
          dark: "#0B2620",
        },
        emerald: {
          DEFAULT: "#1F7A5C",
          light: "#2F9974",
          dark: "#155C45",
        },
        mist: {
          DEFAULT: "#EAF0EC",
          dark: "#DCE6DF",
        },
        sky: {
          DEFAULT: "#4F9DC4",
          light: "#7FBBDA",
        },
        clay: {
          DEFAULT: "#E2793D",
          light: "#EC9560",
          dark: "#C4622C",
        },
        ink: "#16241F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(18, 59, 46, 0.18)",
        card: "0 12px 40px -12px rgba(18, 59, 46, 0.22)",
        lift: "0 24px 60px -16px rgba(18, 59, 46, 0.28)",
      },
      backgroundImage: {
        "contour-mist":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120' preserveAspectRatio='none'%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
