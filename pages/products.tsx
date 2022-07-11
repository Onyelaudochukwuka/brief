import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import '../public/Brief.ico';
import { pointer } from "../public";
const Home: NextPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-light text-center py-12">Custom Link Shortening</h1>
            <div className="linear lg:w-3/4 w-10/12 m-auto lg:p-12 lg:px-24 p-8 px-3 flex lg:flex-row flex-col items-center gap-6">
                
            <input type="text" placeholder="https://brief.dev/E8bCl293" className="basis-3/4 bg-transparent border-b-2 border-b-neutral focus:border-0 focus:border-b-2 focus:ring-0 text-lg text-light mx-auto" />
            </div>
            <div className="w-12 mx-auto"><Image src={pointer} layout="responsive"/></div>
            <div className="linear lg:w-3/4 w-10/12 m-auto lg:p-12 lg:px-24 p-8 px-3 flex items-center">
                <div className="flex w-min items-center text-lg font-bold text-light mx-auto">https://brief.dev/<input type="text" placeholder="E8bCl293" className="bg-transparent border-b-2 border-b-neutral focus:border-0 focus:border-b-2 focus:ring-0 text-lg text-light w-min" /></div>
        </div>
        </div>
    )
}

export default Home;