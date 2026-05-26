import { useState } from "react";

function DataRendering() {
  const [state, setState] = useState([
    <span>i am span</span>,
    <p>hello i am para</p>,
    <h3>i am h3</h3>,
  ]);
  return (
    <div style={{ padding: "100px" }}>
      <h1>Different Type Data Renders : {state} </h1>
    </div>
  );
}

export default DataRendering;
