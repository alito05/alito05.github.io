/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'racing-one': ['"Racing Sans One"', 'cursive'],
      },
      backgroundColor:{
        'whitey': '#E5E5E5'
      }
    },
  },
  plugins: [],
}