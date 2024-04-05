/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Exo', sans-serif",
      },
      colors: {
        primary: "#d7c498",
        secondary: "#ff7f50",
        main: "#2E4038",
      },
    },
  },
  plugins: [],
};
