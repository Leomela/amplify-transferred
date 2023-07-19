/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,tsx}',
    './pages/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/background-image.svg')",
      },
      colors: {
        'apnea-dive': '#2747BD',
        'black-space': '#535353',
        'cotton-ball-gray': '#F2F7FF',
        'deep-forest-brown': '#373439',
        doctor: '#F9F9F9',
        'gluon-grey': '#1c1b1f',
        ishtar: '#49454F',
        'light-purity': '#E7EDFB',
        'night-snow': '#AAC7FF',
        'pale-grey': '#8D8D8D',
        pinball: '#d3d3d3',
        plaster: '#eaeaea',
        'punch-out-glove': '#708EFF',
        'shade-of-grey': '#505050',
        'vital-green': '#109253',
        'wash-me': '#FAFAFF',
        'boysenberry-shadow': '#f1f1fc',
        'kingly-cloud': '#dedede',
        'white-smoke': '#F5F5F5',
        'soft-savvy': '#827F8A',
        jet: '#343434',
        snowflake: '#F0F0F0',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
