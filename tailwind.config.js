module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
