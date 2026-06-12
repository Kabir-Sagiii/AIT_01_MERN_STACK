import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import State from "./components/state/State.jsx";
import Image from "./components/state/Image.jsx";
import Card from "./components/state/Card.jsx";
import CardContainer from "./components/card-container/CardContainer.jsx";
import DataRendering from "./components/data-rendering/DataRendering.jsx";
import Map from "./components/data-rendering/Map.jsx";
// import Products from "./components/data-rendering/Products.jsx";
import Products from "./components/axios/Products.jsx";
import A from "./components/context-api/A.jsx";
import Container from "./components/container/Container.jsx";
import LoginContext from "./components/context-api/loginContext.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Header logout={logout} /> <hr />
        </div>
      ) : null}

      <LoginContext value={login}>
        <Container isLoggedIn={isLoggedIn} />
      </LoginContext>
    </div>
  );
}

export default App;
