import React, { useReducer } from "react";
const intialState = { count:0 };
const reducer = ( state, action) => {
    console.log(state,action);
  switch (action.type) {
    case "INCREMENT":
      return { count:state.count + 1 };
    case "DECREMENT":
      return { count:state.count - 1 };

    default:
      return state;
  }
};
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
      {state.count}
      <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>
    </div>
  );
}
