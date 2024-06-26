/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "1800px": { max: "1500px" },
      "1280px": { max: "1280px" },
      "1100px": { max: "1100px" },
      "996px": { max: "996px" },
      "600px": { max: "600px" },
      "500px": { max: "500px" },
    },
    extend: {},
  },
  plugins: [],
};
