function About() {
  return (
    <div>

      {/* Hero Banner */}
      <section className="about-page-hero">
        <div className="about-page-hero-overlay" />
        <div className="about-page-hero-content">
          <h1 className="about-page-hero-heading">Shaping Future Leaders</h1>
          <p className="about-page-hero-sub">
            Discover the stories of excellence and character development at St. Mary's Academy.
          </p>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="about-foundation">

        <div className="about-foundation-left">
          <p className="about-foundation-tag">Our Foundation</p>
          <h2 className="about-foundation-heading">The Mission</h2>
          <p className="about-foundation-body">
            To empower students with the knowledge, skills, and values required to lead
            purposeful lives and contribute meaningfully to a global society through a
            rigorous academic curriculum and holistic development programs.
          </p>
          <div className="about-foundation-underline">
            <span className="about-foundation-line-blue"></span>
            <span className="about-foundation-line-red"></span>
          </div>
        </div>

        <div className="about-foundation-right">
          <h2 className="about-foundation-vision-heading">The Vision</h2>
          <p className="about-foundation-vision-body">
            To be a globally recognised center of learning that fosters innovation, integrity,
            and excellence — creating the next generation of exemplary leaders changing
            the world with confidence and compassion.
          </p>
        </div>

      </section>

      {/* Three Values */}
      <section className="about-values">
        <div className="about-values-card">

          <div className="about-value-item">
            <span className="about-value-icon">🎓</span>
            <h3 className="about-value-title">Academic Rigor</h3>
            <p className="about-value-desc">Maintaining the highest standards of intellectual engagement and curiosity.</p>
          </div>

          <div className="about-value-item">
            <span className="about-value-icon">🤝</span>
            <h3 className="about-value-title">Moral Integrity</h3>
            <p className="about-value-desc">Building character founded on honesty, respect, and responsibility.</p>
          </div>

          <div className="about-value-item">
            <span className="about-value-icon">👥</span>
            <h3 className="about-value-title">Community</h3>
            <p className="about-value-desc">Cultivating an inclusive environment where every voice is valued.</p>
          </div>

        </div>
      </section>

      {/* Our History */}
      <section className="about-history">

        <div className="about-history-image">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600"
            alt="Our History"
          />
          <div className="about-history-badge">
            <span className="about-history-badge-number">50+</span>
            <span className="about-history-badge-text">Years of Excellence</span>
          </div>
        </div>

        <div className="about-history-text">
          <h2 className="about-history-heading">Our History</h2>
          <p className="about-history-body">
            Founded in 1974 by a group of visionary educators, St. Mary's Academy
            began as a small primary school with just 12 teachers and 200 students.
            Our founders believed that every child deserved access to a rigorous,
            values-driven education that prepared them not just for exams, but for life.
          </p>
          <p className="about-history-body">
            Over five decades, we have grown into one of Nepal's most respected
            institutions — home to over 14,000 students across primary, secondary,
            and Plus Two programs. Through every chapter of our journey, our
            commitment to academic excellence, moral integrity, and community
            service has remained unchanged. Today, our alumni lead in medicine,
            law, technology, and public service across the globe.
          </p>
        </div>

      </section>

      {/* Leadership Team */}
      <section className="about-leadership">

        <div className="about-leadership-header">
          <h2 className="about-leadership-heading">Leadership Team</h2>
          <p className="about-leadership-sub">
            Guided by visionaries dedicated to providing an unparalleled educational experience.
          </p>
        </div>

        <div className="about-leadership-grid">

          <div className="about-leader-card">
            <img src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dr. Elizabeth Vance" />
            <h3 className="about-leader-name">Dr. Elizabeth Vance</h3>
            <p className="about-leader-role">School Principal</p>
            <p className="about-leader-desc">With 20 years in educational leadership, Dr. Vance focuses on curriculum innovation and student well-being.</p>
          </div>

          <div className="about-leader-card">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" alt="Marcus Sterling" />
            <h3 className="about-leader-name">Marcus Sterling</h3>
            <p className="about-leader-role">Academic Director</p>
            <p className="about-leader-desc">Marcus oversees our STEM and Humanities integration, ensuring global standards across all departments.</p>
          </div>

          <div className="about-leader-card">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" alt="Sarah Jenkins" />
            <h3 className="about-leader-name">Sarah Jenkins</h3>
            <p className="about-leader-role">Head of Admissions</p>
            <p className="about-leader-desc">Sarah is the first point of contact for families, guiding them through their journey into the St. Mary's family.</p>
          </div>

          <div className="about-leader-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Robert Chen" />
            <h3 className="about-leader-name">Robert Chen</h3>
            <p className="about-leader-role">Chief Operations Officer</p>
            <p className="about-leader-desc">Robert ensures that the campus facilities and operations maintain the highest safety and quality standards.</p>
          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="about-core-values">

        <h2 className="about-core-heading">Our Core Values</h2>

        <div className="about-core-grid">

          <div className="about-core-card">
            <span className="about-core-icon">💡</span>
            <h3 className="about-core-title">Innovation</h3>
            <p className="about-core-desc">We encourage creative thinking and modern problem-solving in every classroom.</p>
          </div>

          <div className="about-core-card">
            <span className="about-core-icon">🤍</span>
            <h3 className="about-core-title">Empathy</h3>
            <p className="about-core-desc">Understanding and sharing the feelings of others is at the heart of our community.</p>
          </div>

          <div className="about-core-card">
            <span className="about-core-icon">📈</span>
            <h3 className="about-core-title">Persistence</h3>
            <p className="about-core-desc">We teach the value of hard work and the importance of never giving up on one's goals.</p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default About