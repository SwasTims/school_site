function AcademyLife() {
  return (
    <section className="academy">

      <div className="academy-text">
        <h2 className="academy-heading">Experience Academy Life</h2>
        <p className="academy-body">
          Take a cinematic tour through our halls, fields, and laboratories.
          See first-hand why St. Mary's Academy is the preferred choice for
          tomorrow's leaders. Subscribe to our channel for weekly campus highlights.
        </p>
        <div className="academy-youtube">
          <div className="academy-yt-icon">▶</div>
          <div>
            <p className="academy-yt-views">2.4M Views</p>
            <p className="academy-yt-label">Visit our official YouTube Channel</p>
          </div>
        </div>
      </div>

      <div className="academy-video" onClick={() => window.open('https://www.youtube.com/watch?v=wPyLSBETAxo', '_blank')}>
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=600"
          alt="Campus"
        />
        <div className="academy-play">▶</div>
      </div>

    </section>
  )
}

export default AcademyLife