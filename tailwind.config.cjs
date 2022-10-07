/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'headline': '#0d0c22',
        'copy': '#6e6d7a',
        'accent': '#ea4c89',
        'accent-text': '#ffffff',
      }
    },
  },
  plugins: [],
}
