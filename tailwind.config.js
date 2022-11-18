/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dropdown-image': "url('img/image5.png')",
      },

      fontFamily:{
        100: ['Manrope', 'sans-serif'],
        200: ['Inter', 'sans-serif']

      },

      colors:{
        primary:{
          '100' : '#FAF2F2',
          '200' : '#EEE1E1',
          '300' : '#2B2828'
        }

      },

      borderRadius: {
        none: '0px',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
        '4xl': '80px',
        '5xl': '90px',
        '6xl': '100px',
        '7xl': '120px',
        '8xl': '150px',
  
      },
  
      spacing: {
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        '5.5':'1.4rem',
        '15':'3.9rem',
        '128': '32rem',
        '144': '36rem',
        '150': '38rem',
        '152':  '40rem',
      }, 
    },
  },
  plugins: [],
}
