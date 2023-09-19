/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'tilt neon': ['Tilt Neon', 'cursive'],
      'handjet':['Handjet', 'cursive'],
    extend: {},
  },
  plugins: [],
}
}
