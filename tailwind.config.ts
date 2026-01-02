import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a", // slate-900
        pencil: "#475569", // slate-600
        safety: {
          DEFAULT: "#ea580c", // orange-600
          hover: "#c2410c",   // orange-700
        },
        trust: "#1d4ed8", // blue-700
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
