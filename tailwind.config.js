module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary': 'Poppins'
      },
      colors: {
        cardinal: '#C2002F',
        scarlet: '#E00000',
        mercury: '#E8E8E8',
        shark: '#231F20',
        crimson: '#D80135',
        olsoGray: '#8A9096'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('../images/main/artboard.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
