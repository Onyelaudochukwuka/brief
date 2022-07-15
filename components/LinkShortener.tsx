import { NextComponentType } from "next"
import Image from "next/image"
import React, { useState } from 'react'
import { link } from "../public"

type Props = {
    check?: boolean;
}

const LinkShortener = ({check}: Props) => {
    const [linkVal, setLinkVal] = useState('');
    const [displayCustom, setDisplayCustom] = useState(false)
  return (
      <div className="flex items-center justify-center mt-12 gap-24 flex-col">
          <h1 className="text-light text-xl font-bold tracking-widest">Shorten Link</h1>
          <form action="#" className="w-full" onSubmit={(e) => {
              e.preventDefault();
              if (!linkVal) return false;
              if (!check) return setDisplayCustom(true);
          }} >
          <div className="lg:w-1/2 w-4/5 flex items-center justify-center mx-auto mt-8 gap-6">
              <label className="w-full relative block mx-auto">
                  <span className="absolute inset-y-0 left-2 flex items-center pl-2 justify-center">
                      <Image src={link} height="48" width="48" />
                  </span>
                  <input type="url" className="block transition-all duration-500 ease-in bg-[transparent] w-full py-4 pl-20 pr-3 shadow-sm outline-none ring-2 ring-neutral focus:ring-dark focus:ring-offset-dark ring-offset-1 ring-offset-neutral/30 h-[auto] align-middle my-auto rounded-md text-light placeholder:text-light placeholder:text-lg text-lg placeholder:font-bold font-bold placeholder:align-middle placeholder:my-auto" placeholder="Enter Link Here" />
              </label>

              <button className="p-4  transition-all duration-500 ease-in font-semibold rounded cursor-pointer" type="submit">Shorten</button>
              </div>
          </form>
          {displayCustom &&  }
    </div>
  )
}

export default LinkShortener;