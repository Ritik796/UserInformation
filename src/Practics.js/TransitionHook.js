import React, { useState, useTransition } from "react";

export default function TransitionHook() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("Hello Geek");
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setIsVisible(!isVisible);
    startTransition(() => {
      // Any code that should be executed in the transition
      // (e.g., setting state or performing other side effects)
     setTimeout(() => {
         setText("Hello Ritik");
     }, 5000);
    });
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn" onClick={handleClick}>
          Toggle Visibility
        </button>
        <button
          className="btn"
          onClick={() => setText("Welcome to geeksforgeeks")}
        >
          Change Text
        </button>
      </div>

      <div style={isPending ? { color:"red" } : { opacity: isVisible ? 1 : ""}}>
        <h1>{text}</h1>
      </div>
    </div>
  );
}
