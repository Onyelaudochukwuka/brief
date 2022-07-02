import { NextComponentType } from "next"
import React from 'react';
import Svg from './Svg';
import Image from "next/image";
import image from "../images/illustration-working.svg";
const Hero:NextComponentType = () => {
  return (
    <div className="flex items-center p-3 lg:p-12">
      <div className="">
        <div>
          <h1 className="text-6xl font-bold">More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights 
  on how your links are performing.</p>
        </div>
        <span className="px-5 py-3 bg-primaryCol rounded-full text-white hover:bg-primaryCol/75 cursor-pointer">Get Started</span>
      </div>
      <div className="w-full h-auto block p-0 m-0"><Image src={image} layout="responsive" /></div>
    </div>
  )
}

export default Hero