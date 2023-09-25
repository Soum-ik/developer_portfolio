/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-family": ["Raleway", "sans-serif"],
      },
      colors :{
        bgColor : "#090E16",
        mainColor: "#7B4AE2",
        whiteColor: "#FFFFFF"
      }
    },
  },
  plugins: [],
};
