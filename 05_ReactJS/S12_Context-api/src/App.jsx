import "./App.css";
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
function App() {
  return (
    <div>
      {/* <Header />
      <hr /> */}
      {/* <Products /> */}
      <A />
    </div>
  );
}

export default App;
