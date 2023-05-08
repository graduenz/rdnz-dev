// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
  ],

  prismic: {
    endpoint: "rdnz-dev"
  },

  ssr: false,

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})