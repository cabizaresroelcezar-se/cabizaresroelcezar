/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        /* ── Refractive Glassmorphism palette ── */
        charcoal:  '#121212',
        offwhite:  '#F5F5F7',
        orange:    '#FF7518',
        /* ── Legacy tokens (kept for backward‑compat) ── */
        dark: {
          bg:            '#000000',
          surface:       '#1b1b1b',
          border:        '#252525',
          text:          '#f8f8f8',
          textMuted:     '#999999',
          textSecondary: '#c7c7c7',
          accent:        '#ffffff',
        },
        service: {
          web:       'rgba(115,114,110,1)',
          design:    'rgba(92,91,88,1)',
          marketing: 'rgba(69,68,66,1)',
        },
        /* Glass surface tints */
        glass: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          light:   'rgba(255,255,255,0.08)',
          heavy:   'rgba(255,255,255,0.12)',
          border:  'rgba(255,255,255,0.10)',
          glow:    'rgba(255,117,24,0.25)',
        },
      },
      backdropBlur: {
        glass:   '18px',
        'glass-heavy': '32px',
      },
      boxShadow: {
        glass:        '0 8px 32px rgba(0,0,0,0.37)',
        'glass-glow': '0 0 80px rgba(255,117,24,0.15), inset 0 0 40px rgba(255,117,24,0.05)',
        'glass-edge': 'inset 0 0 0 1px rgba(255,255,255,0.08)',
        spatial:      '0 25px 50px -12px rgba(0,0,0,0.5)',
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
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.15)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0) rotateY(0)' },
          '50%':      { transform: 'translateY(-12px) rotateX(2deg) rotateY(-2deg)' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotateY(0deg) rotateX(15deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(15deg)' },
        },
        'chromatic': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%':      { filter: 'hue-rotate(15deg)' },
        },
      },
      animation: {
        bounce:       'bounce 2s infinite',
        'text-shadow':'text-shadow 0.4s ease-in-out',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'spin-slow':  'spin-slow 20s linear infinite',
        'chromatic':  'chromatic 8s ease-in-out infinite',
      },
      fontSize: {
        'hero':    '5.5rem',
        'section': '2.3rem',
        'label':   '1.2rem',
      },
      spacing: {
        '7.2%': '7.2%',
        '8.5%': '8.5%',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};
