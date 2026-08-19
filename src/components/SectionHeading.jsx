export default function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-signal">
        {eyebrow}
      </span>
      <h2 className="display mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
    </div>
  )
}
