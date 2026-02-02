/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          900: '#1a2e19',
          800: '#2d4a2b',
          700: '#3d5f3a',
          600: '#4d7449',
        },
        'sage': {
          500: '#7d8471',
          400: '#9a9f8d',
          300: '#b7baa9',
        },
        'olive': {
          500: '#a4ac86',
          400: '#b8be9f',
          300: '#ccd0b8',
        },
        'ivory': {
          100: '#faf9f6',
          200: '#f5f4f0',
          300: '#eeedea',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
