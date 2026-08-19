import { metrics } from '../data.js'
import { useInView } from '../hooks/useInView.js'
import { useCountUp } from '../hooks/useCountUp.js'

function Metric({ m }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const value = useCountUp(m.value, inView)
  const display = m.value % 1 === 0 ? Math.round(value) : value.toFixed(1)

  return (
    <div ref={ref} className="border-t border-line px-6 py-6 first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0">
      <div className="mono flex items-baseline gap-1 text-3xl font-semibold text-ink md:text-4xl">
        <span>{display}</span>
        <span className="text-signal">{m.suffix}</span>
      </div>
      <div className="mt-2 text-sm text-ink/80">{m.label}</div>
      <div className="mono mt-1 text-[12px] text-dim">{m.detail}</div>
    </div>
  )
}

export default function Metrics() {
  return (
    <section aria-label="Key metrics" className="border-b border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {metrics.map((m) => (
          <Metric key={m.label} m={m} />
        ))}
      </div>
    </section>
  )
}
