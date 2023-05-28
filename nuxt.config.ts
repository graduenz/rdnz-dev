// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge"
  ],

  app: {
    head: {
      meta: [
        { name: "language", content: "en" },
        { name: "robots", content: "index,follow" },
        { name: "author", content: "Guilherme Raduenz" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ]
    },
  },

  prismic: {
    endpoint: "rdnz-dev"
  },

  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

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
