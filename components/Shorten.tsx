import { NextComponentType } from "next";
import React from 'react'

const Shorten:NextComponentType = () => {
  return (
    <div className="linear w-3/4 m-auto p-12 px-24 flex lg:flex-row flex-col items-center gap-6">
      <input type="text" placeholder="https://brief.dev/E8bCl293" className="basis-3/4 bg-transparent border-b-2 border-b-neutral focus:border-0 focus:border-b-2 focus:ring-0 text-lg text-light"/>
      <button type="submit" className="px-6 py-3 text-lg outline-0 focus:outline-0 focus:border-0 bg-neutral text-light rounded-lg font-bold">Shorten</button>
    </div>
  )
}

export default Shorten;