
import React, { useEffect, useLayoutEffect, useRef } from 'react'

function Test() {
    const ref = useRef()
    ref.current="red"
    console.log(ref);
    useEffect(()=>{
        ref.current="yellow"
        console.log(ref,"useeffect");
       
    })
    useLayoutEffect(()=>{
        console.log(ref,"uselayouteffect");
       
    })
  return (
    <div>
      
    </div>
  )
}

export default Test
