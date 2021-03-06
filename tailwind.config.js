module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'spacemono': 'Space Mono'
     },
     screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "650px",
      // => @media (min-width: 650px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
