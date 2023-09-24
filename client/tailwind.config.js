module.exports = {
  // prefix: 'tw-',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#ff4444'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}