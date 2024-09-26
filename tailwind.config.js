/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bungeehairline: ["Bungee Hairline", "sans-serif"],
        bungee: ["Bungee", "sans-serif"],
        serif: ["Adamas", "Arial", "serif"],
      },
    },
  },
  plugins: [],
};
