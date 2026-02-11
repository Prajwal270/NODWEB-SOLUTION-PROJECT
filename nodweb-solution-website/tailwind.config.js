/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        pacifico: ['"Pacifico"', "cursive"],
        gilda: ['"Gilda Display"', "serif"],
      },
    },
  },
  plugins: [],
};
