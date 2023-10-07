const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',

  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        "light-primary": "#fcfffd",
        "light-secondary": "#c0fdfb",
        "light-tail-100": "#64b6ac",
        "light-tail-500": "#5d737e",
        "dark-primary": "#191308",
        "dark-secondary": "#454b66",
        "dark-navy-100": "#677db7",
        "dark-navy-500": "#9ca3db",
        accent: {
            DEFAULT: "#ac6b34",
            hover: "#925a2b",
        },
        paragraph: "#878e99",
        blue: colors.blue,
        indigo: colors.indigo,
        green: colors.green,
        red: colors.red,
      },
      backgroundImage: {
        'ojtis': "url('/public/storage/projects/ojtis.png')",
        'portfolio': "url('/public/storage/projects/portfolio.png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
