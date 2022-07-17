import React from 'react'

type Props = {}

const Loader = (props: Props) => {
  return (
      <div className="border-2 rounded-full border-light w-8 h-8 border-b-0 border-l-0 animate-spin animate-ping">
    </div>
  )
}

export default Loader