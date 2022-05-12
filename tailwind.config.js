module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 250ms',
      },
    },
    screens: {
      xl: '1280px',
      '2xl': '1280px',
    },
    container: {
      center: true,
      padding: '15px',
      '2xl': '1200px',
      xl: '1200px',
    },
  },
};
