import { NextComponentType } from "next"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
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
    <div className="p-4 flex flex-col gap-10">
      <div>
        <h1></h1>
        <div>
          {data.map(({ header, details }) => {
            const [detailExpand, setDetailExpand] = useState(false);
            return (
              
              <div key={header} onClick={()=>setDetailExpand(!detailExpand)} className={`flex cursor-pointer lg:w-2/5 w-3/4 border-b flex-col border-light mx-auto justify-between text-light items-center overflow-y-hidden ${detailExpand &&`gap-3 py-4 transition-[gap,padding] duration-300 ease-in-out`}`}>
                <span className="flex p-2 items-center justify-between w-full">
                  <h4 className="text-lg font-bold">{header}</h4>
                <span className={`block w-8 h-8 ${detailExpand && `rotate-45 transition duration-500 ease-in`} transition duration-500 ease-out`}><Image src={icon} layout="responsive" /></span>
                </span>
                <div className={`${detailExpand ? `h-24 transition-[height] duration-1000 ease-in` : `h-0 transition-[height] duration-1000 ease-out`}`}><p className="font-semibold text-sm">{details}</p></div>
              </div>
            )
          }
          )}
          
        </div>
      </div>
      <div className="flex flex-col text-center text-light items-center gap-8">
        <h1 className="tracking-wide text-xl font-bold">Get A Brief Link Today</h1>
        <span className="px-4 py-2.5 rounded-lg bg-neutral text-light font-bold w-fit"><Link href="/">Get Started</Link></span>
      </div>
    </div>
  )
}

export default Cta