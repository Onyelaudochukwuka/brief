import { NextComponentType } from "next";
import React from 'react'

const Search:NextComponentType = () => {
  return (
    <legend className=" mx-auto  w-full lg:w-5/6 text-center p-8 bg-primaryDark  bg-[url('../images/bg-boost-desktop.svg')] bg-[length:175%] bg-center gap-6 flex lg:flex-row flex-col items-center rounded-lg ">
      <input type="url" placeholder="Shorten a link here..." className="lg:w-3/4 p-3 rounded-lg shadow-sm lg:pl-6 pl-4 text-lg  w-full"/>
      <span className="text-white bg-primaryCol p-3 rounded-lg lg:px-6 font-[600] tracking-wide text-lg w-full lg:w-fit"><button type="submit">Shorten It!</button></span>
    </legend>
  )
}

export default Search;