/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "rgb(0, 102, 102)",
        lightBlue: "rgb(46, 139, 87)",
        veryLightBlue: "rgb(152, 251, 152)",
        greyBorder: "#cacaca",
        fbBlue: "#1877f2",
        transparentBlack: "rgba(0, 0, 0, 0.5)",
        darkRed: "#e12323",
        modernYellow: "#f2aa02",
      },
      fontFamily: {
        rexFontBold: ["ALK Rex Bold", "sans-serif"],
        rexFontLight: ["ALK Sanet", "sans-serif"],
      },
    },
  },
  plugins: [],
};
