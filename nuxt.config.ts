// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: 'Live chatgpt',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt3 + ElementPlus + Chatgpt',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  nitro: {
    rollupConfig: {
      // @ts-ignore
      plugins: [
        nodeResolve({exportConditions: ['node']}),
      ],
    },
  },

  // css
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/scss/index.scss'
  ],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode'
  ],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})
