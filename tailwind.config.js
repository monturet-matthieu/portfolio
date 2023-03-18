/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: true,
    theme: {
    screens: {
      'phone': '410px',
      'tablet': '768px',
      'smdesktop': '1280px',
      'desktop': '1536px',
    },
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
      },
    },
  },
  plugins: [],
}
