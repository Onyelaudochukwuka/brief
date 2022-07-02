/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primaryCol: "hsl(180, 66%, 49%)",
      primaryDark: "hsl(257, 27%, 26%)",
      secondary: "hsl(0, 87%, 67%)",
      neutralGray: "hsl(0, 0%, 75%)",
      neutralGrayish: "hsl(257, 7%, 63%)",
      neutralDark: "hsl(255, 11%, 22%)",
      neutralViolet: "hsl(260, 8%, 14%)",
      white: "#fff"
    },
    fontWeight: {
      bold: 700,
      light: 500
    },
  },
  plugins: [],
}
