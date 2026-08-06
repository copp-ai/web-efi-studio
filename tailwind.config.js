/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        efi: {
          dark: '#0A1113',
          surface: '#111D20',
          card: '#162529',
          'card-hover': '#1C2E33',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-pine': 'rgba(43, 65, 56, 0.45)',
          pine: '#2B4138',
          'pine-light': '#A8C4B8',
          'pine-hover': '#35503F',
          emerald: '#1B4D3E',
          'emerald-light': '#2FA383',
          sand: '#F7F5F0',
          muted: '#94A3B8',
          subtle: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pine-glow': 'radial-gradient(circle, rgba(43, 65, 56, 0.20) 0%, rgba(10, 17, 19, 0) 70%)',
        'emerald-glow': 'radial-gradient(circle, rgba(31, 77, 62, 0.25) 0%, rgba(10, 17, 19, 0) 70%)',
      },
      boxShadow: {
        'glow-pine': '0 0 25px -5px rgba(43, 65, 56, 0.5)',
        'glow-emerald': '0 0 25px -5px rgba(47, 163, 131, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
