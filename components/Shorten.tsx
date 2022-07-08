import { NextComponentType } from "next";
import React from 'react'

const Shorten:NextComponentType = () => {
  return (
    <div className="linear w-3/4 m-auto p-12 px-24 flex items-center">
      <input type="text" placeholder="https://brief.dev/E8bCl293" className="basis-3/4 bg-"/>
      <button type="submit" className="w-1/4">Shorten</button>
    </div>
  )
}

export default Shorten;