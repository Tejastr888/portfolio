/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'wider': '.08em',
        'widest': '.12em',
      },
      colors: {
        primary: {
          light: '#000000',
          dark: '#FFFFFF',
        },
        secondary: {
          light: '#404040',
          dark: '#D4D4D4',
        },
        background: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        surface: {
          light: '#F5F5F5',
          dark: '#171717',
        },
        text: {
          light: '#171717',
          dark: '#F5F5F5',
        }
      },
    },
  },
  plugins: [],
};
