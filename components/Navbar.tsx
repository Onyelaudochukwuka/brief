import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { NextComponentType } from "next"
const Navbar: NextComponentType = () => {
  const [drop, setDrop] = useState(true);
  useEffect(() => {
    console.log(drop);
  },[drop])
  return (
    <div className="flex flex-row gap-12 p-6 items-center font-bold text-base">
          <span className="font-bold text-3xl">Shortly</span>
          <div className={`${!drop ?`hidden` : `flex absolute top-20 flex-col z-20 bg-primaryDark rounded-xl p-4 items-center gap-10 w-10/12 self-center py-12 mx-2 text-white`} lg:flex lg:relative w-3/4 float-right lg:ml-auto items-center lg:text-neutralGrayish lg:bg-trana`} tabIndex={0}>
          <div className="flex lg:flex-row flex-col gap-10 float-left mr-auto grow text-center w-full lg:w-fit">
              <span className="hover:text-neutralViolet cursor-pointer">Features</span>
              <span className="hover:text-neutralViolet cursor-pointer">Pricing</span>
              <span className="hover:text-neutralViolet cursor-pointer">Resources</span>
        </div>
        <div className="w-full h-[0.09px] bg-neutralGray lg:hidden"></div>
          <div className="flex gap-8 lg:mr-5 lg:flex-row flex-col items-center w-full lg:w-fit text-center lg:text-left">
              <Link href="login"><span className="hover:text-neutralViolet cursor-pointer">Login</span></Link>
          <Link href="login"><span className="lg:px-5 lg:py-2 px-6 py-3 bg-primaryCol rounded-full text-white hover:bg-primaryCol/75 cursor-pointer w-full lg:w-fit">Sign Up</span></Link>
          </div>
      </div>
    
      <div className="float-right ml-auto cursor-pointer">
      <div className="w-10 h-1 bg-neutralDark rounded-full
      after:content-[''] after:w-10 after:h-1 after:bg-neutralDark after:absolute after:-mt-2.5 after:rounded-full
      before:content-[''] before:w-10 before:h-1 before:bg-neutralDark before:absolute before:mt-2.5 before:rounded-full
      "
          tabIndex={12} onClick={() => setDrop((drop) => !drop)}
        // onBlur={() => setDrop(false)}
        ></div>
    </div>
    </div>
  )
}

export default Navbar