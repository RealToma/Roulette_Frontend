/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cs: "linear-gradient(90deg, #FED527 0%, #FE5C1E 100%)",
      },
      colors: {
        lightgray: "#292D2E",
      },
      borderRadius: {
        base: "6px",
      },
    },
  },
  plugins: [],
};
