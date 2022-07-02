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
      <div className="flex flex-col">
        <div className="text-center flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-neutralViolet">Advanced Statistics</h3>
          <p className="w-1/3 mx-auto text-neutralGrayish">Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
        </div>
        <div className="flex gap-8 p-28 -mt-8 items-center">
          <div className="w-3/4 m-auto align-middle mt-8 bg-primaryCol h-2.5 absolute -z-10"></div>
          <fieldset className="w-full bg-white rounded shadow-lg shadow-neutralGrayish/5 p-1">
            <legend className="p-4 bg-primaryDark w-fit rounded-full ml-8"><span className="w-10 h-10 block p-0 m-0"><Image src={icon1} layout="responsive" /></span> </legend>
            <div className="px-6 py-8 flex flex-col gap-4">
              <h1 className="text-xl font-bold">Brand Recognition</h1>
              <p className="w-full text-base">  Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content</p>
            </div>
          </fieldset>
          <fieldset className="w-full p-1 bg-white mt-20 rounded shadow-lg shadow-neutralGrayish/5">
            <legend className="p-4 bg-primaryDark w-fit rounded-full ml-8"><span className="w-10 h-10 block p-0 m-0"><Image src={icon2} layout="responsive" /></span> </legend>
            <div className="px-6 py-8 flex flex-col gap-4">
            <h1 className="text-xl font-bold">Detailed Records</h1>
              <p className="w-full text-base">   Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
            </div>
          </fieldset>
          <fieldset className="w-full p-1 bg-white mt-40 rounded shadow-lg shadow-neutralGrayish/5">
            <legend className="p-4 bg-primaryDark w-fit rounded-full ml-8"><span className="w-10 h-10 block p-0 m-0"><Image src={icon3} layout="responsive" /></span> </legend>
            <div className="px-6 py-8 flex flex-col gap-4">
            <h1 className="text-xl font-bold">Fully Customizable</h1>
              <p className="w-full text-base">    Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
            </div>
          </fieldset>
        </div>
      </div>
      </fieldset>
  )
}

export default Features