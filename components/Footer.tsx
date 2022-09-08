import { NextComponentType } from "next";
import React, { useId } from 'react'
import Cta from "./Cta";
import Image from "next/image";
import { facebook, github, twitter } from "../public";
const icons = [{ icon: facebook, link: "https://github.com/Onyelaudochukwuka" }, { icon: github, link: "zhttps://github.com/Onyelaudochukwuka" }, { icon: twitter, link: "https://twitter.com/OnyelaUdochukw1" }];
const FootLink = ["Blog", "Developer", "Support"];
const FeaturesLink = ["Link Shortening", "Analytics"];
const Footer: NextComponentType = () => {
  const ID = useId();
  return (
    <footer className="flex flex-col w-full p-12 items-center text-light bg-navBar font-semibold mt-8 gap-4">
      <div className="flex w-full lg:items-baseline py-4 lg:flex-row flex-col lg:gap-0 justify-center gap-6 items-start">
        <span className="basis-1/3 text-center text-3xl align-middle my-auto font-bold">Brief</span>
        <span className="flex flex-col lg:gap-4 gap-1 basis-1/3">
          <span className="font-bold text-lg">Features</span>
          <span className="flex flex-col gap-2">     
        </span>
        </span>
        <span className="flex flex-col lg:gap-4 gap-1 basis-1/3">
          <span className="font-bold text-lg">Resources</span>
          <span className="flex flex-col gap-2">
            {FootLink.map((val) => <span className="hover:text-neutral relative w-fit cursor-pointer transition-colors duration-300 ease-in-out after:w-full after:left-0 after:h-1 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:origin-left after:duration-300 after:bg-neutral after:absolute after:rounded-full">{val}</span>)}
        </span>
        </span>
      </div>
      <div className="flex gap-4">
        {icons.map(({icon,link},i) => <a key={ID + i} href={link} className="w-8 h-8 block cursor-pointer"><Image src={icon} layout="responsive" alt="social icon" /></a>)}
      </div>
    </footer>
  )
}

export default Footer;