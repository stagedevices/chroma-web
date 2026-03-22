/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chroma: {
          bg: '#000000',
          glass: 'rgba(255, 255, 255, 0.1)',
          glassBorder: 'rgba(255, 255, 255, 0.2)',
          accent: '#6366f1', // Indigo
          accentHover: '#4f46e5',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}