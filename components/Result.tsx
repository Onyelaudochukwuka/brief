import React from 'react'
type properties={
    query?: String;
    result?: String;
}
const Result:React.FC<properties> = ({query, result}) => {
  return (
      <div className="gap">
          <span>{query}</span>
          <span>{result}</span>
      </div>
  )
}

export default Result