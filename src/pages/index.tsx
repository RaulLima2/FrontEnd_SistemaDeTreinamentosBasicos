import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'

// const Home: NextPage = () => {
function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main >
        <h1 >
          Hello world!
        </h1>
      </main>
    </div>
  )
}

export default Home
