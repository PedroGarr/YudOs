/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: "#121B08"
      },
      animation: {
        'scanner': " scan 30s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: 'translateY(0vh)' },
          "100%": { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}

