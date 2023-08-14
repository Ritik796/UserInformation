import  { useDebugValue, useEffect } from "react";

const Uselogger = (value) => {
  useDebugValue(value)
  useEffect(() => {console.log(value)}, [value]);
};
export default Uselogger;
