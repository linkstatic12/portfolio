import { certifications } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="verified" title="Certifications" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-panel/60 p-5 transition hover:border-signal-dim"
            >
              <div className="mono flex items-center gap-2 text-[11px] text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                verified
              </div>
              <h3 className="mt-3 text-[15px] font-medium leading-snug text-ink">{c.name}</h3>
              {c.detail && <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{c.detail}</p>}
              <div className="mono mt-3 flex items-center justify-between text-[12px] text-dim">
                <span>{c.org}</span>
                <span>{c.date}</span>
              </div>
              {c.components && (
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line-soft pt-4">
                  {c.components.map((comp) => (
                    <span
                      key={comp.code}
                      title={`${comp.label} — ${comp.score}`}
                      className="mono rounded border border-line-soft bg-base/60 px-1.5 py-1 text-[10.5px] text-dim"
                    >
                      {comp.code} <span className="text-signal-dim">{comp.score}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
