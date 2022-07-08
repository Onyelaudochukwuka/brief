import { NextComponentType } from "next"
import Image from "next/image";
import React from 'react';
import icon from '../public/icons/arrow.svg';
const data = [
  {
    header: "What is an URL shortener",
    details: "URL Shortener is a kind of a tool that allows you to shorten the URL, which is often in the form of: “https”http”. Using this tool, you will be able to easily access your website by entering just one key, and you will be automatically redirected to your website."
  },
  {
    header: "Benefit of a Short Url",
    details: "Shorter URLs Make Sharing Easier and also giving a short link which is more memorable means users can comeback to your site without needing to search through their history tab for hour's."
  },
  {
    header: "What is a Custom Url Shortener",
    details: "Why choose brief"
  },
  {
    header: "Why choose brief",
    details: ""
  }
]
const Cta:NextComponentType = () => {
  return (
    <div className="p-4">
      <div>
        <h1></h1>
        <div>
          {data.map(({ header, details }) => <div className="flex w-2/5 border-b border-light mx-auto justify-between text-light p-2 items-center"><h4>{header}</h4><span className="block w-8 h-8"><Image src={icon} layout="responsive" /></span></div>)}
          
        </div>
      </div>
    </div>
  )
}

export default Cta