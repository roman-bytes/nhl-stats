/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
