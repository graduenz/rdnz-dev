// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
  ],

  prismic: {
    endpoint: "rdnz-dev"
  },

  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})