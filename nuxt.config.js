export default {
  // target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DSRKafuU',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "DSRKafuU's home page" },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ],
  },

  // global CSS (https://go.nuxtjs.dev/config-css)
  css: ['normalize.css', './css/fonts.css', './css/variables.css', './css/reset.css'],

  // auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['./plugins/cdn.js'],

  // modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  // buildModules: [],

  // modules (https://go.nuxtjs.dev/config-modules)
  // modules: [],

  // build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {},
};
