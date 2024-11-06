/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkRed: "#C00000",
        black: "#1C1C1E",
        darkGrey: "#3A3A3A",
        grey: "#ABABAB",
        white: "#FFFFFF",
        totalBlack: "#000000",
        footerGray: "#4F4F4F",
        bgColor: "#E9E9E9",
      },
      screens: {
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1410px",
      },
      backgroundImage: {
        "main-image": "url('/ModulMaster/mainImg.png')",
      },
    },
  },
  plugins: [],
};

