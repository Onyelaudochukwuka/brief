import { useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react'
import { AnalyticsDashboard, DashBoard } from "../../components"
import { getData } from "../../services";
import moment from 'moment';
type Data = {
  longUrl?:string;
  shortUrl?:string;
  date?:string;
}
const analytics = () => {
  const [data, setData] = useState([]);
  const {data: session } = useSession();
  useEffect(  () => {
    let email = session?.user?.email;
    if (email) {
      getData({ email })
        .then((res) => setData(res));
    }
  }, [session])
  console.log(data);

  return (
    <div className="w-full">
      <AnalyticsDashboard />
      { data.length > 0
        ?
        <div className="flex flex-col gap-4 items-center justify-center w-full lg:mx-auto">
          <div className="flex w-full bg-navBar justify-between px-3 text-light font-bold text-center py-6">
            <span className="basis-1/4">Short Link</span>
            <span className="basis-1/4">Base Link</span>
            <span className="basis-1/4">Date Created</span>
          </div>
          {
            data.map((obj:Data, i:number) => <div key={i} className="flex w-full justify-between bg-neutral/50 text-light font-bold text-center py-6 tracking-wide px-3">
              <span className="basis-1/4 break-all"><a href={obj?.shortUrl}  target={"_blank"} className="text-[#38bdf8] hover:text-[#38bdf8]/40 transition duration-500 ease-in">{ obj?.shortUrl }</a></span>
              <span className="basis-1/4 break-all  ">{ obj?.longUrl }</span>
              <span className="basis-1/4 break-all ">{moment(obj?.date).format('MMM DD, YYYY')}</span>
            </div>)
          }
          
        </div>
        :
        <h1 className="flex justify-center flex-1 items-center my-auto h-full mt-24 font-bold text-xl text-light tracking-widest">No Link Shortened By You</h1>
    }
    </div>
  )
}

export default analytics