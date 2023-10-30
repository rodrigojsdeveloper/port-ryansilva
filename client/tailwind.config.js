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
        'primary-1': '#ff4444',
        'gray-1': '#4d4d4d',
        'black-1': '#0a0a0a',
        'black-invisible': '#00000029',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}