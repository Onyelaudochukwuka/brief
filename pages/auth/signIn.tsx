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
  const [message, setMessage] = useState(false);
  if (status == 'loading') return <div className="flex items-center justify-center min-h-screen flex-col gap-4"><div className="w-28 h-12 border-l-4 rounded absolute animate-spin border-light"></div><div className="font-black tracking-widest text-center animate-bounce text-light text-4xl shadow">Brief</div></div>; 
  if (session) {
    setTimeout(() => {
      push('/dashboard/links')
    }, 5000);
    return <div className="flex items-center justify-center min-h-screen flex-col gap-4"><div className="w-28 h-12 border-l-4 rounded absolute animate-spin border-light"></div><div className="font-black tracking-widest text-center animate-bounce text-light text-4xl shadow">Brief</div></div>; 
  }
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4 bg-neutral">
      <div className="bg-light p-12 w-3/4 flex flex-col items-center justify-center text-darkPrimary font-bold gap-10">
    <div className="flex flex-col gap-3 w-5/12">
          {data.map((data) => <div key={data.provider} onClick={() => SignIn(data.provider)} className="p-3 px-6 pr-16 bg-light hover:bg-neutral/30 rounded-sm transition duration-500 ease-in cursor-pointer capitalize flex gap-8 border-2 border-neutral w-full items-center justify-center text-sm lg:text-sm active:scale-95"><div className="w-8 h-8 block"><Image src={data.icon} layout="responsive" /></div><span className="basis-4/5 w-max break-normal">Sign In With {data.provider}</span></div>)}
    </div>
        <span className="flex text-dark w-3/6 gap-3"><div className="w-full h-1 rounded-full bg-dark my-auto align-middle"></div> OR <div className="w-full h-1 rounded-full bg-dark my-auto align-middle"></div></span>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (!email) return false;
          return SignIn('email', { email, redirect: false }).then(() => setMessage(true));
        }} className="flex flex-col w-5/12 gap-6">
          <input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none p-4 pl-6 ring-neutral rounded-sm text-neutral ring-2 focus:ring-dark placeholder:text-neutral w-full" placeholder="Email" />
          {message && <p className="text-center text-sm text-lightNeutral">Check your Inbox/Spam folder for a Login Link</p>}
          <button type={"submit"} className="w-full p-4 text-center font-bold text-lg bg-neutral hover:text-light/80 text-light rounded-md hover:bg-dark cursor-pointer transition-[box-shadow,background,color,transform] duration-500 ease-in-out hover:shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73),_3px_3px_2px_rgba(4,92,148,0.288)] tracking-wide shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73),_3px_3px_2px_rgba(2,49,77,0.288)] active:scale-95"> LogIn </button>
        </form>
      </div>
    </div>
  )
}

export default signIn