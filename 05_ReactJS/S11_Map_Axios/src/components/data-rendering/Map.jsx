import { useState } from "react";

function Map() {
  const [state, setState] = useState([
    "Rohan",
    "Sid",
    "Kapil",
    "Verma",
    "Sunny",
    "Rakesh",
    "Sneha",
    "Riya",
    "Sowmya",
    //... 100 names
  ]);
  return (
    <div className="map-concept">
      <h1>List </h1>
      <ol>
        {state.map(function (element, index) {
          return (
            <li>{element}</li> // [<li>Rohan</li>,<li>Sid</li>]
          );
        })}
      </ol>
    </div>
  );
}

export default Map;
