import { profile } from '../data.js'

export default function About() {
  return (
    <section
      id="about"
      className="snap-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        minHeight: '100dvh',
      }}
    >
      <h3 className="section-label">About</h3>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem',
        padding: '8rem 2.5rem 2.5rem',
        maxWidth: '80rem',
        margin: '0 auto',
        width: '100%',
      }}
        className="about-inner"
      >
        <img
          src="/moron.jpeg"
          alt="Asadullah Baig"
          className="about-img"
          style={{ objectPosition: 'top' }}
        />

        <div style={{ maxWidth: '42rem' }}>
          <h4 style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1.25rem' }}>
            Here is a <span className="green-underline">little</span> background
          </h4>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontWeight: 300, lineHeight: 1.75, color: '#4b5563', textAlign: 'justify' }}>
            Hey 👋 I am an AI Engineer &amp; Researcher currently based in Ghent, Belgium 🇧🇪.
            Proudly from <strong>Hunza Valley, Gilgit-Baltistan, Pakistan</strong> 🏔️ — one of the most
            beautiful places on Earth.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontWeight: 300, lineHeight: 1.75, color: '#4b5563', textAlign: 'justify', marginTop: '1.25rem' }}>
            I specialize in production ML systems, LLM fine-tuning, RAG pipelines, and
            full-stack AI applications. I hold the EITCA/AI certification (24 ECTS credits,
            Brussels) and multiple IBM &amp; Anthropic certifications. I&apos;m addicted to
            doing research and equally passionate about turning that research into
            real-world, scalable products.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontWeight: 300, lineHeight: 1.75, color: '#4b5563', textAlign: 'justify', marginTop: '1.25rem' }}>
            📍 {profile.location} · 📧 {profile.email}
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-inner {
            flex-direction: row !important;
            text-align: left !important;
            padding-top: 5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
