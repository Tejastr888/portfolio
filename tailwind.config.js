/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA',
          dark: '#2563EB',
        },
        secondary: {
          light: '#F59E0B',
          dark: '#D97706',
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        surface: {
          light: '#F3F4F6',
          dark: '#1F2937',
        },
        text: {
          light: '#1F2937',
          dark: '#F9FAFB',
        }
      },
    },
  },
  plugins: [],
};
