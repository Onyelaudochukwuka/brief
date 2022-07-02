import React, { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({children}:any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout