/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe8ff',
          200: '#bcd2ff',
          300: '#90b2ff',
          400: '#5c88ff',
          500: '#2b6cff',
          600: '#0a56ff',
          700: '#0045e0',
          800: '#083bb5',
          900: '#0d358e',
        },
        surface: {
          900: '#0b1020',
          800: '#131b33',
          700: '#1c2848',
        },
      },
      fontFamily: {
        sans: ['Mulish', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 10px 30px -12px rgb(43 108 255 / 45%)',
      },
    },
  },
  plugins: [],
}