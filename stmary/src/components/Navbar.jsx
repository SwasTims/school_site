import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="St. Mary's Academy" className="navbar-logo-img" />
        St. Mary's Academy
      </Link>

      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/faculty" className={location.pathname === '/faculty' ? 'active' : ''}>Faculty</Link></li>
        <li><Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link></li>
        <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
      </ul>

      <Link to="/admission" className="navbar-btn">Apply Now</Link>
    </nav>
  )
}

export default Navbar