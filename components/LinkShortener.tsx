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
                  <input type="url" className="block transition-all duration-500 ease-in bg-[transparent] w-full py-4 pl-20 pr-3 shadow-sm outline-none ring-2 focus:ring-neutral ring-dark ring-offset-dark ring-offset-1 focus:ring-offset-neutral/30 h-[auto] align-middle my-auto rounded-md text-light placeholder:text-light placeholder:text-lg text-lg placeholder:font-bold font-bold placeholder:align-middle placeholder:my-auto" placeholder="Enter Link Here" value={linkVal} onChange={(e)=>setLinkVal(e.target.value)} />
              </label>

                  <button className="p-4 font-semibold rounded  bg-neutral text-light w-fit hover:shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73),_3px_3px_2px_rgba(4,92,148,0.288)] tracking-wide hover:bg-dark shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73),_3px_3px_2px_rgba(2,49,77,0.288)]  transition-[box-shadow,background,color] duration-500 ease-in-out cursor-pointer active:scale-90" type="submit">{check ? "Shorten" : "Continue"}</button>
              </div>
          </form>

       
              { displayCustom && <form action="#" className="w-full" onSubmit={(e) => {
                  e.preventDefault();

                  if (!linkVal) return false;
                  if (!check) return setDisplayCustom(true);
              }} >
              <div className="lg:w-1/2 w-4/5 flex items-center justify-center mx-auto mt-8 gap-6">
                  <span className="transition-all duration-500 ease-in bg-[transparent] w-full py-4 pl-20 pr-3 shadow-sm outline-none ring-2 focus:ring-neutral ring-dark ring-offset-dark ring-offset-1 focus:ring-offset-neutral/30 h-[auto] align-middle my-auto rounded-md text-light placeholder:text-light placeholder:text-lg text-lg placeholder:font-bold font-bold flex items-center justify-center"><label htmlFor="custom">https://brief.site/api/</label><input type={"text"} id="custom" className="bg-[transparent] outline-none border-b-2 focus:border-neutral border-dark h-[auto] align-middle my-auto rounded-sm text-light placeholder:text-light/ placeholder:text-lg text-lg placeholder:font-bold font-bold w-fit" placeholder="Extension"/></span>

                  <button className="p-4  transition-all duration-500 ease-in font-semibold rounded cursor-pointer" type="submit">Shorten</button>
              </div>
              </form>
          }
    </div>
  )
}

export default LinkShortener;