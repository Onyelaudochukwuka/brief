import React from 'react'
type properties={
    query?: String;
    result?: String;
}
const Result:React.FC<properties> = ({query, result}) => {
  return (
      <div className="flex gap-6 w-3/4 mx-auto">
          <div className="basis-1/2">
              <span>{query}</span>
          </div>
          <div className="basis-1/2 flex">
              <span className="basis-1/2">{result}</span>
              <span className="w-fit p-3 px-5 bg-primaryCol hover:bg-primaryDark transition duration-300 ease-in">Copy</span>
          </div>
      </div>
  )
}

export default Result