import { NextComponentType } from "next";
import React from 'react'

const Search:NextComponentType = () => {
  return (
    <legend className="align-center mx-auto w-3/4 text-center p-8 bg-primaryDark  bg-[url('../images/bg-boost-desktop.svg')] bg-[length:175%] bg-center gap-6 flex flex-row rounded-lg">
      <input type="url" placeholder="Shorten a link here..." className="w-3/4 p-2.5 rounded-lg shadow-sm pl-6"/>
      <button type="submit"><span className="text-white bg-primaryCol p-4 rounded-lg px-6 font-[600] tracking-wide">Shorten It!</span></button>
    </legend>
  )
}

export default Search;