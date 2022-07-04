import { NextComponentType } from "next"
import React from 'react'

const Cta:NextComponentType = () => {
  return (
      <div className="lg:bg-[url('../images/bg-boost-desktop.svg')] bg-[url('../images/bg-boost-mobile.svg')] lg:bg-[length:100%_120%] lg:bg-bottom bg-[length:100%_150%] bg-center bg-no-repeat w-full bg-primaryDark p-16 text-center text-white">
          <h1>Boost your links today</h1>
          <span>Get Started</span>
      </div>
  )
}

export default Cta