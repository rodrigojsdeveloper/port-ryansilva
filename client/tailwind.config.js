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
        'black-invisible-2': '#000000de',
      },
      keyframes: {
        right: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        right: 'right 0.3s'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}