import React, { useState } from 'react'
import { AnalyticsDashboard, DashBoard } from "../../components"

const analytics = () => {
  const [data, setData] = useState(["g"]);
  console.log(![])
  return (
    <div>
      <AnalyticsDashboard />
      {data.length > 0
        ?
        <div className="flex flex-col gap-4 items-center justify-center p-8 w-10/12 mx-auto">
          <div className="flex w-full bg-navBar justify-between text-light font-bold text-center py-6">
            <span className="basis-1/4">Short Link</span>
            <span className="basis-1/4">Base Link</span>
            <span className="basis-1/4">Date Created</span>
            <span className="basis-1/4">Link Clicks</span>
          </div>
          <div className="flex w-full justify-between bg-neutral/50 text-light font-bold text-center py-6 tracking-wide">
            <span className="basis-1/4">https://brief.dev/api/linky</span>
            <span className="basis-1/4">https://google.com</span>
            <span className="basis-1/4">09/07/2022</span>
            <span className="basis-1/4">13</span>
          </div>
        </div>
        :
        <h1 className="flex justify-center flex-1 items-center my-auto h-full mt-24 font-bold text-xl text-light">No Link Shortened</h1>
    }
    </div>
  )
}

export default analytics