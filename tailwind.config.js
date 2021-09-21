module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'bgIndex': "url('src/assets/index background image.jpg')",
      },
      spacing: {
        '720': '720px'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      ringWidth: ['active'],
    },
  },
  plugins: [],
}
