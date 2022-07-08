import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { NextComponentType } from "next";
import logo from '*.svg';
console.log(logo);
const Navbar: NextComponentType = () => {
  const [drop, setDrop] = useState(true);
  useEffect(() => {
    console.log(drop);
  },[drop])
  return (
    <div>
      
    </div>
 ) 
}

export default Navbar