import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Features, Hero, Shorten } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brief</title>
        <link rel="icon" href="../public/Brief.svg"/>
      </Head>
    <Hero />
      <Features />
      <Shorten />
    </>
  )
}

export default Home
