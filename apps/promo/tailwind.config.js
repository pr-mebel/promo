/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(from #D24A43 r g b / <alpha-value>)",
        dark: {
          900: "#2E2223",
          700: "#6C6C6C",
          600: "#868686",
          500: "#C3C3C3",
          300: "#D9D9D9",
          100: "#F3F2EE",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
