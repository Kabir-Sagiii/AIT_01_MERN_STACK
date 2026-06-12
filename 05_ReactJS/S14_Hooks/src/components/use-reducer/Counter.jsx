import { useReducer } from "react";

function myReducer(state, action) {
  //Logic to update State Value
  if (action.type === "inc") {
    state = state + 1;
  } else if (action.type === "dec") {
    state = state - 1;
  }

  return state;
}

function Counter() {
  var [state, dispatch] = useReducer(myReducer, 0);
  return (
    <div className="map-concept">
      <h1>Count Value is : {state}</h1>
      <button
        className="btn btn-primary my-3"
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        incCount
      </button>

      <button
        className="btn btn-danger mx-2 my-3"
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        decCount
      </button>
    </div>
  );
}

export default Counter;
