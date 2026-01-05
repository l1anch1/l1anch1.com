import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant neon palette for the liquid glass aesthetic
        neon: {
          purple: "#a855f7",
          violet: "#8b5cf6",
          fuchsia: "#d946ef",
          pink: "#ec4899",
          rose: "#f43f5e",
          cyan: "#22d3ee",
          teal: "#2dd4bf",
          emerald: "#34d399",
          blue: "#3b82f6",
          indigo: "#6366f1",
        },
        // Deep dark backgrounds
        dark: {
          900: "#030014",
          800: "#070318",
          700: "#0d0628",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "blob-1": "blob-1 25s ease-in-out infinite",
        "blob-2": "blob-2 30s ease-in-out infinite",
        "blob-3": "blob-3 35s ease-in-out infinite",
        "blob-4": "blob-4 28s ease-in-out infinite",
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "blob-1": {
          "0%, 100%": {
            transform: "translate(0%, 0%) rotate(0deg) scale(1)",
          },
          "25%": {
            transform: "translate(20%, 15%) rotate(90deg) scale(1.1)",
          },
          "50%": {
            transform: "translate(-10%, 30%) rotate(180deg) scale(0.95)",
          },
          "75%": {
            transform: "translate(-20%, 10%) rotate(270deg) scale(1.05)",
          },
        },
        "blob-2": {
          "0%, 100%": {
            transform: "translate(0%, 0%) rotate(0deg) scale(1)",
          },
          "25%": {
            transform: "translate(-15%, 25%) rotate(-90deg) scale(1.15)",
          },
          "50%": {
            transform: "translate(25%, -10%) rotate(-180deg) scale(0.9)",
          },
          "75%": {
            transform: "translate(10%, 20%) rotate(-270deg) scale(1.1)",
          },
        },
        "blob-3": {
          "0%, 100%": {
            transform: "translate(0%, 0%) rotate(0deg) scale(1)",
          },
          "33%": {
            transform: "translate(30%, -20%) rotate(120deg) scale(1.2)",
          },
          "66%": {
            transform: "translate(-25%, 15%) rotate(240deg) scale(0.85)",
          },
        },
        "blob-4": {
          "0%, 100%": {
            transform: "translate(0%, 0%) rotate(0deg) scale(1)",
          },
          "20%": {
            transform: "translate(-30%, -15%) rotate(72deg) scale(1.1)",
          },
          "40%": {
            transform: "translate(15%, 25%) rotate(144deg) scale(0.95)",
          },
          "60%": {
            transform: "translate(25%, -25%) rotate(216deg) scale(1.15)",
          },
          "80%": {
            transform: "translate(-15%, 10%) rotate(288deg) scale(0.9)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
