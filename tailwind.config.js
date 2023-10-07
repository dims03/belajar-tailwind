/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {},
    darkMode: 'class',
    animation : {
      'spin-slow': 'spin 3s linear infinite',
    },
  },
  plugins: [],
}

