import { experience } from '../data.js'

export default function Experience() {
  return (
    <section
      id="experience"
      className="snap-section"
      style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
    >
      <h3 className="section-label">Experience</h3>

      {/* Horizontal scroll carousel */}
      <div style={{
        width: '100%',
        height: '75%',
        display: 'flex',
        gap: '1.25rem',
        overflowX: 'scroll',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatory',
        padding: '6rem 2.5rem 2.5rem',
        alignItems: 'center',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(104,178,160,0.8) rgba(180,180,180,0.2)',
        marginTop: 'auto',
        marginBottom: 'auto',
      }}>
        {experience.map((job) => (
          <article key={job.company} className="exp-card">
            {/* Company logo placeholder → initials badge */}
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #68B2A0, #2d6a4f)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.2rem',
              flexShrink: 0,
              marginBottom: '0.5rem',
            }}>
              {job.company.charAt(0)}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <h4 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 300, color: '#111827' }}>
                {job.role}
              </h4>
              <p style={{ fontWeight: 700, fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#68B2A0', marginTop: 2 }}>
                {job.company}
              </p>
              <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: '#9ca3af', margin: '8px 0' }}>
                {job.period} · {job.location}
              </p>
            </div>

            {/* Stack tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '0.75rem' }}>
              {job.stack.map((s) => (
                <span key={s} style={{
                  background: 'rgba(104,178,160,0.15)',
                  border: '1px solid rgba(104,178,160,0.35)',
                  borderRadius: '6px',
                  padding: '2px 8px',
                  fontSize: '0.72rem',
                  color: '#374151',
                }}>
                  {s}
                </span>
              ))}
            </div>

            {/* Points */}
            <ul style={{
              listStyle: 'disc',
              paddingLeft: '1.25rem',
              color: '#374151',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              textAlign: 'justify',
              overflowY: 'auto',
              maxHeight: '180px',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(104,178,160,0.6) rgba(200,200,200,0.2)',
              gap: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {job.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
