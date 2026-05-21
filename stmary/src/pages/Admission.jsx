import { useState } from 'react'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="faq-icon">{open ? '▲' : '▼'}</span>
      </div>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  )
}

function Admission() {
  return (
    <div className="admission">

      {/* Hero Banner */}
      <section className="admission-hero">
        <div className="admission-hero-overlay" />
        <div className="admission-hero-content">
          <h1 className="admission-hero-heading">Admissions Open for New Session</h1>
          <p className="admission-hero-sub">
            Empowering the next generation of leaders in Nepal. Join Classes 1 to 10
            or our Plus Two (Grade 11 & 12) program for the upcoming Baisakh academic session.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="admission-process">
        <h2 className="admission-process-heading">Admission Process</h2>
        <p className="admission-process-sub">
          Our academic session begins in Baisakh (April). We welcome applications for Classes 1–10 and Plus Two.
        </p>

        <div className="admission-steps">

          <div className="admission-step-card">
            <span className="admission-step-icon">🎯</span>
            <h3 className="admission-step-title">1. Application Intake</h3>
            <p className="admission-step-desc">
              Visit our admissions office or apply online. Please ensure you select
              the correct level: Primary (Classes 1-5), Lower Secondary (Classes 6-8),
              Secondary (Classes 9-10), or Plus Two (Grade 11-12).
            </p>
          </div>

          <div className="admission-step-card admission-step-card--center">
            <span className="admission-step-icon">📄</span>
            <h3 className="admission-step-title">2. Documentation</h3>
            <p className="admission-step-desc">
              Submit required certificates including Transfer, Character, and
              Marksheets from the previous school.
            </p>
          </div>

          <div className="admission-step-card admission-step-card--center">
            <span className="admission-step-icon">📝</span>
            <h3 className="admission-step-title">3. Entrance Exam</h3>
            <p className="admission-step-desc">
              Eligible candidates must appear for a written assessment and a
              personal interview.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="admission-cta">
        <div className="admission-cta-text">
          <h3 className="admission-cta-heading">Secure Your Child's Future</h3>
          <p className="admission-cta-sub">
            Admissions are open for the new session starting this Baisakh. Limited
            seats available for Classes 1 to 10 and Plus Two.
          </p>
        </div>
        <button className="admission-cta-btn">Download Admission Form</button>
      </section>

      {/* Admission Materials */}
      <section className="admission-materials">
        <h2 className="admission-materials-heading">Admission Materials</h2>
        <p className="admission-materials-sub">
          Download these essential forms to prepare for the Baisakh session enrollment.
        </p>

        <div className="admission-materials-grid">

          <div className="admission-material-card">
            <div className="admission-material-left">
              <span className="admission-material-icon">📄</span>
              <div>
                <p className="admission-material-title">Classes 1-10 Guide</p>
                <p className="admission-material-size">PDF • 2.4 MB</p>
              </div>
            </div>
            <span className="admission-material-download">⬇</span>
          </div>

          <div className="admission-material-card">
            <div className="admission-material-left">
              <span className="admission-material-icon">📘</span>
              <div>
                <p className="admission-material-title">Plus Two Prospectus</p>
                <p className="admission-material-size">PDF • 3.1 MB</p>
              </div>
            </div>
            <span className="admission-material-download">⬇</span>
          </div>

          <div className="admission-material-card">
            <div className="admission-material-left">
              <span className="admission-material-icon">📋</span>
              <div>
                <p className="admission-material-title">Document Checklist</p>
                <p className="admission-material-size">PDF • 1.2 MB</p>
              </div>
            </div>
            <span className="admission-material-download">⬇</span>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="admission-faq">
        <h2 className="admission-faq-heading">Frequently Asked Questions</h2>

        <div className="admission-faq-list">
          <FAQItem
            question="When does the academic session start?"
            answer="Our academic session begins in Baisakh (April). Applications open in Falgun (February) and close in Chaitra (March)."
          />
          <FAQItem
            question="Is there an entrance exam for all classes?"
            answer="Yes, all applicants from Classes 1 to 10 and Plus Two must appear for a written assessment followed by a personal interview."
          />
          <FAQItem
            question="What subjects are offered in Plus Two?"
            answer="We offer Science (Physics, Chemistry, Biology/Math) and Management streams. Both streams include English and Nepali as compulsory subjects."
          />
        </div>
      </section>

      {/* Join Banner */}
      <section className="admission-join">
        <h2 className="admission-join-heading">Join Our Academic Family</h2>
        <p className="admission-join-sub">
          Give your child the gift of a world-class education rooted in traditional
          values. Admissions for Classes 1-10 and Plus Two are now open.
        </p>
      </section>

    </div>
  )
}

export default Admission