import { NextComponentType } from "next"
import Image from "next/image";
import React from 'react';
import icon from '../public/icons/arrow.svg';
const Cta:NextComponentType = () => {
  return (
    <div>
      <div>
        <h1></h1>
        <div>
          <div><h4>What Is an URL Shortener</h4><span className="block"><Image src={icon} layout="responsive" /></span></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Cta