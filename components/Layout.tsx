import React, { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ScriptProps } from "next/script"
import { NextComponentType } from "next"
import Head from 'next/head';
const Layout = ({ children }: any) => {

  return (
    <div className="bg-darkPrimary min-h-screen">
      <Head>
        {/* <html lang="en"/> */}
          <meta name="author" content="Onyela Udochukwuka" />
        <meta name="description" content="An URL Shortener Built To simplify Things." />
              <meta name="keywords" content="Brief, urlShortener, udoka, url, shortener" />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                  <meta property="og:image:src" content="/brief.ico" />
        <meta property="og:image" content="/brief.ico" />
                      <meta property="og:image:width" content="1200" />
                        <meta property="og:image:height" content="600" />
                          <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property="og:description" content="An URL Shortener Built To simplify Things." />
                            <meta property="og:title" content="Brief" />
        <title>Brief</title>
        <link rel="shortcut icon" href="/brief.ico" />
      </Head>
      {children}
      </div>
  )
}

export default Layout