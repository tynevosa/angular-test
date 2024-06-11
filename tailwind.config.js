/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px', // Define the custom breakpoint
      },
    },
  },
  plugins: [
  ],
}

