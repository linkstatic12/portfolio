import { projects } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="repos" title="Projects" />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-lg border border-line bg-panel/60 p-6 transition hover:border-signal-dim"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                  <p className="mono mt-1 text-[12px] text-dim">{p.period}</p>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name} on GitHub`}
                  className="mono shrink-0 rounded border border-line-soft px-2.5 py-1.5 text-[12px] text-muted transition hover:border-signal-dim hover:text-signal"
                >
                  repo ↗
                </a>
              </div>

              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.summary}</p>

              <ul className="mt-4 space-y-2">
                {p.details.map((d, idx) => (
                  <li key={idx} className="flex gap-3 text-[13.5px] leading-relaxed text-muted/90">
                    <span className="mono mt-0.5 shrink-0 text-signal-dim">›</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="mono rounded border border-line-soft bg-base/60 px-2 py-1 text-[11.5px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
