function Achievements() {
  return (
    <section className="achievements">
      <h2 className="achievements-heading">Our Achievements</h2>

      <div className="achievements-grid">

        <div className="achievement-card">
          <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400" alt="STEM Global Innovation" />
          <h3 className="achievement-title">STEM Global Innovation</h3>
          <p className="achievement-desc">Our students secured first position in the International Robotics Challenge, marking a new milestone for our science department's dedication to innovation.</p>
        </div>

        <div className="achievement-card">
          <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400" alt="Athletic Supremacy" />
          <h3 className="achievement-title">Athletic Supremacy</h3>
          <p className="achievement-desc">Shattering multiple track records this season, the St. Mary's Eagles continue to dominate regional inter-house championships.</p>
        </div>

        <div className="achievement-card">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" alt="Ivy League Placements" />
          <h3 className="achievement-title">Ivy League Placements</h3>
          <p className="achievement-desc">The Class of 2024 has achieved record-breaking acceptance rates into global top-tier universities and Ivy League institutions.</p>
        </div>

      </div>

      <div className="achievements-btn-wrap">
        <button className="achievements-btn">View Achievement Gallery</button>
      </div>

    </section>
  )
}

export default Achievements