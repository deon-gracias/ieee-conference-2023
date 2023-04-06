/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#001F6D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
