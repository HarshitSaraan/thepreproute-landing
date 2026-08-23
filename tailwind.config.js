/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          canvas: '#F5F9FD',   // Ultra-light Ice Sky Background
          light: '#90CAF9',    // Soft Cerulean Highlight
          primary: '#2196F3',  // Vibrant Electric Sky Blue
          dark: '#0D47A1',     // Deep Royal Navy Text & Contrast
          border: '#D0E2F5',   // Subtle Card Border Tint
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        brand: {
          indigo: '#2196F3',
          indigoHover: '#0D47A1',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
          sky: '#2196F3',
          navy: '#0D47A1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(13, 71, 161, 0.05), 0 1px 2px -1px rgba(13, 71, 161, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(13, 71, 161, 0.08), 0 8px 10px -6px rgba(13, 71, 161, 0.04)',
        'glow': '0 0 20px -5px rgba(33, 150, 243, 0.25)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
