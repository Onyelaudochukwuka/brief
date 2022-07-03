import { NextComponentType } from "next";
import React from 'react'

const Search:NextComponentType = () => {
  return (
    <legend className="mx-auto w-3/4 text-center p-8 bg-primaryDark  bg-[url('../images/bg-boost-desktop.svg')] bg-[length:175%] bg-center gap-6 flex flex-row rounded-lg">
      <input type="url" placeholder="Shorten a link here..." className="lg:w-3/4 w-2/3 p-2.5 rounded-lg shadow-sm lg:pl-6 sm:text-sm"/>
      <button type="submit"><span className="text-white bg-primaryCol lg:p-4 p-3 rounded-lg lg:px-6 font-[600] tracking-wide text-sm">Shorten It!</span></button>
    </legend>
  )
}

export default Search;