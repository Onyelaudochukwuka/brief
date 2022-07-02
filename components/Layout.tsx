import React from 'react'
import type { NextComponentType } from 'next'
const Layout: NextComponentType = ({children} :IntrinsicA) => {
  return (
      <>
          {children}
      </>
  )
}

export default Layout