import React, { useState } from 'react'
import { useSession, signIn as SignIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { githubProvider, twitterProvider, googleProvider } from "../../public";
import Image, { StaticImageData } from "next/image";
type dataInt = {
  provider: string;
  icon: StaticImageData;
  }
const data:dataInt[] = [{
  provider: "github",
  icon: githubProvider
}, {
  provider: "twitter",
  icon: twitterProvider
  }, {
  provider: "google",
  icon: googleProvider
}
]
const signIn = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState('');
  if (status == 'loading') return <div className="text-xl font-bold text-center">Checking authentication</div>;
  if (session) {
    setTimeout(() => {
      push('/dashboard/links')
    }, 5000);
    return <div className="flex items-center justify-center min-h-screen flex-col gap-4"><div className="text-xl font-bold text-center">You're Already signed in</div></div>; 
  }
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4 bg-neutral">
      <div className="bg-light p-12 w-3/4 flex flex-col items-center justify-center text-darkPrimary font-bold gap-10">
      {/* <form action="#" onSubmit={(e) => {
        e.preventDefault();
        if (!email) return false;
        return SignIn('email', {email, redirect: false})
      }} className="flex gap-2 flex-col justify-start">
        <label htmlFor="email">Email Address</label>
        <input type={"email"} id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
        <button type={"submit"} className="py-2 px-4 w-full rounded-lg bg-gray-100 hover:bg-gray-300 transition duration-500 ease-in cursor-pointer">Login</button>
      </form> */}
    <div className="flex flex-col gap-3 w-5/12">
          {data.map((data) => <div key={data.provider} onClick={() => SignIn(data.provider)} className="p-3 px-6 pr-16 bg-light hover:bg-neutral/30 rounded-sm transition duration-500 ease-in cursor-pointer capitalize flex gap-8 border-2 border-neutral w-full items-center justify-center text-sm lg:text-sm active:scale-95"><div className="w-8 h-8 block"><Image src={data.icon} layout="responsive" /></div><span className="basis-4/5 w-max break-normal">Sign In With {data.provider}</span></div>)}
    </div>
        <span className="flex text-dark w-3/6 gap-3"><div className="w-full h-1 rounded-full bg-dark my-auto align-middle"></div> OR <div className="w-full h-1 rounded-full bg-dark my-auto align-middle"></div></span>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (!email) return false;
          return SignIn('email', { email, redirect: false })
        }} className="flex flex-col w-5/12 gap-6">
          <input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none p-4 pl-6 ring-neutral rounded-sm text-neutral ring-2 focus:ring-dark placeholder:text-neutral w-full" placeholder="Email" />
          <button type={"submit"} className="w-full p-4 text-center font-bold text-lg bg-neutral hover:text-light/80 text-light rounded-md hover:bg-dark cursor-pointer transition-[box-shadow,background,color,transform] duration-500 ease-in-out hover:shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73),_3px_3px_2px_rgba(4,92,148,0.288)] tracking-wide shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73),_3px_3px_2px_rgba(2,49,77,0.288)] active:scale-95"> LogIn </button>
        </form>
      </div>
    </div>
  )
}

export default signIn