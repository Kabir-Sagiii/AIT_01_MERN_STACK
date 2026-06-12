import { useContext } from "react";
import MyContext from "./context";

function D() {
  const info = useContext(MyContext);
  return (
    <div>
      <h1>D Component</h1>
      <br />
      <p className="text-danger">A Component Data : {info}</p>
    </div>
  );
}

export default D;
