import React from 'react'
type properties={
    query?: String;
    result?: String;
}
const Result:React.FC<properties> = ({query, result}) => {
  return (
      <div className="flex gap">
          <span>{query}</span>
          <span>
              <span>{result}</span>
              <span></span>
          </span>
      </div>
  )
}

export default Result