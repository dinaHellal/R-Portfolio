
function Navbar() {
  return (
    <header className="relative p-15 scroll-smooth" id="Home">
      <div className="navbar bg-gray-950 ">
        <div className="container p-10 m-auto flex justify-between items-center flex-wrap text-white">
          <div className="logo text-3xl">
            <a href="/">R</a>
          </div>
          <div>
            <label htmlFor="toggle" className="toggle lg:hidden md:block absolute right-10 top-12">
              <img src="/menu.webp" alt="toggle icon" />
            </label>
            <input type="checkbox" id="toggle" className="hidden" />

            <ul className="  lg:flex gap-20 ">
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