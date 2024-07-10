module.exports = {
  content: [
    './public/**/*.{html,js,css}',
    './src/**/*.{html,js,jsx,ts,tsx,css}',
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '480px' },
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        '2xl': { max: '1536px' },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'x-clr': '#FFFFFFF',
        'y-clr': '#YYYYYYY',
        'z-clr': '#ZZZZZZZ',
      },
      fontFamily: {
        'custom-x': ['Roboto', 'sans-serif'],
        'custom-y': ['Merriweather', 'serif'],
        'custom-z': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
