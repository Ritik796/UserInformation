import React, { useState } from 'react'
import Uselogger from './Uselogger'

const ForUseloggerTest = () => {
    const [name,setname ] = useState("")
    Uselogger(name)
  return (
    <div>
      <input type="text" name="name" id="name" value={name} onChange={(e)=>setname(e.target.value)} />
      
    </div>
  )
}

export default ForUseloggerTest
