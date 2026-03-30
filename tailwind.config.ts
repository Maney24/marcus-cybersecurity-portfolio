module.exports = {
  theme: {
    extend: {
      colors: {
        neonGreen: '#39FF14',
        neonPink: '#FF6EC7',
        neonBlue: '#00F0FF',
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      animation: {
        pulse: 'pulse 1s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};