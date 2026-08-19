import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section
      id="hero"
      className="snap-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100dvh',
        overflow: 'hidden',
        paddingTop: '0',
        marginTop: '-80px', /* pull up behind sticky header */
      }}
    >
      {/* Animated rings */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
        {/* rings behind the image */}
        {[200, 300, 500].map((size, i) => (
          <span
            key={size}
            className={`ring-ping ring-ping-${i + 1}`}
            style={{
              position: 'absolute',
              border: '1px solid #B0B0B0',
              borderRadius: '50%',
              width: size,
              height: size,
              opacity: 0.3,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'block',
            }}
          />
        ))}
        <span
          style={{
            position: 'absolute',
            border: '1px solid #68B2A0',
            borderRadius: '50%',
            width: 510,
            height: 510,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.15,
          }}
          className="ring-pulse"
        />

        {/* Profile image */}
        <img
          src="/moron.jpeg"
          alt="Asadullah Baig"
          style={{
            position: 'relative',
            borderRadius: '50%',
            width: 128,
            height: 128,
            objectFit: 'cover',
            objectPosition: 'top',
            zIndex: 1,
          }}
        />
      </div>

      {/* Text */}
      <div style={{ zIndex: 10 }}>
        <h2 style={{
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: '#6b7280',
          marginBottom: '0.5rem',
        }}>
          AI Engineer &amp; Researcher
        </h2>

        <h1 style={{
          fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
          fontWeight: 600,
          color: '#242424',
          padding: '0 1.5rem',
          marginBottom: '1.25rem',
          lineHeight: 1.15,
        }}>
          <TypeAnimation
            sequence={[
              "Hi, the name is Asadullah Baig",
              2000,
              "And I'm addicted to doing research",
              2000,
              "I like to build cool things",
              2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </h1>

        {/* Nav buttons */}
        <div style={{ marginTop: '1.25rem' }}>
          {['About', 'Experience', 'Skills', 'Projects'].map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`}>
              <button className="heroButton">{label}</button>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
