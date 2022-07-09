import React from 'react'
import Image from "next/image"
import { NextComponentType } from "next";
import brand from '../public/monstersIllustration.svg';
import detailed from '../public/copyIllustration.svg';
import customizable from '../public/fullyCustomizable.svg';

const details = [
  {
  icon: brand,
  heading: "Brand Recognition",
  details: "Boost Your Brand Recognition with Every Click, Branded Links help instil confident in your content."
  },
  {
    icon: detailed,
    heading: "Detailed Records",
    details: "Gain insight into when your links are clicked. And booster your brands potential with that data.",
  },
  {
    icon: customizable,
    heading: "Fully Customizable",
    details: "Improve brand awareness and content discoverability through customizable links, supercharging audience"
  }
]
const Features: NextComponentType = () => {
  return (
    <div className="py-16 text-light flex flex-col gap-12">
      <span>
        <h2 className="text-center font-bold text-2xl">The Link Shortener You Can Trust</h2>
        <h4 className="text-center font-semibold text-base">Add more credibility to your brand with a link everyone loves to click</h4>
      </span>
      <div className="flex lg:flex-row flex-col px-8 gap-12 justify-between items-center">
        {details.map(({ icon, heading, details }) =>
          <div className="self-stretch linear flex flex-col items-center w-fit p-12 justify-between gap-6 pr-0 mx-auto">
            <div className="h-auto w-5/12 align-bottom my-auto mr-12"><Image src={icon} layout="responsive" /></div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">{heading}</h1>
              <p className="w-4/5 text-sm font-semibold">{details}</p>
            </div>
          </div>
          
        )}
      </div>
  </div>
  )
}

export default Features