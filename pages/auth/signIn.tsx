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
      push('/')
    }, 5000);
    return <div className="flex items-center justify-center min-h-screen flex-col gap-4"><div className="text-xl font-bold text-center">You're Already signed in</div></div>; 
  }
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4">
      <form action="#" onSubmit={(e) => {
        e.preventDefault();
        if (!email) return false;
        return SignIn('email', {email, redirect: false})
      }} className="flex gap-2 flex-col justify-start">
        <label htmlFor="email">Email Address</label>
        <input type={"email"} id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
        <button type={"submit"} className="py-2 px-4 w-full rounded-lg bg-gray-100 hover:bg-gray-300 transition duration-500 ease-in cursor-pointer">Login</button>
      </form>
    <div className="flex flex-col gap-3">
        {data.map((data) => <div key={data.provider} onClick={() => SignIn(data.provider)} className="p-3 px-6 bg-gray-100 hover:bg-gray-300 rounded-sm transition duration-500 ease-in cursor-pointer capitalize"><span className="w-8 h-8"><Image src={data.icon} className="responsive" /></span><span>Sign In With {data.provider}</span></div>)}
    </div>
    </div>
  )
}

export default signIn;