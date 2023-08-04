import React from "react";
import NoteContext from "./Context";

function ContextState(props) {
  const state = {
    name: "Ritik",
    class: "e7",
  };
  const theme = {
    color: "red",
  };
  return (
    <div>
      <NoteContext.Provider value={{ state: state, theme: theme }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
}

export default ContextState;
