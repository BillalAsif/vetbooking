module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    container: {
      padding: {
        DEFAULT: '3rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
