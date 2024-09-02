/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateCard: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(20deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
      animation: {
        rotateCard: 'rotateCard 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
