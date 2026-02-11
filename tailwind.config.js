/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paper': {
          100: '#F2F0EB',
          200: '#E8E6E1',
          300: '#DEDCD7',
        },
        'ink': {
          900: '#1C1C1B',
          800: '#2A2A29',
          700: '#555555',
        },
        'forest': {
          900: '#1a2e19',
          800: '#2d4a2b',
          700: '#3d5f3a',
          600: '#4d7449',
        },
        'clay': {
          500: '#C9A690',
          400: '#D4B8A5',
          300: '#DFCABA',
        },
        'stone': {
          500: '#A8B8B2',
          400: '#BCC9C4',
          300: '#D0DCD9',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Source Sans 3', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
