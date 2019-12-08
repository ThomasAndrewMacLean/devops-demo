const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  target: 'serverless',
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
})