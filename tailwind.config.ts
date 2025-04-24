/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Add a modern sans-serif font
        },
      },
    },
    plugins: [],
};

export default config;