import { profile } from '../data.js'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry')
    const body = encodeURIComponent(`Name: ${data.get('name')}\n\n${data.get('message')}`)
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`)
  }

  return (
    <section
      id="contact"
      className="snap-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        minHeight: '100dvh',
        padding: '6rem 1.5rem 2rem',
      }}
    >
      <h3 className="section-label">Contact</h3>

      <div style={{ maxWidth: '36rem', width: '100%' }}>
        <h4 style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '2rem' }}>
          I have got just what you need.{' '}
          <span className="green-underline">Let's talk.</span>
        </h4>

        {/* Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {[
            { icon: '📞', label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
            { icon: '✉️', label: profile.email, href: `mailto:${profile.email}` },
            { icon: '📍', label: profile.location },
          ].map(({ icon, label, href }) => (
            <div
              key={label}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
            >
              <span style={{ fontSize: '1.2rem', color: '#68B2A0' }}>{icon}</span>
              {href ? (
                <a href={href} style={{ fontSize: '1rem', color: '#242424', textDecoration: 'none' }}>{label}</a>
              ) : (
                <p style={{ fontSize: '1rem', color: '#242424', margin: 0 }}>{label}</p>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input name="name" placeholder="Name" className="contactInput" type="text" required />
              <input name="email" placeholder="Email" className="contactInput" type="email" required />
            </div>
            <input name="subject" placeholder="Subject" className="contactInput" type="text" style={{ width: '100%' }} />
            <textarea
              name="message"
              placeholder="Message"
              className="contactInput"
              rows={4}
              style={{ width: '100%', resize: 'vertical' }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: '#68B2A0',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '12px 40px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.target.style.background = '#4a9a87' }}
            onMouseLeave={(e) => { e.target.style.background = '#68B2A0' }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer scroll-to-top */}
      <a
        href="#hero"
        style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer' }}
      >
        <div className="scroll-top-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </div>
      </a>
    </section>
  )
}
