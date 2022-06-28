/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f1faee',
        },
        red: {
          100: '#e63946',
        },
        blue: {
          100: '#a8dadc',
          200: '#1d3557',
        }
      },
    },
  },
  plugins: [],
}
