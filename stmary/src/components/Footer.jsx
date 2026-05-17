import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h3 className="footer-logo">St. Mary's Academy</h3>
          <p className="footer-tagline">
            Nurturing excellence through tradition and innovation. Join us in shaping the leaders of tomorrow.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-col-heading">Quick Links</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="footer-col">
          <p className="footer-col-heading">Affiliates</p>
          <a href="#">Global Ed Group</a>
          <a href="#">STEM Council</a>
          <a href="#">ISO Accredited</a>
          <a href="#">Lexend Foundation</a>
        </div>

        <div className="footer-col">
          <p className="footer-col-heading">Contact Us</p>
          <p className="footer-contact-text">123 Academic Way, Education District</p>
          <p className="footer-contact-text">admissions@stmarys.edu</p>
          <p className="footer-contact-text">+1 (555) LEX-ACAD</p>
          <div className='footer-socials'>
            <button className="footer-social-btn">⤨</button>
            <button className="footer-social-btn">🌏︎</button>
            <button className="footer-social-btn">✉</button>
          </div>   
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 St. Mary's Academy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer