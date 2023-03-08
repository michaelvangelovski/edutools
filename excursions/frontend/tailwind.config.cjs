/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'h-md': {'raw': '(min-height: 790px)'},
      },
    },
  },
  plugins: [],
}
