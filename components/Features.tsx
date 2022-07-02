import React from 'react'
import Search from "./Search"

const Features = () => {
  return (
  <fieldset className="bg-neutralGray/10 p-8">
      <Search />
      <div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">Advanced Statistics</h3>
          <p className="w-1/3 mx-auto text-neutralGrayish">Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      </fieldset>
  )
}

export default Features