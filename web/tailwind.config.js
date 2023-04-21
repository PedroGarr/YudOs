/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        background: "#121B08"
      },
      animation: {
        'scanner' : " scan 10s linear infinite",
      },
      keyframes: {
        scan: {
          
          "100%": {transform: 'translateY(50000%)' },
        },
      },
    },
  },
  plugins: [],
}

