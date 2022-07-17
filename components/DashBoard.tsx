import React, { useEffect, useState } from 'react'
import { NextComponentType } from 'next';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { userIcon } from "../public";
import LinkShortener from "./LinkShortener";
import { useRouter } from "next/router";
type Props = {}
const DashBoard: NextComponentType = ({ }: Props) => {
  const { push } = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push('/auth/signIn')
    },
  });
  const [pulse, setPulse] = useState(true)
  useEffect(() => {
  setTimeout(()=>setPulse(false),2500)
  }, [])
  
  const [check, setCheck] = useState(false);
  if (status == 'loading') return <div className="flex items-center justify-center min-h-screen flex-col gap-4"><div className="w-28 h-12 border-l-4 rounded absolute animate-spin border-light"></div><div className="font-black tracking-widest text-center animate-bounce text-light text-4xl shadow">Brief</div></div>; 
  return (
  <>
    <div className="flex p-6 bg-navBar justify-between">
      <div className={`w-max ${check ? `bg-neutral` : `bg-lightNeutral`} rounded-full h-10 flex items-center justify-center gap-1 transition ${check && `flex-row-reverse`} duration-500  px-1 py-6`}>
        <div className={`w-14 h-10 rounded-full bg-light cursor-pointer transition-[order] duration-300 ${pulse && `animate-pulse`}`} onClick={()=>setCheck(!check)}></div>
        <span className="text-lg font-bold transition-all duration-500">{check ? "Default" : "Custom"}</span>
      </div> 
        {session && <div className="cursor-pointer rounded-full"><Image className="rounded-full" priority src={session?.user?.image ? session?.user?.image : userIcon} width="48px" height={"48px"} /></div>}
      </div>
      <LinkShortener check={check ? true : false} />
  </>
  )
}

export default DashBoard;