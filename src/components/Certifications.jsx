import { certifications } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="bg-surface/40 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Verified" title="Certifications" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex flex-col rounded-2xl border border-line-soft bg-panel p-5 shadow-sm transition hover:border-signal-dim"
            >
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Verified
              </div>
              <h3 className="mt-3 text-[15px] font-medium leading-snug text-ink">{c.name}</h3>
              {c.detail && <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{c.detail}</p>}
              <div className="mt-3 flex items-center justify-between text-[12px] text-dim">
                <span>{c.org}</span>
                <span>{c.date}</span>
              </div>
              {c.components && (
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line-soft pt-4">
                  {c.components.map((comp) => (
                    <span
                      key={comp.code}
                      title={`${comp.label} — ${comp.score}`}
                      className="rounded-full border border-line-soft bg-base/70 px-2 py-1 text-[10.5px] text-dim"
                    >
                      {comp.code} <span className="text-signal-dim">{comp.score}</span>
                    </span>
                  ))}
                </div>
              )}
              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-line-soft px-3 py-1.5 text-[12px] text-muted transition hover:border-signal-dim hover:text-signal"
                >
                  View certificate ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
