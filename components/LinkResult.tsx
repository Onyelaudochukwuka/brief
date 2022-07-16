import { NextComponentType } from "next"
import { type } from "os";
import React, { useState } from 'react'

type Props = {
    data?: {
        longUrl?: string;
        shortUrl?: string ;
    };
}

const LinkResult = ({ data }: Props) => {
    const [copied, setCopied] = useState(false);
    console.log(data);
    return (
        <>
            {copied && <p className="text-[#1c783d] p-4 bg-[#99ffbe] text-center my-3 font-black tracking-widest">Copied!</p>}
      <div className="linear w-fit max-w-[83%] p-8 px-6 mt-4 font-bold text-light tracking-widest flex  lg:flex-row flex-col items-center gap-6 text-sm justify-center mx-auto">
                <p className="break-all basis-3/5">{ data?.longUrl }</p>
                <span className="flex lg:flex-row flex-col w-full text-center basis-2/5 items-center justify-center gap-3">
                    <a href={data?.shortUrl} className="text-[#38bdf8] hover:text-[#38bdf8]/40 transition duration-500 ease-in">{data?.shortUrl}</a>
                    <span className="w-full lg:w-fit text-center text-neutral bg-neutral/30 p-3 rounded-md hover:bg-neutral hover:text-light transition duration-500 ease-in cursor-pointer" onClick={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000)
                        return data ? navigator.clipboard.writeText( data?.shortUrl ? data?.shortUrl : "") : false;
                    }} >
                        Copy
                    </span>
                </span>
            </div>
        </>
  )
}

export default LinkResult