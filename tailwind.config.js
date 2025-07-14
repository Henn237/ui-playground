/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'playground-bg': '#141414',
      },
      fontFamily: {
        'mnky': ['MNKYJane', 'sans-serif'],
        'rhymes': ['Rhymes Text', 'serif'],
      },
    },
  },
  plugins: [],
}