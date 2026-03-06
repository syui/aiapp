import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  build: {
    assetsInlineLimit: 0,
  },
  appType: 'mpa',
  plugins: [{
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (url.match(/^\/[a-z]+$/) && !url.includes('.')) {
          req.url = url + '/index.html'
        }
        next()
      })
    },
  }],
})
