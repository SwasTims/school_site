function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=500" alt="School building" />
        <div className="about-badge">
          <span className="about-badge-number">50+</span>
          <span className="about-badge-text">YEARS OF TRADITION</span>
        </div>
      </div>

      <div className="about-text">
        <h2 className="about-heading">About the Academy</h2>
        <p className="about-body">
          Founded in 1974, St. Mary's Academy is a beacon of educational excellence.
          We empower students with the knowledge, skills, and values required to lead
          purposeful lives and contribute meaningfully to a global society. Our rigorous
          academic curriculum is balanced with holistic development programs that foster
          innovation, integrity, and empathy.
        </p>
        <button className="about-btn">Read More →</button>
      </div>

    </section>
  );
}

export default About;