import { useState } from "react";
import B from "./B";
import MyContext from "./context";

function A() {
  const [data, setData] = useState("");
  const [text, setText] = useState("Kabir");

  const getData = () => {
    setData(text);
  };
  return (
    <div className="p-3">
      <h1>A Component</h1>
      <br />
      <input
        value={text}
        onChange={() => {
          setText(event.target.value);
        }}
        placeholder="enter name"
        className="form-control w-25 mb-2"
      />
      <button className="btn btn-primary" onClick={getData}>
        Submit
      </button>
      <hr />
      <MyContext value={data}>
        <B />
      </MyContext>
    </div>
  );
}

export default A;
