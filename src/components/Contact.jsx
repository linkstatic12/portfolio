import { profile } from '../data.js'
import Divider from './Divider.jsx'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-surface/40 px-6 pb-16 pt-2 md:pb-20">
      <Divider flip />
      <div className="mx-auto max-w-6xl pt-6">
        <div className="rounded-3xl border border-line-soft bg-panel p-8 shadow-sm md:p-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-signal">
            Open to work
          </p>
          <h2 className="display mt-4 max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Let's build something that scales.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            Open to AI engineering, ML infrastructure, and full-stack roles. Reach out directly or
            find the code on GitHub.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between rounded-full border border-line-soft bg-base/70 px-4 py-3 text-sm text-ink transition hover:border-signal-dim hover:text-signal"
            >
              <span>{profile.email}</span>
              <span className="text-dim">→</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-between rounded-full border border-line-soft bg-base/70 px-4 py-3 text-sm text-ink transition hover:border-signal-dim hover:text-signal"
            >
              <span>{profile.phone}</span>
              <span className="text-dim">→</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-full border border-line-soft bg-base/70 px-4 py-3 text-sm text-ink transition hover:border-signal-dim hover:text-signal"
            >
              <span>github.com/linkstatic12</span>
              <span className="text-dim">↗</span>
            </a>
            {profile.sites.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-full border border-line-soft bg-base/70 px-4 py-3 text-sm text-ink transition hover:border-signal-dim hover:text-signal"
              >
                <span>{s.label}</span>
                <span className="text-dim">↗</span>
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line-soft pt-6 text-[12px] text-dim sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}. Built from Ghent, Belgium.</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-breathe" />
            Open to opportunities
          </span>
        </footer>
      </div>
    </section>
  )
}
