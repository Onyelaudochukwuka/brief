import React, { useState } from 'react'
import { NextComponentType } from 'next';
import { useSession } from "next-auth/react";
type Props = {}
const DashBoard: NextComponentType = ({}: Props) => {
  const { data: session } = useSession();
  const [check, setCheck] = useState(false)
  return (
    <div className="flex p-6 bg-navBar">
      <div className="w-16 bg-lightNeutral rounded-full h-6">
<div className="w-3 h-3 rounded-full bg-dark"></div>
      </div> 
    </div>
  )
}

export default DashBoard;