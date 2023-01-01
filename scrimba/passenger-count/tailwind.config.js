/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
        colors: {
            white: 'hsl(0, 0%, 100%)',
            darkBlue: 'hsl(218, 44%, 22%)',
            veryDarkBlue: 'hsl(218, 44%, 12%)',
            lightGray: 'hsl(212, 45%, 89%)',
            lightRed: 'hsl(353, 100%, 62%)',
            veryLightRed: 'hsl(10, 100%, 65%)',
        },
        boxShadow: {
        '3xl': '0 0 10px 2px rgba(0, 0, 0, 0.3)',
        }
    },
  },
  plugins: [],
}
