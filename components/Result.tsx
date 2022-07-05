import { NextComponentType } from "next"
import { ScriptProps } from "next/script"
import React from 'react'
interface properties{
    query?: String;
    result?: String;
}
const Result:NextComponentType = ({query, result}:properties) => {
  return (
      <div className="gap">
          <span>{query}</span>
          <span>{result}</span>
      </div>
  )
}

export default Result