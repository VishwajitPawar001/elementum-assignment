/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ffd6e4',
          green: '#e0f2e9',
          dark: '#1a1a1a',
          purple: '#8b5cf6',
          red: '#ff6b6b',
        }
      },
      fontFamily: {
        // The design uses a geometric sans-serif font. 'Outfit' or 'Syne' are great free Google Font matches.
        sans: ['Outfit', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}