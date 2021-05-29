module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        "avatar-size": "2rem",
      },
      minHeight: {
        "min-table-height": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
