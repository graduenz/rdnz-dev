// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  prismic: {
    endpoint: "rdnz-dev"
  },

  ssr: true,

  // nitro: {
  //   prerender: {
  //     crawlLinks: true
  //   }
  // },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  colorMode: {
    classSuffix: ''
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})