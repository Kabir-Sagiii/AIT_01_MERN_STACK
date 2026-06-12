import { useContext } from "react";
import MyContext from "./context";
import D from "./D";

function C() {
  const data = useContext(MyContext);
  return (
    <div>
      <h1>C Component : {data}</h1>
      <hr />
      <D />
    </div>
  );
}

export default C;
