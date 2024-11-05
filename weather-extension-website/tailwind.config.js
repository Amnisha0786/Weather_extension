import img from "./src/Images/FooterCurve.svg";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gd": "linear-gradient(180deg, #E0A12E 0%, rgba(224, 161, 46, 0.00) 100%)",
      },
      colors: {
        primary: "#0075FF",
        secondary: "#4da0ea",
        yell: "#E0A12E",
      },
      screens: {
        sm: "640px",
        md: "744px",
        lg: "1024px",
        xl: "1140px",
      },
      boxShadow:{
        "db":"-20px -19px 0px 0px gray"
      }
    },
  },
  plugins: [],
};
