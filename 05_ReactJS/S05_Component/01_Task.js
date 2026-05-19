import Nav from "./Nav.js";

function Main() {
  return (
    <div className="main">
      <h1>Explore, The Site for More Information</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        facilis eligendi, dolorum repellat iste ea deserunt magnam veritatis,
        exercitationem tempora incidunt aliquam ut libero fugit excepturi
        aspernatur ipsa earum blanditiis odio nesciunt necessitatibus! Numquam,
        quisquam, officia quo distinctio
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2 className="logo">NovaTech</h2>
          <p>
            Building modern digital experiences with clean design, performance,
            and innovation.
          </p>

          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
            </li>
            <li>
              <a href="#">SEO Optimization</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get latest updates and news.</p>

          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 NovaTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
