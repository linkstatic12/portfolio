import { education } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" className="border-b border-line bg-surface/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="record" title="Education" />

        <div className="mt-12 space-y-0">
          {education.map((e) => (
            <div
              key={e.school}
              className="grid grid-cols-1 gap-x-8 gap-y-1 border-t border-line py-6 first:border-t-0 md:grid-cols-[180px_1fr]"
            >
              <div className="mono text-[13px] text-signal">{e.period}</div>
              <div>
                <h3 className="text-[15px] font-medium text-ink">{e.school}</h3>
                <p className="mt-1 text-[14px] text-muted">{e.detail}</p>
                <p className="mono mt-1 text-[12px] text-dim">{e.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
