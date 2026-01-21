/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // Make Poppins the default sans font globally
          sans: ["Poppins", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  