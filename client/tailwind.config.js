module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      color: {
        primary: '#ff4444'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}