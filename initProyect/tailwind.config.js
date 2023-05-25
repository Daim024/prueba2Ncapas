/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-app': '#ef1347',
        'green-app': '#054a40',
        'blue-app': '#0d1839',
      },
      maxWidth: {
        '1/2': '50%',
      },

    },
  },
  plugins: [],
}
