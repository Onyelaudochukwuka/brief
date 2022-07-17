import { NextComponentType } from "next";
import React, { useState } from 'react'
import { shortenLink } from '../services';
import Result from "./Result";
const Shorten:NextComponentType = () => {
  const [longUrl, setLongUrl] = useState('');
  const [data, setData] = useState({});
  const [showData, setShowData] = useState(false);
  const [load, setLoad] = useState(false)
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!setLongUrl) return false;
        setLoad(true);
        shortenLink({ longUrl })
          .then((res) => setData(res))
          .then(() => setShowData(true))
          .then(() => setInterval(()=>setLoad(false),1000))
          .catch((err) => console.log(err));
          ;
      }}
        className="linear lg:w-3/4 w-10/12 m-auto lg:p-12 lg:px-24 p-8 px-3 flex lg:flex-row flex-col items-center gap-6">
        <input value={longUrl} onChange={(e) => setLongUrl(e.target.value)} type="url" placeholder="https://brief.dev/E8bCl293" className="basis-3/4 bg-transparent border-b-2 border-b-neutral focus:border-0 focus:border-b-2 focus:ring-0 text-lg text-light"/>
        <button type="submit" className="px-6 py-3 text-lg outline-0 focus:outline-0 focus:border-0  rounded-lg font-bold bg-neutral text-light w-fit hover:shadow-[3px_4px_2px_rgba(4,92,148,0.25),_0px_4px_2px_rgba(4,92,148,0.25),_4px_4px_2px_rgba(4,92,148,0.73),_3px_3px_2px_rgba(4,92,148,0.288)] tracking-wide hover:bg-dark shadow-[3px_4px_2px_rgba(2,49,77,0.25),_0px_4px_2px_rgba(2,49,77,0.25),_4px_4px_2px_rgba(2,49,77,0.73),_3px_3px_2px_rgba(2,49,77,0.288)]  transition-[box-shadow,background,color] duration-500 ease-in-out cursor-pointer active:scale-90">{load ? <div className="w-2 h-2 animate-bounce bg-light mx-6 my-3"></div> : "Shorten"}</button>
      </form>
      {showData && <Result data={data} />}
    </>
  )
}

export default Shorten;