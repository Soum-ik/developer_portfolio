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

    },
  },
  plugins: [],
};

// animation: spin 1s linear infinite;

// @keyframes spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }