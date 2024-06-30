/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-violet': '#5E64F2',
        'light-violet': '#9595DD',
        'very-light-violet': '#D7DCFF',
      }
    },
  },
  plugins: [],
}