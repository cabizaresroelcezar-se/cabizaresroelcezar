/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        // Dark theme colors based on existing design
        dark: {
          bg: '#000000',
          surface: '#1b1b1b',
          border: '#252525',
          text: '#f8f8f8',
          textMuted: '#999999',
          textSecondary: '#c7c7c7',
          accent: '#ffffff',
        },
        // Service card accent colors
        service: {
          web: 'rgba(227, 31, 113, 0.2)',
          design: '#ff6119',
          marketing: '#667eea',
        },
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'text-shadow': {
          '0%': { textShadow: 'none' },
          '100%': { textShadow: '-0.25px -0.25px 0 #fff, 0.25px 0.25px #fff' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
        'text-shadow': 'text-shadow 0.4s ease-in-out',
      },
      fontSize: {
        'hero': '5.5rem',
        'section': '2.3rem',
        'label': '1.2rem',
      },
      spacing: {
        '7.2%': '7.2%',
        '8.5%': '8.5%',
      },
    },
  },
  plugins: [],
  darkMode: 'media', // Dark design as default, no light mode toggle needed
};
