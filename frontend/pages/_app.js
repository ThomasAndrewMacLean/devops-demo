import React from 'react'
import App from 'next/app'
import * as Sentry from '@sentry/browser'
import { ThemeProvider } from 'styled-components'
import {theme} from '../styles/theme'


if(process.env.NODE_ENV === "production"){
    Sentry.init({
        dsn: "https://0d5a6b06cd244091820d9ba99846bbbb@sentry.io/1849962",
    })
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    // Workaround for https://github.com/zeit/next.js/issues/8592
    const { err } = this.props
    const modifiedPageProps = { ...pageProps, err }

    return  <ThemeProvider theme={theme}>
                <Component {...modifiedPageProps} />
            </ThemeProvider>
    
  }
}

export default MyApp