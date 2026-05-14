function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">St. Mary's Academy</span>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#faculty">Faculty</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#gallery">Gallery</a></li>
      </ul>

      <button className="navbar-btn">Apply Now</button>
    </nav>
  );
}

export default Navbar;