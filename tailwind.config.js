/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "serif"],
        "playWrite": ["Playwrite AU SA", "serif"],
        "neue": ["Bebas Neue", "serif"],
      },
      colors: {
        'firstBg': '#24a148', 
      },
    },
  },
   plugins: [
    require('daisyui'),
  ],
}

