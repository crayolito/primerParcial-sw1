/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google-suse': ["SUSE", "sans-serif"],
      },
      boxShadow:{
        'white': '0 2px 4px  rgba(255, 255, 255, 0.5)',
        'custom-auth' :'4px 4px 10px rgba(0, 0, 0, 0.25), -4px 4px 10px rgba(0, 0, 0, 0.25)',

      }
    },
  },
  plugins: [],
}

