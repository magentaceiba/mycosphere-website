/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5016',
        'earth-brown': '#8B4513',
        'soft-cream': '#F5F5DC',
        'lime-green': '#32CD32',
        'sage': '#9CAF88',
        // Enhanced color palette
        'forest-green-light': '#4A7C2A',
        'forest-green-dark': '#1A3A0A',
        'earth-brown-light': '#A0522D',
        'sage-light': '#B8C9A8',
        'sage-dark': '#7A8F6A',
        'accent-orange': '#FF6B35',
        'accent-teal': '#2DD4BF',
        'accent-purple': '#A855F7',
        'warm-yellow': '#FBBF24',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'accent': ['Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem,8vw,7rem)', { lineHeight: '0.9' }],
        'display': ['clamp(2.5rem,6vw,5rem)', { lineHeight: '1.1' }],
        'lead': ['clamp(1.25rem,3vw,2rem)', { lineHeight: '1.4' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(45, 80, 22, 0.3)',
        'glow-lg': '0 0 40px rgba(45, 80, 22, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #2D5016 0%, #4A7C2A 25%, #9CAF88 50%, #32CD32 75%, #2DD4BF 100%)',
      },
    },
  },
  plugins: [],
}
