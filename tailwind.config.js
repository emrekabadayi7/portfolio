/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'Source': ['Source Sans Pro', 'sans-serif'],
        'Antiqua': ['Book Antiqua', 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif']
    },
    },
  },
  plugins: [],
}