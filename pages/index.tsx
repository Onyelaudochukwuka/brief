import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Features, Hero, Shorten } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brief</title>
        <link rel="shortcut icon" href="../public/Brief.ico" type="image/x-icon" />
      </Head>
    <Hero />
      <Features />
      <Shorten />
    </>
  )
}

export default Home
