import React from 'react'
import Search from "./Search"
import Image from "next/image"
import icon1 from '../images/icon-brand-recognition.svg';
import icon2 from '../images/icon-detailed-records.svg';
import icon3 from '../images/icon-fully-customizable.svg';
const Features = () => {
  return (
  <fieldset className="bg-neutralGray/10 p-8">
      <Search />
      <div className="flex flex-col gap-10">
        <div className="text-center flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-neutralViolet">Advanced Statistics</h3>
          <p className="w-1/3 mx-auto text-neutralGrayish">Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
        </div>
        <div className="flex">
          <span>
          </span>
          <span></span>
          <span></span>
        </div>
      </div>
      </fieldset>
  )
}

export default Features