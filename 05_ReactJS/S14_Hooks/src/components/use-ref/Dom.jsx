import { useRef } from "react";

function Dom() {
  const h1Ref = useRef(null);
  // h1Ref = {current : null}
  const btnRef = useRef(null);
  const inputRef = useRef(null);

  function modifyUI() {
    h1Ref.current.innerText = inputRef.current.value;
    h1Ref.current.style.color = "orange";

    btnRef.current.innerText = "UI Modified";
    btnRef.current.style.backgroundColor = "black";
  }

  return (
    <div className="map-concept">
      <h1 ref={h1Ref}>This is useRef Concept</h1>
      <input
        ref={inputRef}
        placeholder="username"
        className="form-control w-25 my-3"
      />
      <button ref={btnRef} onClick={modifyUI} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}

export default Dom;
