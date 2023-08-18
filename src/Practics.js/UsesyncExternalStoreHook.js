import React from 'react'
import { useSyncExternalStore } from 'react'

export default function UsesyncExternalStoreHook() {
    const Subscribe = (listener) =>{
        window.addEventListener("resize",listener)
        return () => window.removeEventListener("resize",listener)
    }
    const getsnapshot = () => window.innerWidth
    const width = useSyncExternalStore(Subscribe,getsnapshot)
   
  return (
    <div>
      <p> Size: {width} </p>
    </div>
  )
}
