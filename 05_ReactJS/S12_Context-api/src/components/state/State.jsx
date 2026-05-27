import { useState } from "react";
import "./State.css";

function State() {
  var [state, setState] = useState("AIT");

  const updateState = () => {
    setState(99);
  };

  return (
    <div className="state-container">
      <h1>State Concept : {state}</h1>
      <button onClick={updateState}>Modify the Count</button>
    </div>
  );
}

export default State;
