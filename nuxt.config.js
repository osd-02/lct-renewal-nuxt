require("dotenv").config();
// const {FLAMELINK_API_KEY, FLAMELINK_AUTH_DOMAIN, FLAMELINK_PROJECT_ID, FLAMELINK_DB_URL, FLAMELINK_STORAGE_BUCKET, FLAMELINK_MESSAGING_SENDER_ID} = process.env

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "lct-nuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://vuetifyjs.com/ja/
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv'
  ],

  vuetify: {
    theme: {
      light: true,
      themes: {
        light: {
          main: "#d7c1a3",
          sub: "#ded3bb",
          primary: "#d14126",
          secondary: "#ccc8bf",
          accent: "#bdd3e2",
          warning: "#aa9e32",
          success: "#0f4c81"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: function(config, { isDev, isClient }) {
      config.node = {
        fs: "empty"
      };
    }
  },

  // env: {
  //   FLAMELINK_API_KEY,
  //   FLAMELINK_AUTH_DOMAIN,
  //   FLAMELINK_PROJECT_ID,
  //   FLAMELINK_DB_URL,
  //   FLAMELINK_STORAGE_BUCKET,
  //   FLAMELINK_MESSAGING_SENDER_ID
  // },

  plugins: ["@/plugins/flamelink"],
};
