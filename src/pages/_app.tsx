import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import React from 'react'
import Header from '../components/Header'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
