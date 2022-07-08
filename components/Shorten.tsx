import { NextComponentType } from "next";
import React from 'react'

const Shorten:NextComponentType = () => {
  return (
    <div className="linear p-12">
      <input type="text" placeholder="https://brief.dev/E8bCl293" />
      <button type="submit">Shorten</button>
    </div>
  )
}

export default Shorten;