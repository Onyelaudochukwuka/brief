import { NextComponentType } from "next"
import { useSession } from "next-auth/react"
import Image from "next/image"
import React, { useEffect, useState } from 'react'
import { link } from "../public"
import { signedInShorten } from "../services"
import Result from "./Result"

type Props = {
    check?: boolean;
}


const LinkShortener = ({ check }: Props) => {
    const { data: session } = useSession();
    const [linkVal, setLinkVal] = useState('');
    const [ext, setExt] = useState('');
    const [displayCustom, setDisplayCustom] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});
    const [showData, setShowData] = useState(false);
    const [load, setLoad] = useState(false)
    useEffect(() => {
        if (check) {
            setShowData(false)
            return setDisplayCustom(false);
        }
    }, [check])
    
  return (
      <div className="flex items-center justify-center mt-12 gap-6 flex-col">
          <h1 className="text-light text-xl font-bold tracking-widest">Shorten Link</h1>
          <form action="#" className="w-full" onSubmit={(e) => {
              e.preventDefault();
              if (!linkVal) return false;
              if (!check) return setDisplayCustom(true);
              setLoad(true);
              return signedInShorten({ longUrl: linkVal, email: session?.user?.email })
                  .then(res => {
                      setShowData(true);
                      return setData(res)
              }).then(()=>setTimeout(() => {
                  setLoad(false);
              }, 1000))
          }} >
          <div className="lg:w-1/2 w-4/5 flex lg:flex-row flex-col items-center justify-center mx-auto mt-8 gap-6">
              <label className="w-full relative block mx-auto">
                  <span className="absolute inset-y-0 left-2 flex items-center pl-2 justify-center">
                      <Image src={link} height="48" width="48" alt="link" />
                  </span>
                  <input type="url" className="block transition-all duration-500 ease-in bg-[transparent] w-full py-4 pl-20 pr-3 shadow-sm outline-none ring-2 focus:ring-neutral ring-dark ring-offset-dark ring-offset-1 focus:ring-offset-neutral/30 h-[auto] align-middle my-auto rounded-md text-light placeholder:text-light placeholder:text-lg text-lg placeholder:font-bold font-bold placeholder:align-middle placeholder:my-auto" placeholder="Enter Link Here" value={linkVal} onChange={(e)=>setLinkVal(e.target.value)} />
              </label>

                  <button className="p-4 font-semibold rounded  bg-neutral text-light lg:w-fit w-full hover:shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73),_3px_3px_2px_rgba(4,92,148,0.288)] tracking-wide hover:bg-dark shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73),_3px_3px_2px_rgba(2,49,77,0.288)]  transition-[box-shadow,background,color] duration-500 ease-in-out cursor-pointer active:scale-90" type="submit" disabled={check ? load ? true : false : false}>{check ?  load ? <div className = "w-2 h-2 animate-bounce bg-light mx-6 my-3"></div> : "Shorten" : "Continue"}</button>
              </div>
          </form>

       
              { displayCustom && <form action="#" className="w-full" onSubmit={(e) => {
              e.preventDefault();
              setLoad(true);
              let obj = {
                  longUrl: linkVal,
                  email: session?.user?.email,
                  customExt: ext,
              };
              signedInShorten(obj)
                  .then((res) => {
                      if (res.error) {
                          setTimeout(()=>setError(false),5000)
                          return setError(true)
                      };
                      setShowData(true);
                      setLoad(false);
                      return setData(res)
                  })
                  .catch((err) => console.error(err));
              }} >
              <div className="lg:w-1/2 w-4/5 flex lg:flex-row flex-col items-center justify-center mx-auto mt-8 gap-6">
                  <div className="transition-all overflow-scroll duration-500 ease-in bg-[transparent] w-full py-4 pl-20 pr-3 shadow-sm outline-none ring-2 focus:ring-neutral ring-dark ring-offset-dark ring-offset-1 focus:ring-offset-neutral/30 h-[auto] align-middle my-auto rounded-md text-light placeholder:text-light placeholder:text-lg text-lg placeholder:font-bold font-bold flex items-center justify-center box-border">
                      <label htmlFor="custom">https://briefy.netlify.app/api/</label>
                      <input type={"text"} value={ext} onChange={(e)=>setExt(e.target.value)} id="custom" className="bg-[transparent] outline-none border-b-2 focus:border-neutral border-dark h-[auto] align-middle my-auto rounded-sm text-light placeholder:text-light/50 placeholder:text-lg text-lg placeholder:font-bold font-bold w-auto" placeholder="Extension" /></div>

                  <button type="submit" className="px-6 py-3 text-lg outline-0 focus:outline-0 focus:border-0  rounded-lg font-bold bg-neutral text-light hover:shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73),_3px_3px_2px_rgba(4,92,148,0.288)] tracking-wide hover:bg-dark shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73),_3px_3px_2px_rgba(2,49,77,0.288)]  transition-[box-shadow,background,color] duration-500 ease-in-out cursor-pointer active:scale-90 lg:w-fit w-full" disabled={load ? true : false}>{load ? <div className="w-2 h-2 animate-bounce bg-light mx-auto my-3"></div> : "Shorten"}</button>
              </div>
              </form>
          }
          {error && <p className="text-[#dc2626] bg-[#f87171] py-4 font-bold tracking-widest w-full text-center">Link with Extension already exists please pick another Extension</p>}
          {showData && <Result data={data} />}
    </div>
  )
}

export default LinkShortener;
