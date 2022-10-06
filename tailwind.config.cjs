/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#16161a',
        'headline': '#fffffe',
        'copy': '#94a1b2',
        'accent': '#7f5af0',
        'accent-text': '#fffffe',
      }
    },
  },
  plugins: [],
}
