import { skillGroups } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/40 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Craft" title="Skills" />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-2xl border border-line-soft bg-panel p-5 shadow-sm">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.14em] text-signal">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line-soft bg-base/70 px-3 py-1.5 text-[13px] text-ink/85 transition hover:border-signal-dim hover:text-signal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
