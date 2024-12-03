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
        primary: "#4F46E5", // Custom purple-blue color
        secondary: "#EC4899", // Accent color for hover and buttons
        background: "#f3f4f6", // Light background for a clean look
        foreground: "#111827", // Dark text for contrast
      },
    },
  },
  plugins: [],
};

export default config;



