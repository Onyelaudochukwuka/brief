import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import '../public/Brief.ico';
import { Cta, Features, Hero, Shorten } from "../components";
const Home: NextPage = () => {
    return (
        <div className="linear lg:w-3/4 w-10/12 m-auto lg:p-12 lg:px-24 p-8 px-3 flex lg:flex-row flex-col items-center gap-6">
            <input type="text" placeholder="https://brief.dev/E8bCl293" className="basis-3/4 bg-transparent border-b-2 border-b-neutral focus:border-0 focus:border-b-2 focus:ring-0 text-lg text-light mx-auto" />
        </div>
    )
}

export default Home;