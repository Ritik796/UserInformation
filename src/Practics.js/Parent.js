import React, { useCallback, useState } from 'react';
import Child from './Child';
import { useRef } from 'react';

export default function Parent() {
  const myref = useRef(0);
  const [refValue, setRefValue] = useState(myref.current); // State to store myref.current

  const Increment = () => {
    myref.current += 1;
    setRefValue(myref.current); // Update the state when myref.current changes
    console.log(myref.current);
  };

  const [countone, setcountone] = useState(0);
  const [counttwo, setcounttwo] = useState(0);

  const getitem = useCallback(() => {
    console.log(counttwo + 1, counttwo - 1);
    for (let index = 0; index < 1; index++) {
      console.log("getitem");
    }
    return [counttwo + 1, counttwo - 1];
    // eslint-disable-next-line
  }, [counttwo]);

  return (
    <div>
      <button onClick={() => setcountone(countone + 1)}>Count One: {countone}</button>
      <button onClick={() => setcounttwo(counttwo + 1)}>Count Two: {counttwo}</button>
      <Child getitem={getitem} />
      <p>count: {refValue}</p>
      <p>{}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}
