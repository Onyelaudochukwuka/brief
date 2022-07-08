import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { NextComponentType } from "next";
import logo from '../public/icons/Brief.svg';
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