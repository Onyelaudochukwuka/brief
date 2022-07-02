import React, { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ScriptProps } from "next/script"
const Layout = ({children}:ScriptProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout