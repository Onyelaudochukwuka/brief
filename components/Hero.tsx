import { NextComponentType } from "next"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import browserIcon from "../public/browserIcon.svg";
const Hero:NextComponentType = () => {
  return (
    <div className="text-light py-16 px-8 flex items-center">
      <div className="basis-1/2">
        <div>
          <h1>Brief Links, Faster Results</h1>
          <p>An URL Shortener Built With Tools To simplify Things.</p>
        </div>
        <div>
          <span className=""><Link href="/">Get Started</Link></span>
        </div>
      </div> 
      <div className="basis-1/2 p-24">
        <Image src={browserIcon} layout="responsive" />
      </div>
    </div>
  )
}

export default Hero