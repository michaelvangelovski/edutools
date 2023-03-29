/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'h-md': {'raw': '(min-height: 790px)'},
      },
      colors: {
        'tablr-blue': '#206bc4',
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-tablr-(blue|grey)/
  }]
}
