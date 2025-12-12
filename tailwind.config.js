/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF",   // azul principal
          light: "#3B82F6",
          dark: "#1E3A8A",
        },
        accent: {
          DEFAULT: "#10B981",   // verde acento profesional
          light: "#34D399",
          dark: "#059669",
        },
        bg: {
          light: "#F9FAFB",
          dark: "#0F172A",       // azul-negruzco (modo oscuro)
          cardLight: "#FFFFFF",
          cardDark: "#1E293B",
        },
        text: {
          light: "#1E293B",
          dark: "#F8FAFC",
          mutedLight: "#64748B",
          mutedDark: "#CBD5E1",
        },
      }
    },
  },
  plugins: [],
}