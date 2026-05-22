import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import CardContainer from "./components/card-container/CardContainer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
