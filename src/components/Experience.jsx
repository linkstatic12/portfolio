import { experience } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Journey" title="Experience" />

        <div className="mt-10 space-y-5">
          {experience.map((job) => (
            <article
              key={job.company}
              className="grid grid-cols-1 gap-x-8 gap-y-3 rounded-2xl border border-line-soft bg-panel p-6 shadow-sm md:grid-cols-[160px_1fr] md:p-7"
            >
              <div className="text-[13px] text-dim">
                <div className="font-medium text-signal">{job.period}</div>
                <div className="mt-1">{job.location}</div>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="display text-lg font-semibold text-ink">{job.company}</h3>
                  <span className="text-[13.5px] text-muted">{job.role}</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line-soft bg-surface px-2.5 py-1 text-[12px] text-muted"
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
