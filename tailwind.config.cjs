/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      from: '#051139',
      to: '#0b0f27',
      darkblue: '#051139',
      deepskyblue: '#4ad0ed',
      ghostwhite: '#d2d6e6',
      white: '#fff',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
};
