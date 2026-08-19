export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="mono shrink-0 rounded border border-line-soft bg-panel px-2 py-1 text-[11px] uppercase tracking-[0.15em] text-signal">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  )
}
