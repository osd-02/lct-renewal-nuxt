module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      CyberExpert: "CyberExpert",
      Espace: "Espace",
      Radiation: "Radiation",
      Neuropol: "Neuropol",
      Gentium: "Gentium",
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  mode: "jit",
  important: true
};
