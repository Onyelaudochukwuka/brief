import React, { useState } from 'react'
import { NextComponentType } from 'next';
import { useSession } from "next-auth/react";
type Props = {}
const DashBoard: NextComponentType = ({}: Props) => {
  const { data: session } = useSession();
  const [check, setCheck] = useState(false)
  return (
    <div className="flex p-6 bg-navBar">
      <div className={`w-max bg-${check ? `neutral` : `lightNeutral`} rounded-full h-10 flex items-center justify-center transition duration-500 gap-1 px-1`}>
        <div className={`w-14 h-10 rounded-full bg-dark cursor-pointer transition-[order] duration-300 order-${check ? `1` : `2`}`} onClick={()=>setCheck(!check)}></div>
        <span className="text-lg font-bold transition-all duration-500">{check ? "Default" : "Custom"}</span>
      </div> 
    </div>
  )
}

export default DashBoard;