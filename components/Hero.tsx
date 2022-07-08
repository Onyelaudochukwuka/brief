import { NextComponentType } from "next"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import browserIcon from "../public/browserIcon.svg";
const Hero:NextComponentType = () => {
  return (
    <div className="text-light py-24 px-12 flex items-center">
      <div className="basis-1/2 flex items-baseline flex-col">
        <div className="basis-1/2">
          <h1 className="text-[44px] font-bold">Brief Links, Faster Results</h1>
          <p className="font-semibold text-[28px]">An URL Shortener Built With Tools To simplify Things.</p>
        </div>
        <div className="basis-1/2">
          <span className="p-8 bg-dark"><Link href="/">Get Started</Link></span>
        </div>
      </div> 
      <div className="basis-2/5">
        {/* <div className="w-96 h-fit"> */}
        <Image src={browserIcon} layout="responsive" />
      {/* </div> */}
      </div>
    </div>
  )
}

export default Hero