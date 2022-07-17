import React, { useState } from 'react'
import { NextComponentType } from 'next';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { userIcon } from "../public";
import { useRouter } from "next/router";
type Props = {}
const DashBoard: NextComponentType = ({ }: Props) => {
    const { push } = useRouter();
    
    const { data: session } = useSession({
        required: true,
        onUnauthenticated: () => {
            push('/auth/signIn')
        },
    });
    const [check, setCheck] = useState(false)

    return (
        <div className="flex p-6 bg-navBar justify-between">
            <div className={`w-max ${check ? `bg-neutral` : `bg-lightNeutral`} rounded-full h-10 flex items-center justify-center gap-1 transition ${check && `flex-row-reverse`} duration-500  px-1 py-6`}>
                <div className={`w-14 h-10 rounded-full bg-light cursor-pointer transition-[order] duration-300 `} onClick={() => setCheck(!check)}></div>
                <span className="text-lg font-bold transition-all duration-500">{check ? "Default" : "Custom"}</span>
            </div>
            {session && <div className="cursor-pointer rounded-full"><Image className="rounded-full" priority src={session?.user?.image ? session?.user?.image : userIcon} width="48px" height={"48px"} /></div>}
        </div>
    )
}

export default DashBoard;