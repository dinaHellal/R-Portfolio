
function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/">R</a>
          </div>
          <div>
            <label htmlFor="toggle" className="toggle">
              <img src="/menu.webp" alt="toggle icon" />
            </label>
            <input type="checkbox" id="toggle" />

            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Blog">Blog</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
