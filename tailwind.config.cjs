/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        bowlby: ["Bowlby One SC", "cursive"],
      },
    },
  },
  plugins: [],
};
