/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8BC34A",
        "primary-dark": "#33691E",
        "steel-gray": "#455A64",
        "soft-black": "#1C1C1C",
      },
    },
  },
  plugins: [],
};
