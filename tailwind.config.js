/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./*.{html,js}"],
  content: ["./*.{html, js}"],
  theme: {
    fontFamily:{
      'custom':['Chakra Petch', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

