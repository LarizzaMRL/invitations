/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: '210px',   // celulares pequeños (SE / Android chicos)
      sm: '310px',   // 17 pro
      md: '410px',   // iphone 13 pro max
      lg: '768px',   // tablet / desktop
    },
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        ivory: '#F5F1EC',
        sand: '#E8DED3',
        ink: '#2B2B2B',
        accent: '#BFAE9F',
      }
    },
  },
  plugins: [],
}
