import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { NextComponentType } from "next"
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