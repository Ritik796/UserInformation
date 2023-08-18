import React, {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useRef,
} from "react";

function Test() {
  const ref = useRef();
  ref.current = "red";
  console.log(ref);
  useEffect(() => {
    ref.current = "yellow";
    console.log(ref, "useeffect");
  });
  useLayoutEffect(() => {
    console.log(ref, "uselayouteffect");
  },[]);
  useInsertionEffect(() => {
    console.log(ref, "useinsertioneffect");
  });
  return <div></div>;
}

export default Test;
