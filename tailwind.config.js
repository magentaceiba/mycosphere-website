/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5016',
        'earth-brown': '#8B4513',
        'soft-cream': '#F5F5DC',
        // 'soft-cream': '#F7F5F0',
        'lime-green': '#32CD32',
        'sage': '#9CAF88',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
