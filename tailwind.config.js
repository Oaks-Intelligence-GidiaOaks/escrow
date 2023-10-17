/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
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
