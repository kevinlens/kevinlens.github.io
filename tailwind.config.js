/** @type {import('tailwindcss').Config} */
module.exports = {
  //look for any html files and compile that into a static style sheet 
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        '1xl': { max: '1400px' },
        // => @media (max-width: 1535px) { ... }
        '-1xl': { min: '1400px' },
        // => @media (min-width: 1535px) { ... }
        '-lxl': { min: '1300px' },
        // => @media (min-width: 1535px) { ... }
        'lxl': { max: '1300px' },
        // => @media (min-width: 1535px) { ... }
        '1lg': { max: '1100px' },
        // => @media (min-width: 1535px) { ... }
        '-1lg': { min: '1100px' },
        // => @media (min-width: 1535px) { ... }
        '-lg': { max: '1000px' },
        // => @media (min-width: 1535px) { ... }
        '-xmd': { max: '900px' },
        // => @media (min-width: 1535px) { ... }
        'xmd': { min: '900px' },
        // => @media (min-width: 1535px) { ... }
        '-sm': { max: '540px' },
        // => @media (min-width: 1535px) { ... }
      }
    },
  },
  plugins: [],
}
 