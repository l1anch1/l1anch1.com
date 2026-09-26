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
        // Riso / risograph-inspired warm ink palette
        paper: {
          DEFAULT: "#ECE7D8", // warm ivory base
          soft: "#F1ECDE",
          deep: "#E4DECC",
        },
        ink: {
          DEFAULT: "#22241C", // near-black warm
          soft: "#3C3E34",
        },
        green: {
          DEFAULT: "#3E5234", // dominant moss/pine ink
          deep: "#2F3D27",
          2: "#566B45",
        },
        clay: "#A4502B", // sharp secondary ink
        faint: "#9A9784", // muted metadata
        rule: "#CFC9B6", // hairline rules
      },
      fontFamily: {
        // Distinctive type — deliberately avoids Inter/system defaults
        sans: ["var(--font-bricolage)", "var(--font-noto-sans-sc)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "var(--font-noto-serif-sc)", "Georgia", "serif"],
        mono: ["var(--font-spline-mono)", "var(--font-noto-sans-sc)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.16em",
      },
      animation: {
        rise: "rise 0.85s cubic-bezier(0.2,0.7,0.2,1) forwards",
        "swipe-x": "swipe-x 0.35s cubic-bezier(0.2,0.7,0.2,1) forwards",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "swipe-x": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
