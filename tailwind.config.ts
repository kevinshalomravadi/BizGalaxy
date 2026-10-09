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
        background: "#06050b",
        foreground: "#f8fafc",
        galaxy: {
          950: "#06050b",
          900: "#0b0914",
          850: "#0f0d1b",
          800: "#141026",
          700: "#1e183a",
          600: "#2d2354",
          500: "#483785",
        },
        violet: {
          glow: "#8b5cf6",
          electric: "#7c3aed",
          deep: "#4c1d95",
        },
        champagne: {
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
        },
      },
      backgroundImage: {
        "galaxy-gradient": "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(120, 80, 240, 0.25), rgba(255, 255, 255, 0))",
        "nebula-glow": "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), rgba(76, 29, 149, 0.05), transparent 70%)",
        "gold-glow": "radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.12), transparent 60%)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "orbit": "spin 25s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
