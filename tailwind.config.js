/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#070724",
        "dark-gray": "#38384f",
        "main-gray": "#838391",
        "light-gray": "#c1c1c8",
        mercury: "#419ebb",
        venus: "#eda249",
        earth: "#6f2ed6",
        mars: "#d14c32",
        jupiter: "#d83a34",
        saturn: "#cd5120",
        uranus: "#1ec2a4",
        neptune: "#2d68f0",
      },
      fontFamily: {
        antonio: ["var(--font-antonio)", "sans-serif"],
        spartan: ["var(--font-spartan)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
