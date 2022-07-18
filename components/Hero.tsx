import { NextComponentType } from "next"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { browserIcon } from "../public";
import { useRouter } from "next/router";
const Hero: NextComponentType = () => {
  const { push, asPath } = useRouter();
  return (
    <div className="text-light lg:py-24 py-12 lg:px-12 flex px-8 lg:items-center lg:flex-row flex-col-reverse">
      <div className="lg:basis-1/2 flex lg:items-baseline flex-col">
        <div className="basis-1/2">
          <h1 className="lg:text-[44px] text-2xl font-bold">Brief Links, Faster Results</h1>
          <p className="font-semibold lg:text-[28px] text-base leading-relaxed">An URL Shortener Built To simplify Things.</p>
        </div>
        <div className="basis-1/2 mt-16">
          <span className="lg:p-6  p-4 rounded-xl shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73),_3px_3px_2px_rgba(4,92,148,0.288)] bg-dark font-bold tracking-wide hover:bg-neutral hover:shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73),_3px_3px_2px_rgba(2,49,77,0.288)] transition-all duration-500 ease-in-out cursor-pointer" onClick={() => push(`/auth/signIn?callbackUrl=${asPath}dashboard`)}>Get Started</span>
        </div>
      </div> 
      <div className="lg:basis-2/5 lg:float-right lg:ml-auto lg:my-auto w-3/5">
        {/* <div className="w-96 h-fit"> */}
        <Image src={browserIcon} layout="responsive" />
      {/* </div> */}
      </div>
    </div>
  )
}

export default Hero
