import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { NextComponentType } from "next";
import logo from '../public/Brief.svg';
import Image from "next/image";
const Navbar: NextComponentType = () => {
  const [drop, setDrop] = useState(true);
  useEffect(() => {
    console.log(drop);
  },[drop])
  return (
    <div className="flex w-full p-6 items-center text-light bg-dark">
      <div className="basis-2/5">
      <div className="w-24 h-fit">
        <Image src={logo} layout="responsive" />
        </div>
        </div>
      <div className="flex basis-3/5 w-full">
        <div className="flex w-full basis-3/5">
          <span className="basis-1/3">
            <Link href="/">Why briefly</Link>
          </span>
          <span className="basis-1/3">
            <Link href="/">Products</Link>
          </span>
          <span className="basis-1/3">
            <Link href="/">Resources</Link>
          </span>
        </div>
          <div className="flex basis-2/5 gap-6">
          <span className="">
            <Link href="/">Login</Link>
          </span>
          <span className="">
            <Link href="/">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
 ) 
}

export default Navbar