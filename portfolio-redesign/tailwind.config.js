/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: "#A3E635",
          light: "#D9F99D",
          dark: "#65A30D",
        },
        accent: {
          DEFAULT: "#A3E635",
          light: "#D9F99D",
          dark: "#65A30D",
        },
        bg: {
          light: "#F5F5F0",
          dark: "#0A0A0A",
          cardLight: "#FFFFFF",
          cardDark: "#111111",
        },
        text: {
          light: "#0A0A0A",
          dark: "#F0F0ED",
          mutedLight: "#6B6B6B",
          mutedDark: "#8A8A8A",
        },
        'soft-black': '#0A0A0A',
        'steel-gray': '#6B6B6B',
      },
    },
  },
  plugins: [],
}
