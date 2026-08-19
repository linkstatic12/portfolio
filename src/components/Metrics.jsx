import { metrics } from '../data.js'
import { useInView } from '../hooks/useInView.js'
import { useCountUp } from '../hooks/useCountUp.js'

function Metric({ m }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const value = useCountUp(m.value, inView)
  const display = m.value % 1 === 0 ? Math.round(value) : value.toFixed(1)

  return (
    <div ref={ref} className="rounded-2xl border border-line-soft bg-panel p-6 shadow-sm">
      <div className="display flex items-baseline gap-1 text-3xl font-semibold text-ink md:text-4xl">
        <span>{display}</span>
        <span className="text-signal">{m.suffix}</span>
      </div>
      <div className="mt-2 text-[14.5px] text-ink/80">{m.label}</div>
      <div className="mt-1 text-[12.5px] text-dim">{m.detail}</div>
    </div>
  )
}

export default function Metrics() {
  return (
    <section aria-label="Key metrics" className="px-6 py-14 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {metrics.map((m) => (
          <Metric key={m.label} m={m} />
        ))}
      </div>
    </section>
  )
}
