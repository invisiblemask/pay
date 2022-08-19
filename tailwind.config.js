/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      '3xs': '8px',
      '2xs': '10px',
      'xs': '12px',
      'sm': '14px',
      'base': '17px',
      'xl': '1.3rem',
      '2xl': '1.5rem',
      '3xl': '1.9rem',
      '4xl': '2.3rem',
      '5xl': '2.5rem',
    },
    borderRadius: {
      'lg': '0.5rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      'full': '50%'
    },
    extend: {},
  },
  plugins: [],
}
