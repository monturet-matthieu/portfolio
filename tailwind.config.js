/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      "colors": {
        "noir": '#181616',
        "blanc": '#FFFFFF',
        "blanc-gris": '#FAFAFA',
        "bleu": '#160044'
      },
      "fontFamily": {
        'karla': 'Karla, sans-serif',
        'cabin': 'Cabin, sans-serif',
        'gothic': 'Dela Gothic One, sans-serif'
      }
    },
  },
  plugins: [],
}
