import React, { useCallback, useState } from 'react';
import Child from './Child';
import { useRef } from 'react';

export default function Parent() {
  const myref = useRef(0);
  const valueref = useRef(0);
  const [value,setvalue]=useState(valueref.current)
  const [refValue, setRefValue] = useState(myref.current); // State to store myref.current
  const valueIncrease = ()=>{
    valueref.current+=1
    console.log(valueref,"valueIncrease");
    setvalue(valueref.current)
  }

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
      <p></p>
      <button onClick={Increment}>Increment</button>

      <hr />
      <p   ></p>
      <span style={{color:valueref.current>=30?"green":valueref.current>=20?"blue":valueref.current>=10?"red":"black"}} hidden={valueref.current>=40}>{value}</span>
      <button onClick={valueIncrease}>Valuerefcount</button>

    </div>
  );
}
