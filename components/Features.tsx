import React from 'react'
import Image from "next/image"
import { NextComponentType } from "next";
import brand from '../public/monstersIllustration.svg';
import detailed from '../public/copyIllustration.svg';
import customizable from '../public/fullCustomizable.svg';

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
    <div className="py-16 text-light">
      <span>
        <h2>The Link Shortener You Can Trust</h2>
        <h4>Add more credibility to your brand with a link everyone loves to click</h4>
      </span>
      <div>
       
      </div>
  </div>
  )
}

export default Features