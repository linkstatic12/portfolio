import { profile } from '../data.js'
import Divider from './Divider.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <p
          className="animate-rise text-[13px] font-medium uppercase tracking-[0.18em] text-signal"
          style={{ animationDelay: '0ms' }}
        >
          Certified Data Scientist · AI Engineer · Fullstack Developer
        </p>

        <h1
          className="animate-rise display mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
          style={{ animationDelay: '90ms' }}
        >
          {profile.name}
        </h1>

        <p
          className="animate-rise mt-4 max-w-2xl text-lg text-muted md:text-xl"
          style={{ animationDelay: '160ms' }}
        >
          {profile.role}
        </p>

        <p
          className="animate-rise mt-5 max-w-xl text-[15px] leading-relaxed text-muted"
          style={{ animationDelay: '220ms' }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-rise mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: '280ms' }}
        >
          <a
            href="#experience"
            className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-panel transition hover:bg-signal-dim"
          >
            View experience
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition hover:border-signal-dim hover:text-signal"
          >
            {profile.location}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition hover:border-signal-dim hover:text-signal"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <Divider />
    </section>
  )
}
