import { skillGroups } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-surface/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="stack" title="Skills" />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-lg border border-line bg-panel/60 p-5">
              <h3 className="mono text-[12px] uppercase tracking-[0.15em] text-signal">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="mono rounded border border-line-soft bg-base/60 px-2.5 py-1.5 text-[12.5px] text-ink/85 transition hover:border-signal-dim hover:text-signal"
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
