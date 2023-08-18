import React, { useDeferredValue, useEffect, useState } from "react";
export default function DataFetchingComponent() {
  const [data, setdata] = useState(null);
  const defferedData = useDeferredValue(data);
  let value1 = "https://openexchangerates.org/api/currencies.json"
  let value2 = " https://jsonplaceholder.typicode.com/todos/"
  useEffect(() => {
    fetch(value1).then((response)=>response.json()).then((data)=>setdata(data))
    setTimeout(() => {
        fetch(value2).then((response)=>response.json()).then((data)=>setdata(data))
    },5000);
  
  }, [value1, value2]);
  return (
    <div>
      <h1>DataFetchingComponent</h1>
      <p>
        {defferedData && <pre> {JSON.stringify(defferedData, null, 2)} </pre>}
      </p>
    </div>
  );
}
// In this try to Explain usedeffered value hook in react js
// https://openexchangerates.org/api/currencies.json
// https://v6.exchangerate-api.com/v6/c997b3c9f30fdbe821554d58/latest/USD
// https://jsonplaceholder.typicode.com/todos/
