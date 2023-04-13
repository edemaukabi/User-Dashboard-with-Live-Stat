/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryIndigo: "rgba(58,107,187,1)",
        primaryIndigoLight: "rgba(58,107,187,0.5)",
        primaryIndigoDark: "rgba(58,107,187,0.8)",
        catskillWhite: "rgba(243,245,249,1)",
        gullGray: "rgba(147,164,182,1)",
        gullGrayLight: "rgba(100,100,202,0.2)",
        gullGrayLighter: "rgba(147,164,182,0.4)",
        gullGrayDark: "rgba(147,164,182,0.8)",
        mulberry: "rgba(203,87,141,1)",
        mulberryLight: "rgba(203,87,141,0.5)",
        shakespeare: "rgba(84,198,207,1)",
        diSerria: "rgba(226,143,103,1)",
        heather: "rgba(193,205,216,1)",
        shocking: "rgba(227,150,186,1)",
        cashmere: "rgba(228,188,169,1)",
      },
    },
  },
  plugins: [],
}

