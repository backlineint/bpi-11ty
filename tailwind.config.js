module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      objectPosition: {
        'offset-x-35': '35%'
      },
      flex: {
        '2': '2 2 0%',
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
