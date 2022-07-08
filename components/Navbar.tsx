import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { NextComponentType } from "next";
import logo from '../public/icons/Brief.svg';
import Image from "next/image";
const Navbar: NextComponentType = () => {
  const [drop, setDrop] = useState(true);
  useEffect(() => {
    console.log(drop);
  },[drop])
  return (
    <div>
      <div><Image src={logo} layout="responsive" />
      <div>
        <div>
          <span>
            <Link href="/"></Link>
          </span>
          <span>
            <Link href="/"></Link>
          </span>
          <span>
            <Link href="/"></Link>
          </span>
          <span>
            <Link href="/"></Link>
          </span>
        </div>
        <div>
          <span>
            <Link href="/"></Link>
          </span>
          <span>
            <Link href="/"></Link>
          </span>
        </div>
      </div>
    </div>
    </div>
 ) 
}

export default Navbar