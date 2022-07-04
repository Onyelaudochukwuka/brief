import { NextComponentType } from "next";
import React from 'react'

const Search:NextComponentType = () => {
  return (
    <legend className="mx-auto  w-full lg:w-5/6 text-center p-8 bg-primaryDark  lg:bg-[url('../images/bg-boost-desktop.svg')] bg-[url('../images/bg-boost-mobile.svg')] lg:bg-[length:120%_120%] lg:bg-bottom bg-[length:150%_180%] bg-[0_100%_0_0] bg-no-repeat gap-6 flex lg:flex-row flex-col items-center rounded-lg">
      <input type="url" placeholder="Shorten a link here..." className="lg:w-3/4 p-3 rounded-lg shadow-sm lg:pl-6 pl-4 text-lg  w-full"/>
      <span className="text-white bg-primaryCol hover:bg-primaryCol/75 p-3 rounded-lg lg:px-6 font-[600] tracking-wide text-lg w-full lg:w-fit"><button type="submit">Shorten It!</button></span>
    </legend>
  )
}

export default Search;