/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hanred: '#e50056',
        hanredhover: '#d55b85',
        handark: '#000000',
        hanlight: '#f8f8f8',
        hanwhite: '#ffffff',
        hanlightgray: '#454545'
      }
    },
  },
  plugins: [],
}

