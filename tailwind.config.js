/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ["silkscreen", "cursive"],
        roboto: ["roboto", "sans-serif"],
        montez: ["montez", "cursive"],
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
};
