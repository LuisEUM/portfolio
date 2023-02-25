/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{png,png,svg}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BB31',
        secondary: '#007931',
        tertiary: '#00E931'
      },
      fontFamily: {
        primary_regular: ['Hiruko Regular'],
        primary_bold: ['Hiruko Bold'],
        primary_black: ['Hiruko Black'],
        primary_light: ['Hiruko Light']
      },
      backgroundImage: {
      }
    }
  },
  plugins: []
}
