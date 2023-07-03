// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
  ],

  app: {
    head: {
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-5KTNBB50LM',
        },
        {
          src: '/gtag.js',
        },
      ],
      meta: [
        { name: 'language', content: 'en' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: 'Guilherme Raduenz' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  prismic: {
    endpoint: 'rdnz-dev',
    linkResolver: '~/prismic/link-resolver.js',
  },

  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  css: [
    '~/assets/css/main.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  vite: {
    define: {
      'process.env.VSCODE_TEXTMATE_DEBUG': 'false',
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: {
    enabled: true,
  },
});
