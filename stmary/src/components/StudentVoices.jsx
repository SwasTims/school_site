function StudentVoices() {
  return (
    <section className="voices">
      <h2 className="voices-heading">Student Voices</h2>

      <div className="voices-grid">

        <div className="voice-card">
          <span className="voice-quote-icon">❝</span>
          <div className="voice-top">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Alex Rivera" />
            <div>
              <p className="voice-name">Alex Rivera</p>
              <p className="voice-role">CLASS OF 2024</p>
            </div>
          </div>
          <p className="voice-text">"The mentorship I received at St. Mary's helped me discover my passion for environmental science. The faculty didn't just teach; they inspired me to think globally."</p>
        </div>

        <div className="voice-card">
          <span className="voice-quote-icon">❝</span>
          <div className="voice-top">
            <img style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #BC0100',
              position: 'absolute',
              top: '-26px',
              left: '24px',
              marginBottom: '55px'
            }} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Jordan Smith" />
            <div>
              <p className="voice-name">Jordan Smith</p>
              <p className="voice-role">SCIENCE HEAD</p>
            </div>
          </div>
          <p className="voice-text">"Winning the robotics championship was a team effort facilitated by the world-class labs here. The school provides tools you won't find anywhere else."</p>
        </div>

        <div className="voice-card">
          <span className="voice-quote-icon">❝</span>
          <div className="voice-top">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" alt="Maya Patel" />
            <div>
              <p className="voice-name">Maya Patel</p>
              <p className="voice-role">LITERARY CLUB</p>
            </div>
          </div>
          <p className="voice-text">"The quiet corners of the library became my sanctuary. St. Mary's fosters a deep love for literature and critical analysis that I'll carry to university."</p>
        </div>

      </div>
    </section>
  )
}

export default StudentVoices