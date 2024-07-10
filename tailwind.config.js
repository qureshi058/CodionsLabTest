/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/react-tailwindcss-select/dist/index.esm.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: "#635fc7",
        secondaryColorLight: "#FF8C21",
        footer: "#222222",
      },
      zIndex: {
        '100': '100',
        '150': '150',
        '200': '200',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
