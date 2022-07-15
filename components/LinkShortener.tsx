import { NextComponentType } from "next"
import React from 'react'

type Props = {}

const LinkShortener:NextComponentType = ({}: Props) => {
  return (
      <div className="flex items-center justify-center mt-12 gap-24">
          <h1 className="text-light text-xl font-bold tracking-widest">Shorten Link</h1>
            
    </div>
  )
}

export default LinkShortener;