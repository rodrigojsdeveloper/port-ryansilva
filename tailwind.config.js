/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'green': '0 1px 1px #3fb950',
        'puple': '0 1px 1px #7c72ff',
        'blue': '0 1px 1px #33b3ae',
        'pink': '0 1px 1px #f778ba',
      },
      boxShadow: {
        titleCommentary: '4px 2px 0px 0px #bfbfbf',
        commentary: '4px 2px 0px 0px #bfbfbf',
        borderTRCommentary: '8px 6px 0px -2px #bfbfbf',
        borderDRCommentary: '8px 6px 0px -2px #bfbfbf',
        borderDLCommentary: '6px 8px 0px -2px #bfbfbf',
        iconCommentary: '2px -1px 0px 6px #bfbfbf',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'fade-gradient':
          'linear-gradient(90deg, #fff, transparent 20%, transparent 80%, #fff',
      },
      colors: {
        "gray-primary": "#848d97",
        "green-primary": "#3fb950",
        "white-primary": "#f6f8fa",
        "puple-primary": "#7c72ff",
        "blue-primary": "#33b3ae",
        "pink-primary": "#f778ba",
      },
      borderRadius: {
        radius: '0.5rem',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-5%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1'  },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(30%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-30%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(30%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutToLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-5%)', opacity: '0' },
        },
        slideOutToRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(30%)', opacity: '0' },
        },
        grow: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        shrink: {
          '0%': { height: '100%' },
          '100%': { height: '0%' },
        },
      },
      animation: {
        slideInLeft: 'slideInFromLeft 0.3s ease-out forwards',
        slideOutLeft: 'slideOutToLeft 0.3s ease-out forwards',
        slideInRight: 'slideInFromRight 0.3s ease-out forwards',
        slideOutRight: 'slideOutToRight 0.3s ease-out forwards',
        slideInTop: 'slideInFromTop 0.3s ease-out forwards',
        slideInBottom: 'slideInFromBottom 0.3s ease-out forwards',
        grow: 'grow 0.3s ease-out forwards',
        shrink: 'shrink 0.3s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
