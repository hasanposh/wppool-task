/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./**/*.html"],
    theme: {
      extend: {
        fontFamily: {
          Yrsa: ["Yrsa", "serif"],
          MartelSans: ["Martel Sans", "serif"],
        },
      },
    },
    plugins: [],
  };
  