/** @type {import('tailwindcss').Config} */
export default {
  content: [
      '**/*.html',
      'src/**/*.{css,js}',
  ],
  theme: {
    extend: {
        fontFamily: {
            'sans': 'Gotham'
        }
    },
      colors: {
          'blue':'#252F60',
          'grey': '#3F4668',
          'white': '#E9EAEC',
          'red': '#CC264E'
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(37, 47, 96, 0.7), rgba(37, 47, 96, 0.7)), url('/hero.jpg')"
      }
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
  ],
}

