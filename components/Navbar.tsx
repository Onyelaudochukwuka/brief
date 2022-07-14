import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import { NextComponentType } from "next";
import { brief as logo} from '../public';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar: NextComponentType = () => {
  const [drop, setDrop] = useState(true);
  const { data: session } = useSession();
  const { push, asPath } = useRouter();
  console.log(session);
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    push(data.url);
  };
  return (
    <div className="flex w-full p-6 items-center text-light bg-navBar font-semibold">
      <div className="basis-2/5">
        <div className="w-24 h-fit">
          <Image src={logo} layout="responsive" />
        </div>
      </div>
      <div className={`hidden lg:flex basis-3/5 w-full items-center`}>
        <div className="flex w-full basis-3/5">
          <span className="basis-1/3 hover:text-neutral transition-all duration-500 ease-in-out">
            <Link href="/">Why briefly</Link>
          </span>
          <span className="basis-1/3 hover:text-neutral transition-all duration-500 ease-in-out">
            <Link href="/">Products</Link>
          </span>
          <span className="basis-1/3 hover:text-neutral transition-all duration-500 ease-in-out">
            <Link href="/">Resources</Link>
          </span>
        </div>
        <div className="flex basis-2/5 gap-6 items-center ml-6">
          <span className="bg-neutral py-3 px-6 rounded-full shadow-[0_4px_4px_1px_rgba(4,92,148,0.45)] active:scale-95 hover:bg-[#4097CE] hover:shadow-[0_5px_4px_0px_rgba(64,151,206,0.75)] active:shadow-[0_6px_4px_1px_rgba(64,151,206,0.75)] cursor-pointer transition-all duration-500 ease-in-out" onClick={() => push(`/auth/signIn?callbackUrl=${asPath}dashboard`)}>
            Login
          </span>
        </div>
      </div>
      <span onClick={()=>handleSignOut()}>SignOut</span>
      <div className="lg:hidden float-right ml-auto">
        <div className="w-14 h-1 bg-light rounded-full cursor-pointer
        after:w-14 after:h-1 after:bg-light after:rounded-full after:absolute after:-mt-2.5 after:cursor-pointer
        before:w-14 before:h-1 before:bg-light before:rounded-full before:absolute before:mt-2.5 before:cursor-pointer"></div>
      </div>
    </div>
 ) 
}

export default Navbar