const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    'node_modules/@team-hogc/design-internal-components-vue/src/**/*.vue',
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    'store/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        tile: '0px 1px 10px rgba(0, 0, 0, 0.1)',
        card: '0px 4px 16px rgba(0, 0, 0, 0.25)',
        photoqr: '0px 20px 15px rgba(39, 41 , 246, 0.25)',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
