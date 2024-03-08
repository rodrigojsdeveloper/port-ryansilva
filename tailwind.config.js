/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'fade-gradient':
          'linear-gradient(90deg, #fff, transparent 20%, transparent 80%, #fff',
      },
      colors: {
        "gray-primary": "#AAAAAA"
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
