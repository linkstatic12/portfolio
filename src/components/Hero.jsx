import { profile } from '../data.js'
import Divider from './Divider.jsx'

export default function Hero() {
  return (
    <>
      {/* ── Hunza Origin Banner ── */}
      <div className="hunza-banner">
        <div className="hunza-banner-inner">
          <span className="hunza-flag">🏔️</span>
          <span className="hunza-banner-text">
            Proudly from <strong>Hunza Valley, Gilgit-Baltistan, Pakistan</strong> — Heaven on Earth
          </span>
          <span className="hunza-flag">🌸</span>
        </div>
      </div>

      <section id="top" className="hero-section relative overflow-hidden">
        {/* Hunza background image with overlay */}
        <div className="hero-bg-image" />
        <div className="hero-bg-overlay" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
          <p
            className="animate-rise text-[13px] font-medium uppercase tracking-[0.18em] text-hunza-spring"
            style={{ animationDelay: '0ms' }}
          >
            Certified Data Scientist · AI Engineer · Fullstack Developer
          </p>

          <h1
            className="animate-rise display mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: '90ms' }}
          >
            {profile.name}
          </h1>

          <p
            className="animate-rise mt-4 max-w-2xl text-lg text-white/80 md:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            {profile.role}
          </p>

          <p
            className="animate-rise mt-5 max-w-xl text-[15px] leading-relaxed text-white/70"
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
              className="rounded-full bg-hunza-pine px-5 py-2.5 text-sm font-medium text-white transition hover:bg-hunza-pine-deep"
            >
              View experience
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm text-white transition hover:bg-white/20"
            >
              {profile.location}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm text-white transition hover:bg-white/20"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <Divider />
      </section>
    </>
  )
}
