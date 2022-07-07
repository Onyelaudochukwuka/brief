/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      darkPrimary: "#181E20",
      dark: "#02314D",
      neutral: "#045C94",
      lightNeutral: "#FFBB1C",
      light: "#F2F4F5"
    },
    fontWeight: {
      bold: 700,
      light: 500
    },
  },
  plugins: [],
}
