// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom fonts here if you want to use 'Inter' or others
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Example: Define 'Inter' font
        'michroma': ['Michroma', 'sans-serif'], // Michroma font
      }
    },
  },
  plugins: [],
}