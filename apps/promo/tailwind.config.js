/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: "rgb(from #D24A43 r g b / <alpha-value>)",
        dark: {
          100: "#F3F2EE",
          300: "#D9D9D9",
          500: "#C3C3C3",
          600: "#868686",
          700: "#6C6C6C",
          900: "#2E2223",
        },
      },
      container: {
        center: "true",
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
