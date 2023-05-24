// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge"
  ],

  prismic: {
    endpoint: "rdnz-dev"
  },

  ssr: true,

  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  colorMode: {
    classSuffix: ''
  },

  vite: {
    define: {
      "process.env.VSCODE_TEXTMATE_DEBUG": "false",
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
