import { projects } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import VideoPlayer from './VideoPlayer.jsx'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Builds" title="Projects" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="project-card flex flex-col rounded-2xl border border-line-soft bg-panel p-6 shadow-sm transition hover:border-signal-dim"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="display text-lg font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 text-[12.5px] text-dim">{p.period}</p>
                </div>
                <div className="flex shrink-0 flex-wrap justify-end gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-line-soft px-2.5 py-1.5 text-[12px] text-muted transition hover:border-signal-dim hover:text-signal"
                    >
                      Repo ↗
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-line-soft px-2.5 py-1.5 text-[12px] text-muted transition hover:border-signal-dim hover:text-signal"
                    >
                      {p.demoLabel || 'Live demo ↗'}
                    </a>
                  )}
                  {p.video && !p.videoEmbed && (
                    <a
                      href={p.video}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-line-soft px-2.5 py-1.5 text-[12px] text-muted transition hover:border-signal-dim hover:text-signal"
                    >
                      Video ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.summary}</p>

              <ul className="mt-4 space-y-2">
                {p.details.map((d, idx) => (
                  <li key={idx} className="flex gap-3 text-[13.5px] leading-relaxed text-muted/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal/50" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {/* Embedded YouTube player */}
              {p.video && (
                <div className="mt-5">
                  <VideoPlayer url={p.video} />
                </div>
              )}

              {/* Project screenshot / preview image */}
              {p.image && (
                <div className="mt-5 overflow-hidden rounded-xl border border-line-soft" style={{ maxHeight: '220px' }}>
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    className="w-full object-cover object-top transition duration-500 hover:scale-105"
                    style={{ height: '220px' }}
                  />
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line-soft bg-base/70 px-2.5 py-1 text-[11.5px] text-muted"
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
