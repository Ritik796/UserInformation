import React, { useRef } from 'react';
import Childone from './Childone'

export default function Parrentone() {
    const ref = useRef()
    const children = () => ref.current.Increment()

    return (
        <div>
            <Childone ref={ref} />
            <button onClick={children}>ParentOne</button>
        </div>
    )
}
