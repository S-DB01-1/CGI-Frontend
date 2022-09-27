/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#200a58',
        'secondary': '#e41937',
        'info': '#5236ab',

        'background': '#f8f8f8',
        'background-light': '#eaeaf5',
      },
      container: {         
        padding: {           
          DEFAULT: '8.5rem',         
        },       
      },
    },
  },
  plugins: [],
}
