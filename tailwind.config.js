/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFC178',
      },
      fontSize: {
        large: '64px',
      },
      fontFamily:{
        open:["Open Sans"],
      },
      backgroundImage: {
        'banner-img': "url('../images/banner_img.jpg')",
        'steps-img': "url('../images/steps_img.jpg')",
      },
    },
  },
  plugins: [],
}

