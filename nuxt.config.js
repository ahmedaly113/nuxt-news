export default {
  head: {
    titleTemplate: 'Nuxt News | %s',
    meta: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  loading: {
    color: '#00C48D'
  },

  manifest: {
    name: 'Nuxt News',
    short_name: 'Nuxt News',
    description: '',
    theme_color: '#2F495E',
    start_url: '/news'
  },

  devModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: ''
  },

  plugins: [
    '~/plugins/filters'
  ],

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  }
}
