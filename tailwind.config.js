/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playwrite: ["Playwrite AU SA", "cursive"],
        Lilita_One: ["Lilita One", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Spicy_Rice: ["Spicy Rice", "serif"],
      },
      colors: {
        dark_brown: "#5C4033",
        cream: "#FFFDD0",
      },
    },
  },
  plugins: [],
};
