module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand'],
        'dosis': ['Dosis'],
        'space-grotesk' : ['Space Grotesk']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'home': {
          400: "#FAF6E9",
          500: "#ECE8D9",
          700: "#575757",
          800: "#494949",
          900: "#313131"
        },
        'highlight': {
          100: "#06b6d4"
        }
      },
      fontSize: {
        'massive': '12rem'
      }
    },
  },


  plugins: [
    require('@tailwindcss/typography'),
  ],
}
