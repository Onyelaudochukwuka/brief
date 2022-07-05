import React from 'react'
type properties={
    query?: String;
    result?: String;
}
const Result:React.FC<properties> = ({query, result}) => {
  return (
      <div className="flex gap-6 w-3/4 mx-auto p-2 py-4 bg-white align-middle items-center rounded-md">
          <div className="basis-1/2 pl-4">
              <span>{query}</span>
          </div>
          <div className="flex gap-6 float-right ml-auto">
              <span className="basis-1/2 my-auto align-middle text-primaryCol font-bold trac">{result}</span>
              <span className="w-fit p-1.5 px-5 bg-primaryCol hover:bg-primaryDark transition duration-300 ease-in cursor-pointer text-white rounded-lg">Copy</span>
          </div>
      </div>
  )
}

export default Result