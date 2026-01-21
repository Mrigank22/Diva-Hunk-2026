module.exports = {
  content: [
      
      '../templates/**/*.html',
      '../../base/templates/**/*.html', 
      '../../**/*.py',
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'newake': ['Newake', 'sans-serif'],
        'action': ['Action Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}