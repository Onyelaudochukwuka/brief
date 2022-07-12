import React, { useState } from 'react'

const test = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            <input type={"url"} className="outline-none ring-4 ring-light" value={value} onChange={(e)=>setValue(e.target.value)} />
            <span className="p-4 px-6 bg-neutral text-white cursor-pointer" onClick={()=>submit(value)}>Submit</span>
        </div>
  )
}

export default test