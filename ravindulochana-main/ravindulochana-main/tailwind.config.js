/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#050816',
          900: '#0a0f24',
          800: '#0d1530',
          700: '#1a2040',
          600: '#1e2b50',
        },
        cyan: {
          DEFAULT: '#00E5FF',
          400: '#67e8f9',
          500: '#00E5FF',
          600: '#00b8cc',
          700: '#0091a3',
        },
        purple: {
          DEFAULT: '#7C3AED',
          400: '#a78bfa',
          500: '#7C3AED',
          600: '#6d28d9',
          700: '#5b21b6',
        },
        // backward compat
        cyber: {
          950: '#050816',
          900: '#0a0f24',
          800: '#0d1530',
          700: '#1a2040',
          600: '#1e2b50',
        },
        neon: {
          400: '#67e8f9',
          500: '#00E5FF',
          600: '#00b8cc',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-up-1': 'fadeUp 0.7s 0.1s ease-out forwards',
        'fade-up-2': 'fadeUp 0.7s 0.2s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s ease-in-out infinite',
        'spotlight-1': 'spotlight1 20s ease-in-out infinite',
        'spotlight-2': 'spotlight2 25s ease-in-out infinite',
        'spotlight-3': 'spotlight3 28s ease-in-out infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
        // backward compat
        'fade-in-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in-up-delay-1': 'fadeUp 0.8s 0.2s ease-out forwards',
        'fade-in-up-delay-2': 'fadeUp 0.8s 0.4s ease-out forwards',
        'pulse-glow': 'pulseRing 2s ease-in-out infinite',
        'float-slow-alias': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,229,255,0)' },
          '50%': { boxShadow: '0 0 0 12px rgba(0,229,255,0)' },
        },
        spotlight1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate(10%,-8%) scale(1.15)', opacity: '0.75' },
          '66%': { transform: 'translate(-6%,12%) scale(0.9)', opacity: '0.5' },
        },
        spotlight2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)', opacity: '0.5' },
          '40%': { transform: 'translate(-12%,8%) scale(1.2)', opacity: '0.65' },
          '70%': { transform: 'translate(8%,-10%) scale(0.95)', opacity: '0.45' },
        },
        spotlight3: {
          '0%,100%': { transform: 'translate(0,0) scale(1)', opacity: '0.45' },
          '50%': { transform: 'translate(6%,14%) scale(1.1)', opacity: '0.6' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
