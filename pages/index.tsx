import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Features, Hero} from "../components";

const Home: NextPage = () => {
  return (
    <>
    <Hero />
     <Features />
    </>
  )
}

export default Home
