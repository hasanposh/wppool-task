/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Yrsa: ["Yrsa", "serif"],
        MartelSans: ["Martel Sans", "serif"],
      },
      boxShadow: {
        bottom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
