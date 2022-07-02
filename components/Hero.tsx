import { NextComponentType } from "next"
import React from 'react'

const Hero:NextComponentType = () => {
  return (
    <div>
      <div>
        <div>
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights 
  on how your links are performing.</p>
        </div>
        <span className="px-5 py-3 bg-primaryCol rounded-full text-white hover:bg-primaryCol/75 cursor-pointer">Get Started</span>
      </div>
    </div>
  )
}

export default Hero