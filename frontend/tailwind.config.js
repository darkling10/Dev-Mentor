/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
    extend: {
      colors: {
      "primary":"#3c37ff",
      "light-primary":"#edeffa",
      "dark-primary":"#2520e3",
      "dark-bg":"#0a0a0a",
      "dark-gray":"#262931",
      "error-bg":'#fff9f9',
      "error":"#cc8787"
      },
      fontFamily: {
        Inter: "'Inter', sans-serif"
      },
    },
  },
  plugins: [],
}
