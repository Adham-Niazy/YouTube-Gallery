/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff',
        'gray-1-background': '#f3f3f4',
        'headline': '#0d0c22',
        'copy': '#6e6d7a',
        'accent': '#ea4c89',
        'pale-shadow-accent': '#FDEDF3',
        'accent-text': '#ffffff',
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      fira: ['Fira Code', 'sans-serif'],
    }
  },
  plugins: [],
}
