const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', 
          './components/**/*.{js,ts,jsx,tsx}',
          './layout/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screen:{
        'sm': '0px',
        'md': '480px',
        'lg': '600px',
        'xl': '1000px',
        '2xl': '1280px'
      },
    },
  },
  variants: {
    extend: {
      fontFamily:{
        'sans': ['Share Tech Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
