

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    function({ addComponents }) {
      addComponents({
        '.btn-orange': {
          backgroundColor: '#FF3811',
          border: '1px solid #FF3811',
          fontSize: '16px',
          color: '#ffffff',
          fontWeight: '400',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#e42904',
            border: '1px solid #FF3811',
          },
        },
        '.btn-orange-outline': {
          backgroundColor: '#ffffff',
          border: '1px solid #FF3811',
          padding: '16px 28px',
          borderRadius: '5px',
          color: '#FF3811',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#e42904',
            color: '#ffffff',
          },
        },
      });
    },
  ],
}
