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
        'dark-back':'#141D2F',
        'white-content': '#FEFEFE',
        'dark-content' : '#1E2A47',
        'h1-blue':'#2B3442',
        'white-repos':'#F6F8FF',
        'blue-info':'#4B6A9B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
