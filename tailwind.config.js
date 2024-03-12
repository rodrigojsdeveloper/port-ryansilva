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
        "gray-primary": "#858585",
        "gray-secundary": "#AAAAAA",
        "gray-third": "#cfcfcf",
        "white-primary": "#fafaff",
      },
      borderRadius: {
        radius: '0.5rem',
      },
      keyframes: {
        slide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' },
        },
      },
      animation: {
        slide: 'slide 40s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
