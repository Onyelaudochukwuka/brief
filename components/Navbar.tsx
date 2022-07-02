import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
      <div className="flex lg:flex-row flex-col gap-12 p-6">
          <span className="font-bold text-xl">Shortly</span>
          <div className="hidden lg:flex flex-row gap-10 text-">
              <span>Features</span>
              <span>Pricing</span>
              <span>Resources</span>
          </div>
          <div>
              <Link href="login"><span>Login</span></Link>
              <Link href="login"><span className="p-4 bg-primary">Sign Up</span></Link>
          </div>
    </div>
  )
}

export default Navbar