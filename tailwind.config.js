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
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
