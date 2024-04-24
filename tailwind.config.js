/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'madimi-one-regular': ['madimi-one-regular', 'sans-serif'],
    },
    fontSize: {
        'xl': ['1.25rem', '1.75rem'],
    },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

