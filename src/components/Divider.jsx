export default function Divider({ flip = false }) {
  return (
    <div className={`pointer-events-none select-none ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 60" className="block h-8 w-full md:h-10" preserveAspectRatio="none">
        <path
          d="M0,32 C 180,8 360,52 540,30 C 720,8 900,50 1080,28 C 1260,10 1350,26 1440,20 L1440,60 L0,60 Z"
          fill="var(--color-surface)"
        />
        <path
          d="M0,40 C 220,20 420,54 640,34 C 860,14 1040,48 1260,30 C 1350,22 1400,26 1440,24"
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}
