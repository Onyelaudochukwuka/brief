import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import '../public/Brief.ico';
import { Cta, Features, Hero, Shorten } from "../components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
      <Shorten />
      <Features />
      <Cta />
      <Footer />
    </>
  )
}

export default Home
