import { lazy } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Products from "./pages/Products";
import Contactus from "./pages/Contactus";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const Profile = lazy(() => {
  return import("./pages/Profile");
});

const Products = lazy(() => {
  return import("./pages/Products");
});

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/contact"} element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
