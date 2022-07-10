import { NextComponentType } from "next";
import React from 'react'
import Cta from "./Cta";
import Image from "next/image";
import { facebook, instagram, twitter } from "../public";
const icons = [facebook, instagram, twitter];
const Footer:NextComponentType = () => {
  return (
    <div className="flex flex-col w-full p-12 items-center text-light bg-navBar font-semibold mt-8">
      <div className="flex w-full items-baseline py-4">
        <span className="basis-2/5 text-center text-3xl align-middle my-auto font-bold">Brief</span>
        <span className="flex flex-col gap-4 basis-1/5">
          <span className="font-bold text-lg">Features</span>
          <span className="flex flex-col gap-2">
          <span>Link Shortening</span>
          <span>Analytics</span>
        </span>
        </span>
        <span className="flex flex-col gap-4 basis-1/5">
          <span className="font-bold text-lg">Resources</span>
          <span className="flex flex-col gap-2">
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </span>
        </span>
        <span className="flex flex-col gap-4 basis-1/5">
          <span className="font-bold text-lg">Company</span>
          <span className="flex flex-col gap-2">
          <span>Link Shortening</span>
          <span>Analytics</span>
        </span>
        </span>
      </div>
      <div className="flex gap-4">
        {icons.map((icon) => <span className="w-8 h-8 block cursor-pointer"><Image src={icon} layout="responsive" /></span>)}
      </div>
    </div>
  )
}

export default Footer;