import React,{useImperativeHandle,forwardRef,useState} from "react";

const Childone = forwardRef((props,ref) => {
  const [count, setcount] = useState(0);
  useImperativeHandle(ref, () => ({
    Increment: ()=>{
        setcount((precount)=>precount + 1)
    }
  }));
  function increase() {
    setcount((precount)=>precount + 1)
  }
  
  return (
    <div>
      {count} <br />
      <button onClick={increase}>ChildOne</button>
    </div>
  );
});

export default Childone;
