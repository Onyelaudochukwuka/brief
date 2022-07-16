import { NextComponentType } from "next"
import React from 'react'

type Props = {
    data?: string;
}

const LinkResult = ({data}: Props) => {
  return (
      <div className="linear lg:w-3/4 w-10/12 m-auto p-8 px-3 flex lg:flex-row flex-col items-center gap-6" onClick={() => navigator.clipboard.writeText("ffgg")}>
          LinkResult
      </div>
  )
}

export default LinkResult