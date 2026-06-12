import "./Header.css";
import Footer from "../footer/Footer.jsx";
function Header({ logout }) {
  return (
    <div id="nav">
      <div>
        <h1>BetterWorkTeam</h1>
      </div>
      <div>
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Products</a>
        <a href="">Contactus</a>
        <a href="">Cart</a>
        <button onClick={logout}> Logout </button>
      </div>
    </div>
  );
}

export default Header;
