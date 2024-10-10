/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF9F0",
        primary: "#301207",
        accent: "#E16211",
        gray: "#D9D9D9",
        hoveredButton: "#6A300B",
      },
      screens: {
        xs: "400px",
        sm: "590px",
        md: "870px",
        mdl: "980px",
        lg: "1075px",
        xl: "1200px",
        xxl: "1370px",
      },
    },
  },
  plugins: [],
};
