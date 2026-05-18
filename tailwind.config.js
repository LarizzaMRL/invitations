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
        script: ['"Pinyon Script"', 'cursive'],
      },
      colors: {
        ivory:  '#F7F4EF', // off-white casi blanco
        cream:  '#EFE8DA', // crema cálido
        sand:   '#DDD0BE', // beige arena
        taupe:  '#B8A48B', // taupe elegante
        accent: '#A89380', // café claro
        coffee: '#6D5847', // cafecito (café con leche) — usado para cerrar gradients suave
        mocha:  '#5C4A3E', // café oscuro elegante (para texto fuerte)
        ink:    '#2B2B2B',
      }
    },
  },
  plugins: [],
}
