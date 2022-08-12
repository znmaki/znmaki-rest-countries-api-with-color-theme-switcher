/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      boxShadow: {
        'custze': '-1px 5px 15px 0px rgba(0,0,0,0.55)',
        'custze-2': '0px 0px 9px 2px rgba(0,0,0,0.55)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
