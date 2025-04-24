/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        purple: {
          400: '#a855f7',
          500: '#9333ea',
        },
      },
    },
  },
  plugins: [],
} 