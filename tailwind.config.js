/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        dominoRed: '#b12418',
        dominoGray: '#333333',
        dominoWhite: '#ffffff',
        dominoLightGray: '#F5F5F5',
        dominoGreen: '#67ad5b',
        dominoOrange: '#f19e38',
        dominoBlue: '#2151c5',
      },
      boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      container: {
        center: true,
        padding: '2rem',
      },
      backgroundImage: {
        'top-divider': "url('/top-divider.svg')",
        'bottom-divider': "url('/bottom-divider.svg')",
      },
    },
  },
  plugins: [],
}
