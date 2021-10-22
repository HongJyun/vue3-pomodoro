const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        FjallaOne: ['"Fjalla One"', 'sans-serif'],
        NotoSansTC: ['"Noto Sans TC"', 'sans-serif']
      },
      colors: {
        brand: {
          green: '#304030',
          'light-green': '#6C9460',
          orange: '#F08448',
          white: '#ffffff',
          gray: '#E8E8E8'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
