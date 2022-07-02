import React from 'react'
import Link from "next/link"
import { NextComponentType } from "next"
const Navbar:NextComponentType = () => {
  return (
      <div className="flex lg:flex-row flex-col gap-12 p-6 items-center font-bold text-base">
          <span className="font-bold text-2xl">Shortly</span>
          <div className="flex w-3/4 float-right ml-auto items-center">
          <div className="hidden lg:flex flex-row gap-10 text-neutralGrayish float-left mr-auto grow">
              <span className="hover:text-neutralViolet cursor-pointer">Features</span>
              <span className="hover:text-neutralViolet cursor-pointer">Pricing</span>
              <span className="hover:text-neutralViolet cursor-pointer">Resources</span>
          </div>
          <div className="flex gap-8 mr-5 items-center text-neutralGrayish">
              <Link href="login"><span className="hover:text-neutralViolet cursor-pointer">Login</span></Link>
              <Link href="login"><span className="px-5 py-2 bg-primaryCol rounded-full text-white hover:bg-primaryCol/75 cursor-pointer">Sign Up</span></Link>
          </div>
          </div>
    </div>
  )
}

export default Navbar