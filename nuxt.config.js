require("dotenv").config();
// const {FLAMELINK_API_KEY, FLAMELINK_AUTH_DOMAIN, FLAMELINK_PROJECT_ID, FLAMELINK_DB_URL, FLAMELINK_STORAGE_BUCKET, FLAMELINK_MESSAGING_SENDER_ID} = process.env

export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: "server",

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
  css: ["@/assets/css/main.css"],

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
  modules: ["@nuxtjs/dotenv", '@nuxtjs/google-gtag'],

  vuetify: {
    theme: {
      light: true,
      themes: {
        light: {
          main: "#d8c697",
          sub: "#e9e3bd",
          primary: "#d14126",
          secondary: "#f9f6e5",
          accent: "#0f4c81",
          warning: "#aa9e32",
          success: "#1878cc"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: function(config, { isDev, isClient }) {
      config.node = {
        fs: "empty",
        child_process: 'empty',
        net: 'empty',
        dns: 'empty',
        tls: 'empty'
      };
    }
  },

  env: {
    APP_ID: process.env.APP_ID,
    API_KEY: process.env.API_KEY,
    FLAMELINK_API_KEY: process.env.FLAMELINK_API_KEY,
    FLAMELINK_AUTH_DOMAIN: process.env.FLAMELINK_AUTH_DOMAIN,
    FLAMELINK_PROJECT_ID: process.env.FLAMELINK_PROJECT_ID,
    FLAMELINK_STORAGE_BUCKET: process.env.FLAMELINK_STORAGE_BUCKET,
    FLAMELINK_MESSAGE_SENDER_ID: process.env.FLAMELINK_MESSAGE_SENDER_ID,
    FLAMELINK_APP_ID: process.env.FLAMELINK_APP_ID,
    FLAMELINK_MEASUREMENT_ID: process.env.FLAMELINK_MEASUREMENT_ID
  },

  plugins: ["@/plugins/flamelink", "@/plugins/vue-scrollto"],

  'google-gtag': {
    id: 'G-YF2DXSCTKC',  //サイトのID
    debug: false,  // 開発環境でも表示したい場合
  }
};
