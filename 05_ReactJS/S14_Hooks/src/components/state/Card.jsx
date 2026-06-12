import { useState } from "react";
import "./State.css";
function Card() {
  var [name, setName] = useState("Rohan Verma");
  var [image, setImage] = useState(
    "https://tse4.mm.bing.net/th/id/OIP.rvENuAXT1m0TxNHz4q3YbAHaO0?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
  );
  var [bio, setBio] =
    useState(`Driven, compassionate, ambitious man who values integrity, growth, humor.
`);

  function changeToFemale() {
    setName("Riya Sharma");
    setImage(
      "https://tse3.mm.bing.net/th/id/OIP.2unRrpS1qCHlLpar1C2guAHaH0?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
    );
    setBio(
      `Confident, compassionate, ambitious woman embracing kindness, growth, elegance, resilience,`,
    );
  }

  function changeToMale() {
    setName("Rohan Verma");
    setImage(
      "https://tse4.mm.bing.net/th/id/OIP.rvENuAXT1m0TxNHz4q3YbAHaO0?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
    );
    setBio(
      `Driven, compassionate, ambitious man who values integrity, growth, humor`,
    );
  }

  return (
    <div className="user-card">
      <img src={image} width={"100%"} height={200} alt="" />
      <h3>{name}</h3>
      <p>{bio}</p>
      <button onClick={changeToMale}>Male</button>
      <button onClick={changeToFemale}>Female</button>
    </div>
  );
}

export default Card;
