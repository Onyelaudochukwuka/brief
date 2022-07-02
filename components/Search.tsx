import { NextComponentType } from "next";
import React from 'react'

const Search:NextComponentType = () => {
  return (
    <legend className="align-center mx-auto w-3/4 text-center p-6 bg-primaryDark">
      <input type="url" />
      <button type="submit">Shorten It!</button>
    </legend>
  )
}

export default Search;