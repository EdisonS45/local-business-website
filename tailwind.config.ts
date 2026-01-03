import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/config/**/*.{ts,tsx}",
  ],
  
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      
      colors: {
        ink: "#0f172a", // deep slate (primary text)
        muted: "#64748b", // secondary text

        surface: "#ffffff",
        background: "#f8fafc",

        border: "#e5e7eb",

        // GREEN SYSTEM (Primary CTA)
        primary: {
          DEFAULT: "#16a34a", // green-600
          hover: "#15803d", // green-700
          soft: "#dcfce7", // green-100
        },
      },
      
keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Move exactly half the width
        },
      },
      animation: {
        'logo-marquee': 'marquee 30s linear infinite', // Adjust '30s' to make it faster or slower
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },

      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },

      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04)",
        hover: "0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
