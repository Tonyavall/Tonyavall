/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vs-teal': '#97E1F1',
        'vs-pink': '#F286C4',
        'vs-green': '#62E870',
        'vs-purple': '#BF9EEE',
        'vs-bg': '#282A36',
        'vs-dblue': '#1F2937'
      }
    },
  },
  plugins: [],
}
