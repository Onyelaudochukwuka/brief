import React, { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ScriptProps } from "next/script"
import { NextComponentType } from "next"
import Head from "next/head"
const Layout = ({children}:any) => {
  return (
    <div className="bg-darkPrimary min-h-screen">
      <Head>
        <title>Brief</title>
        <link rel="shortcut icon" href="/brief.ico" />
      </Head>
      {children}
    </div>
  )
}

export default Layout