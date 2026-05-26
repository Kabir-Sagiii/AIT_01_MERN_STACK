import { useState } from "react";
import "./State.css";
function Image() {
  var [url, setUrl] = useState(
    "https://ik.imagekit.io/laxaar/1686313855890ReactJS_2400x1200.png",
  );

  const changeToProject = () => {
    setUrl(
      "https://pairroxz.com/blog/wp-content/uploads/2022/12/React-js-project-3.png",
    );
  };

  const changeToReact = () => {
    setUrl("https://ik.imagekit.io/laxaar/1686313855890ReactJS_2400x1200.png");
  };

  return (
    <div className="image-container">
      <img src={url} width={500} height={300} />
      <br />
      <button onClick={changeToReact}>React JS</button>

      <button onClick={changeToProject}>React Project</button>
    </div>
  );
}

export default Image;
