import { NextComponentType } from "next"
import React from 'react';
import Image from "next/image";
import image from "../images/illustration-working.svg";
const Hero:NextComponentType = () => {
  return (
    <div className="flex items-center p-3 lg:p-12 lg:flex-row flex-col-reverse gap-6 text-neutralViolet">
      <div className="flex flex-col lg:gap-8 gap-4 justify-center">
        <div>
          <h1 className="lg:text-6xl text-4xl font-bold text-center lg:text-left">More than just shorter links</h1>
          <p className="lg:w-3/4 text-base text-neutralGrayish lg:text-lg lg:text-left text-center">Build your brand's recognition and get detailed insights 
  on how your links are performing.</p>
        </div>
        <span className="px-8 py-3 justify-center bg-primaryCol rounded-full text-white hover:bg-primaryCol/75 cursor-pointer w-fit mx-auto lg:mx-0 font-[600]">Get Started</span>
      </div>
      <div className="lg:w-3/4 w-full h-auto block p-0 m-0"><Image src={image} layout="responsive" /></div>
     
    </div>
  )
}

export default Hero