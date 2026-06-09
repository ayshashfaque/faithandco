/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1A2F",
        bone: "#F2F0EB",
        midnight: "#0A1A2F",
        "slate-blue": "#4A6274",
        "inst-slate": "#C5CAD0",
        sand: "#E5DED1",
        pearl: "#F4F4F4",
        obsidian: "#050505",
      },
      fontFamily: {
        headings: ["'Playfair Display'", "Cinzel", "serif"],
        sans: ["Inter", "Montserrat", "sans-serif"],
        oswald: ["'Oswald'", "sans-serif"],
      },
      letterSpacing: {
        "institutional": "0.3em",
        "heritage": "0.5em",
      },
    },
  },
  plugins: [],
}
