/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          light: "#7480f1ff",
          dark: "#3730A3",
        },
        accent: {
          DEFAULT: "#22D3EE",
          dark: "#0891B2",
        },
        bg: {
          DEFAULT: "#0F172A",
          surface: "#1E293B",
          surfaceLight: "#334155",
        },
        text: {
          DEFAULT: "#F8FAFC",
          muted: "#CBD5E1",
        },
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
      }
    },
  },
  plugins: [],
}

