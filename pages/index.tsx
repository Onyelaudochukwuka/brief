import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import '../public/Brief.ico';
import { Cta, Features, Hero, Shorten } from "../components";
const Home: NextPage = () => {
  return (
    <>
    <Hero />
      <Shorten />
      <Features />
      <Cta />
    </>
  )
}

export default Home
