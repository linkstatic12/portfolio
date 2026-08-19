import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const bootLines = [
  'initializing profile.json ...',
  'connecting to production cluster ... ok',
  'loading rag pipeline (500+ domains) ... ok',
  'gpu load-balancer: 10,412 req/day ... stable',
  'status: ready',
]

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showHeadline, setShowHeadline] = useState(false)

  useEffect(() => {
    if (lineIndex >= bootLines.length) {
      const t = setTimeout(() => setShowHeadline(true), 250)
      return () => clearTimeout(t)
    }
    const current = bootLines[lineIndex]
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 14)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1)
      setCharIndex(0)
    }, 180)
    return () => clearTimeout(t)
  }, [lineIndex, charIndex])

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mono mb-10 w-full max-w-xl rounded-md border border-line bg-surface/60 p-4 text-[12.5px] leading-relaxed text-muted shadow-[0_0_0_1px_rgba(79,209,197,0.03)]">
          <div className="mb-3 flex items-center gap-1.5 border-b border-line-soft pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-dim/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-dim/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-dim" />
            <span className="ml-2 text-dim">boot.log</span>
          </div>
          {bootLines.slice(0, lineIndex).map((l, i) => (
            <div key={i} className="text-dim">
              <span className="text-signal">$</span> {l}
            </div>
          ))}
          {lineIndex < bootLines.length && (
            <div>
              <span className="text-signal">$</span> {bootLines[lineIndex].slice(0, charIndex)}
              <span className="animate-caret text-signal">▌</span>
            </div>
          )}
        </div>

        <div
          className={`transition-all duration-700 ${
            showHeadline ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <p className="mono mb-4 text-[13px] uppercase tracking-[0.2em] text-signal">
            Certified Data Scientist · AI Engineer · Fullstack Developer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mono mt-4 max-w-2xl text-base text-muted md:text-lg">{profile.role}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="rounded bg-signal px-5 py-2.5 text-sm font-medium text-base transition hover:bg-signal/90"
            >
              View experience
            </a>
            <a
              href="#contact"
              className="mono rounded border border-line px-5 py-2.5 text-sm text-ink transition hover:border-signal-dim hover:text-signal"
            >
              {profile.location}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mono rounded border border-line px-5 py-2.5 text-sm text-ink transition hover:border-signal-dim hover:text-signal"
            >
              github ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
