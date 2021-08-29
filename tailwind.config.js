module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'spacemono': 'Space Mono'
     },
    extend: {
      colors: {
        'btn-blue': '#0079FF',
        'btn-blue-hover': '#60ABFF',
        'header-blue' : '#4B6A9B',
        'white-back' : '#F6F8FF',
        'white-content': '#FEFEFE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
