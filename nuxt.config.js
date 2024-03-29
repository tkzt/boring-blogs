import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Boring Blogs',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    markdown: {
      async highlighter() {
        const shiki = require('shiki')
        const highlighter = await shiki.getHighlighter({
          // Complete themes: https://github.com/shikijs/shiki/tree/master/packages/themes
          theme: 'github-light',
        })

        return (rawCode, lang) => highlighter.codeToHtml(rawCode, { lang })
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  generate: {
    crawler: false,
    async routes() {
      const { $content } = require('@nuxt/content')
      const { state } = require('./store')

      const nameAliasMap = state().categories.reduce(
        (pre, curr) => ({ ...pre, [curr.name]: curr.alias }),
        {}
      )
      const posts = await $content({ deep: true })
        .only(['path', 'category'])
        .fetch()

      return [
        ...posts.reduce(
          (pre, curr) =>
            pre
              .add(`/${nameAliasMap[curr.category]}${curr.path}`)
              .add('/' + nameAliasMap[curr.category]),
          new Set()
        ),
      ].concat(['/', '/all-posts'])
    },
  },

  router: {
    base: '/boring-blogs/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
