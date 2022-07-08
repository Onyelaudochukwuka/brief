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
          <p className="font-semibold text-[28px] leading-relaxed">An URL Shortener Built With Tools To simplify Things.</p>
        </div>
        <div className="basis-1/2 mt-16">
          <span className="p-6 rounded-xl shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73),_3px_3px_2px_rgba(4,92,148,0.288)] bg-dark font-bold tracking-wide hover:bg-neutral hover:shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73),_3px_3px_2px_rgba(2,49,77,0.288)] transition-all duration-500 ease-in-out cursor-pointer"><Link href="/">Get Started</Link></span>
        </div>
      </div> 
      <div className="basis-2/5 float-right ml-auto my-auto">
        {/* <div className="w-96 h-fit"> */}
        <Image src={browserIcon} layout="responsive" />
      {/* </div> */}
      </div>
    </div>
  )
}

export default Hero