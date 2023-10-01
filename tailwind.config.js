/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ralewaye: ["Raleway", "sans-serif"],
      },
      colors: {
        bgColor: "#090E16",
        mainColor: "#7B4AE2",
        whiteColor: "#FFFFFF",
      },
      screens: {
        moblie: "300px",
      },
      animation :{
        blob : "blob 7s infinite"
      }, 
      // keyframes : {
      //   blob : {
      //     "0%" {
      //       transform : "translate"
      //     }
      //   }
      // }
    },
  },
  plugins: [],
};
