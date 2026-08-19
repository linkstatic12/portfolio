import { useState, useCallback, useRef, useEffect } from 'react'
import { projects } from '../data.js'

/* Extract YouTube video ID from various YouTube URL formats */
function ytId(url) {
  if (!url) return null
  const m =
    url.match(/youtu\.be\/([^?&]+)/) ||
    url.match(/youtube\.com\/watch\?v=([^&]+)/) ||
    url.match(/youtube\.com\/shorts\/([^?&]+)/)
  return m ? m[1] : null
}

/* ── Lightbox overlay ── */
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'zoom-out',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '2rem',
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#fff',
          borderRadius: '50%',
          width: 40,
          height: 40,
          fontSize: '1.2rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(104,178,160,0.5)' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
        aria-label="Close"
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '85vh',
          objectFit: 'contain',
          borderRadius: '0.75rem',
          boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          cursor: 'default',
          animation: 'scaleIn 0.2s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { transform: scale(0.92) } to { transform: scale(1) } }
      `}</style>
    </div>
  )
}

/* ── Inline YouTube player ── */
function YouTubePlayer({ videoId }) {
  const [playing, setPlaying] = useState(false)

  if (!videoId) return null

  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div style={{ width: '100%', maxWidth: '48rem', marginTop: '0.75rem' }}>
      {playing ? (
        <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '0.75rem', overflow: 'hidden', background: '#000' }}>
          <iframe
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Project video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          onClick={() => setPlaying(true)}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            background: '#000',
            display: 'block',
          }}
        >
          <img
            src={thumb}
            alt="Video thumbnail"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
            onError={(e) => {
              e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            }}
          />
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%)',
          }} />
          {/* Play button */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1b4332, #68B2A0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(104,178,160,0.5), 0 0 0 4px rgba(255,255,255,0.15)',
            paddingLeft: 3,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {/* Watch label */}
          <span style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
          }}>
            Watch demo
          </span>
        </button>
      )}
    </div>
  )
}

/* ── Expandable project image ── */
function ProjectImage({ src, alt, isExpanded, onExpand, onClose }) {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '48rem',
          cursor: 'zoom-in',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          transition: 'box-shadow 0.25s',
          boxShadow: hovered ? '0 12px 40px rgba(104,178,160,0.35)' : '0 4px 16px rgba(0,0,0,0.1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onExpand}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            maxHeight: 'clamp(6rem, 20vh, 18rem)',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
        {/* Hover expand hint */}
        {hovered && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              background: 'rgba(36,36,36,0.75)',
              color: '#fff',
              borderRadius: '9999px',
              padding: '4px 14px',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(104,178,160,0.5)',
            }}>
              Click to expand
            </span>
          </div>
        )}
      </div>

      {isExpanded && <Lightbox src={src} alt={alt} onClose={onClose} />}
    </>
  )
}

/* ── Link button helper ── */
function LinkBtn({ href, label }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        border: '1px solid rgba(104,178,160,0.6)',
        borderRadius: '9999px',
        padding: '6px 16px',
        fontSize: '0.78rem',
        color: hov ? '#fff' : '#374151',
        background: hov ? '#68B2A0' : 'transparent',
        textDecoration: 'none',
        transition: 'background 0.2s, color 0.2s',
        display: 'inline-block',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </a>
  )
}

/* ── Main Projects component ── */
/* ── Arrow button ── */
function ArrowBtn({ direction, onClick, disabled }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={direction === 'left' ? 'Previous project' : 'Next project'}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction === 'left' ? 'left' : 'right']: '1rem',
        zIndex: 10,
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '1px solid rgba(104,178,160,0.6)',
        background: hov && !disabled
          ? '#68B2A0'
          : 'rgba(255,255,255,0.85)',
        color: hov && !disabled ? '#fff' : '#374151',
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s, color 0.2s, opacity 0.2s',
        opacity: disabled ? 0.3 : 1,
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(4px)',
        padding: 0,
        fontSize: '1.1rem',
        lineHeight: 1,
      }}
    >
      {direction === 'left' ? '←' : '→'}
    </button>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [expandedImage, setExpandedImage] = useState(null)
  const [inView, setInView] = useState(false)
  const total = projects.length

  const scrollTo = useCallback((idx) => {
    if (!carouselRef.current) return
    const slide = carouselRef.current.children[idx]
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      setCurrent(idx)
      setExpandedImage(null) // Close any open modal on navigation
    }
  }, [])

  const prev = useCallback(() => scrollTo(Math.max(0, current - 1)), [current, scrollTo])
  const next = useCallback(() => scrollTo(Math.min(total - 1, current + 1)), [current, total, scrollTo])

  /* Track if section is visible to enable keyboard navigation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /* Keyboard listener for left/right arrows */
  useEffect(() => {
    if (!inView) return
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [inView, prev, next])

  /* Sync the counter when the user scrolls manually */
  const handleScroll = () => {
    if (!carouselRef.current) return
    const { scrollLeft, clientWidth } = carouselRef.current
    const idx = Math.round(scrollLeft / clientWidth)
    setCurrent(idx)
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="snap-section"
      style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
    >
      {/* Heading with project count */}
      <h3 className="section-label" style={{ top: '2.5rem' }}>
        Projects
        <span style={{
          marginLeft: '0.6rem',
          fontSize: '0.85em',
          fontWeight: 400,
          color: '#9ca3af',
          letterSpacing: '0.04em',
        }}>
          ({current + 1}&nbsp;/&nbsp;{total})
        </span>
      </h3>

      {/* Left arrow */}
      <ArrowBtn direction="left" onClick={prev} disabled={current === 0} />

      {/* Horizontal snap carousel */}
      <div
        className="projects-carousel"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {projects.map((p, idx) => {
          const videoId = ytId(p.video)

          return (
            <div key={p.name} className="project-slide" style={{ zIndex: 1 }}>

              {/* Image (expandable) or YouTube player or fallback */}
              {p.image ? (
                <ProjectImage
                  src={p.image}
                  alt={p.name}
                  isExpanded={expandedImage === p.name}
                  onExpand={() => setExpandedImage(p.name)}
                  onClose={() => setExpandedImage(null)}
                />
              ) : videoId ? (
                <YouTubePlayer videoId={videoId} />
              ) : (
                <div style={{
                  height: '8rem',
                  width: '100%',
                  maxWidth: '48rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, rgba(104,178,160,0.25), rgba(45,106,79,0.25))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                }}>
                  🚀
                </div>
              )}

              {/* Content block */}
              <div style={{ maxWidth: '48rem', width: '100%' }}>
                <h4 style={{
                  fontSize: 'clamp(1rem, 3vw, 1.75rem)',
                  fontWeight: 600,
                  textAlign: 'center',
                  marginBottom: '0.5rem',
                }}>
                  <span className="green-underline">Project {idx + 1}:</span>{' '}{p.name}
                </h4>

                {/* Stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center', marginBottom: '0.6rem' }}>
                  {p.stack.map((s) => (
                    <span key={s} style={{
                      background: 'rgba(104,178,160,0.13)',
                      border: '1px solid rgba(104,178,160,0.38)',
                      borderRadius: '6px',
                      padding: '2px 9px',
                      fontSize: '0.68rem',
                      color: '#374151',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                <p style={{
                  fontSize: 'clamp(0.78rem, 1.4vw, 0.95rem)',
                  lineHeight: 1.7,
                  color: '#374151',
                  textAlign: 'justify',
                }}>
                  {p.summary}
                </p>

                {/* YouTube player shown AFTER summary when project has image + video */}
                {p.image && videoId && (
                  <div style={{ marginTop: '0.75rem' }}>
                    <YouTubePlayer videoId={videoId} />
                  </div>
                )}

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginTop: '0.875rem', flexWrap: 'wrap' }}>
                  {p.github && <LinkBtn href={p.github} label="GitHub ↗" />}
                  {p.demo && <LinkBtn href={p.demo} label={p.demoLabel || 'Live Demo ↗'} />}
                  {p.video && !videoId && <LinkBtn href={p.video} label="Video ↗" />}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Right arrow */}
      <ArrowBtn direction="right" onClick={next} disabled={current === total - 1} />

      {/* Dot indicators */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '6px',
        zIndex: 10,
      }}>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to project ${i + 1}`}
            style={{
              width: i === current ? 20 : 7,
              height: 7,
              borderRadius: '9999px',
              background: i === current ? '#68B2A0' : 'rgba(104,178,160,0.35)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s, background 0.2s',
            }}
          />
        ))}
      </div>

      {/* Decorative skew band */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: 0,
        width: '100%',
        height: '40%',
        background: 'rgba(104,178,160,0.10)',
        transform: 'skewY(-6deg)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
    </section>
  )
}

