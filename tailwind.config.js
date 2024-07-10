/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        jakartasans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    screens: {
      sm: "468px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
