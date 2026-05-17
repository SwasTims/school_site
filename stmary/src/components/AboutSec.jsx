import { Link } from 'react-router-dom'

function AboutSec() {
  return (
    <section className="aboutsec" id="aboutsec">

      <div className="aboutsec-image">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=500" alt="School building" />
        <div className="aboutsec-badge">
          <span className="aboutsec-badge-number">50+</span>
          <span className="aboutsec-badge-text">YEARS OF TRADITION</span>
        </div>
      </div>

      <div className="aboutsec-text">
        <h2 className="aboutsec-heading">About the Academy</h2>
        <p className="aboutsec-body">
          Founded in 1974, St. Mary's Academy is a beacon of educational excellence.
          We empower students with the knowledge, skills, and values required to lead
          purposeful lives and contribute meaningfully to a global society. Our rigorous
          academic curriculum is balanced with holistic development programs that foster
          innovation, integrity, and empathy.
        </p>
          <Link to="/about" className="aboutsec-btn">Read More →</Link>
      </div>

    </section>
  );
}

export default AboutSec;