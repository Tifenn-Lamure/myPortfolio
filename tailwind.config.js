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
        'dark-blue-violet': '#383DB4',
        'very-light-violet': '#D7DCFF',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(6%)',
            transitionTimingFunction: 'ease-in-out',
            rotate: "-16deg"
          },
          '50%': { 
            transform: 'translateY(0px)',
            transitionTimingFunction: 'ease-in-out',
            rotate: "-16deg"
          },
        },
        cloud: {
          '0%, 100%': { 
            transform: 'translateX(-1%)',
          },
          '50%': { 
            transform: 'translateX(0)',
          },
        },
        cloudReverse: {
          '0%, 100%': { 
            transform: 'translateX(0)',
          },
          '50%': { 
            transform: 'translateX(-1%)',
          },
        }
      },
    },
  },
  plugins: [],
}