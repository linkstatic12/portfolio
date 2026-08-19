import { experience } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="log" title="Experience" />

        <div className="mt-12 space-y-0">
          {experience.map((job, i) => (
            <article
              key={job.company}
              className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-line py-8 first:border-t-0 md:grid-cols-[180px_1fr]"
            >
              <div className="mono text-[13px] text-dim">
                <div className="text-signal">{job.period}</div>
                <div className="mt-1">{job.location}</div>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
                  <span className="mono text-[13px] text-muted">{job.role}</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
                      <span className="mono mt-0.5 shrink-0 text-signal-dim">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="mono rounded border border-line-soft bg-panel px-2 py-1 text-[11.5px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
