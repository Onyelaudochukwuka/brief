import React, { useState } from 'react'
import { NextComponentType } from 'next';
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { userIcon } from "../public";
import { useRouter } from "next/router";
import Link from "next/link";
type Props = {}
const DashBoard: NextComponentType = ({ }: Props) => {
    const { push } = useRouter();
    const handleSignOut = async () => {
        const data = await signOut({ redirect: false, callbackUrl: "/" });
        push(data.url);
    };
    const [check, setCheck] = useState(false)
    const [drop, setDrop] = useState(false);
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated: () => {
            push('/auth/signIn')
        },
    });
    if (status == 'loading') return <div className="flex items-center justify-center min-h-screen flex-col gap-4"><div className="w-28 h-12 border-l-4 rounded absolute animate-spin border-light"></div><div className="font-black tracking-widest text-center animate-bounce text-light text-4xl shadow">Brief</div></div>; 
    return (
        <div className="flex p-6 bg-navBar justify-between">
            <div className={`w-max ${check ? `bg-neutral` : `bg-lightNeutral`} rounded-full h-10 flex items-center justify-center gap-1 transition ${check && `flex-row-reverse`} duration-500  px-1 py-6`}>
                <div className={`w-14 h-10 rounded-full bg-light cursor-pointer transition-[order] duration-300 `} onClick={() => setCheck(!check)}></div>
                <span className="text-lg font-bold transition-all duration-500">{check ? "Default" : "Custom"}</span>
            </div>
            {session && <div className="cursor-pointer rounded-full" onClick={() => setDrop(!drop)}><Image className="rounded-full" priority src={session?.user?.image ? session?.user?.image : userIcon} width="48px" height={"48px"} /></div>}
            <div className={`absolute flex right-4 flex-col gap-4 ${drop ? `top-24`: `-top-96`} bg-light p-6 transition-all duration-500 ease-in items-center justify-center z-20`}>
            <span className="font-bold cursor-pointer text-dark hover:text-neutral transition duration-500 ease-in"><Link href={"/dashboard/links"}>Links</Link></span>
            <span className="font-bold cursor-pointer text-dark hover:text-neutral transition duration-500 ease-in"><Link href={"/dashboard/analytics"}>Analytics</Link></span>
                <span className="px-6 py-3 text-lg outline-0 focus:outline-0 focus:border-0  rounded-lg font-bold bg-neutral text-light hover:shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73)] tracking-wide hover:bg-dark shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73)]  transition-[box-shadow,background,color] duration-500 ease-in-out cursor-pointer active:scale-90 w-full" onClick={handleSignOut}>SignOut</span>    
            </div>
        </div>
    )
}

export default DashBoard;