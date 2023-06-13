/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './src/Components/Reaquest/NavComp.jsx', 'node_modules/preline/dist/*.js', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin'), require('preline/plugin'),
  ]

}

