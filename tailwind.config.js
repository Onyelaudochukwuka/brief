/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primaryCol: "rgb(42, 207, 207)",
      primaryDark: "rgb(59, 48, 84)",
      secondary: "rgb(244, 98, 98)",
      neutralGray: "rgb(191, 191, 191)",
      neutralGrayish: "rgb(158, 154, 167)",
      neutralDark: "rgb(53, 50, 62)",
      neutralViolet: "rgb(35, 33, 39)",
      white: "#fff"
    },
    fontWeight: {
      bold: 700,
      light: 500
    },
  },
  plugins: [],
}
