import { education } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Record" title="Education" />

        <div className="mt-10 space-y-4">
          {education.map((e) => (
            <div
              key={e.school}
              className="grid grid-cols-1 gap-x-8 gap-y-1 rounded-2xl border border-line-soft bg-panel p-6 shadow-sm md:grid-cols-[160px_1fr]"
            >
              <div className="text-[13px] font-medium text-signal">{e.period}</div>
              <div>
                <h3 className="display text-[16px] font-medium text-ink">{e.school}</h3>
                <p className="mt-1 text-[14px] text-muted">{e.detail}</p>
                <p className="mt-1 text-[12px] text-dim">{e.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
