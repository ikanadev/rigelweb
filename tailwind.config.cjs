/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primarydark': '#086483',
        'primarylight': '#05A2C2',
        'primary': '#0894B3',
        'dark': '#151718',
      },
    },
  },
  plugins: [],
}
