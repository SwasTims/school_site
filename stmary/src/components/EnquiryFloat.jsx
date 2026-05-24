import { useState } from 'react'

function EnquiryFloat() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }

    setLoading(false)
  }

  return (
    <>
      <button className="enquiry-float-btn" onClick={() => setOpen(true)}>
        ✉
      </button>

      {open && (
        <div className="enquiry-overlay" onClick={() => setOpen(false)}>
          <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>

            <div className="enquiry-modal-header">
              <h3 className="enquiry-modal-title">Send us an Enquiry</h3>
              <button className="enquiry-close" onClick={() => setOpen(false)}>✕</button>
            </div>

            {status === 'success' ? (
              <div className="enquiry-success">
                <p>✅ Your enquiry has been submitted successfully!</p>
                <p>We will get back to you shortly.</p>
                <button className="enquiry-submit-btn" onClick={() => setStatus(null)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">

                <div className="enquiry-field">
                  <label></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="enquiry-field">
                  <label></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="enquiry-field">
                  <label> </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>

                <div className="enquiry-field">
                  <label> </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of Enquiry"
                    required
                  />
                </div>

               <div className="enquiry-field">
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="3"
                    required
                    />
                </div>

                {status === 'error' && (
                  <p className="enquiry-error">Something went wrong. Please try again.</p>
                )}

                <button type="submit" className="enquiry-submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </button>

              </form>
            )}

          </div>
        </div>
      )}
    </>
  )
}

export default EnquiryFloat