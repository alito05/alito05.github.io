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
    },
  },
  plugins: [],
}