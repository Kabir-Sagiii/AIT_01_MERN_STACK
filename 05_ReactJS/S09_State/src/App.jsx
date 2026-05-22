import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import State from "./components/state/State.jsx";
import Image from "./components/state/Image.jsx";
import Card from "./components/state/Card.jsx";
import CardContainer from "./components/card-container/CardContainer.jsx";

function App() {
  return (
    <div>
      <Header />
      <State />
      <Image />
      <Card />
      {/* <Home />
      <CardContainer />
      <Footer /> */}
    </div>
  );
}

export default App;
