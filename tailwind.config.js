
const daisyui = require('daisyui');
const lineClamp = require('@tailwindcss/line-clamp');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        
      },
      keyframes: {
        
      },
    },
  },
  plugins: [daisyui, lineClamp],
}

