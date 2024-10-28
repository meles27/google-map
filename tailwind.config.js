const withMT = require("@material-tailwind/react/utils/withMT");
import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./tailwind.config.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.indigo, DEFAULT: colors.indigo[500] },
        secondary: { ...colors.yellow, DEFAULT: colors.yellow[500] },
        neutral: { ...colors.neutral, DEFAULT: colors.neutral[500] },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
      },
    },
  },
  plugins: [],
});
