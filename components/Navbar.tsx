import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import { NextComponentType } from "next";
import  brief  from './brief.svg';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar: NextComponentType = () => {
  const [drop, setDrop] = useState(false);
  const { data: session } = useSession();
  const { push, asPath } = useRouter();
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    push(data.url);
  };
  return (
    <nav className="flex w-full p-6 justify-between items-center text-light bg-navBar font-semibold sticky top-0 z-50">
      <div className="basis-2/5">
        <div className="w-24 h-fit">
          <Image src={brief} layout="responsive" alt="icon" priority />
        </div>
      </div> 
      <div className={`lg:flex ${drop ? `flex flex-col gap-12 top-24 z-20 w-full bg-dark left-0 py-8` : `-left-[100%]`} lg:py-0 lg:bg-[transparent] lg:top-auto lg:flex-row lg:relative justify-between w-full items-center absolute  transition-all duration-500 ease-in`}>
          <span className=" hover:text-neutral transition-all duration-500 ease-in-out">
            <a href="#features">Products</a>
          </span>
          <span className=" hover:text-neutral transition-all duration-500 ease-in-out">
            <Link href="/features">Resources</Link>
          </span>
        <span className="bg-neutral py-3 px-6 rounded-full shadow-[0_4px_4px_1px_rgba(4,92,148,0.45)] active:scale-95 hover:bg-[#4097CE] hover:shadow-[0_5px_4px_0px_rgba(64,151,206,0.75)] active:shadow-[0_6px_4px_1px_rgba(64,151,206,0.75)] cursor-pointer transition-all duration-500 ease-in-out"
          onClick={() => push(`/auth/signIn`)}
        >
            Login
          </span>
      </div>
      <div className="lg:hidden float-right ml-auto" onClick={()=>setDrop(!drop)}>
        <div className={`w-14 h-1 bg-light rounded-full cursor-pointer transition-all duration-500 ease-in
        after:w-14 after:h-1 after:bg-light after:rounded-full after:absolute after:-mt-2.5 after:cursor-pointer after:transition-all after:duration-500 after:ease-in
        before:w-14 before:h-1 before:bg-light before:rounded-full before:absolute before:mt-2.5 before:cursor-pointer before:transition-all before:duration-500 before:ease-in
        ${ drop ? `bg-transparent after:rotate-45 before:-rotate-45 before:mt-0 after:mt-0` :``  }
        `}></div>
      </div>
    </nav>
 ) 
}

export default Navbar