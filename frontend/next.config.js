const withCSS = require('@zeit/next-css')
// const withOffline = require('next-offline')

module.exports = (withCSS({
  target: 'serverless',
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}))