import React, { useState } from 'react'
import { shortenLink } from '../services'
const test = () => {
    const [value, setValue] = useState('');
    const submit = async() => {
       await shortenLink({ longUrl: value })
            .then(res => console.log(res))
            .catch((err) => console.error(err))
        console.log("ran")
    }
    return (
        <div>
            <input type={"url"} className="outline-none ring-4 ring-light" value={value} onChange={(e)=>setValue(e.target.value)} />
            <span className="p-4 px-6 bg-neutral text-white cursor-pointer" onClick={submit}>Submit</span>
        </div>
  )
}

export default test