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
      animation: {
        'gradient-xy': 'gradient-xy 7s ease infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          }
        }
      }
    },
  },
  plugins: [],
}
