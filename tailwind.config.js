/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,jsx}", "./src/**/*.{js,jsx}", "./src/**/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "synthwave",
      "halloween",
      "forest",
      "aqua",
      "black",
      "luxury",
      "dracula",
      "business",
      "night",
      "coffee",
    ],
  },
};
