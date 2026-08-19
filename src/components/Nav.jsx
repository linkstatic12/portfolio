const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-base/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          <svg width="22" height="22" viewBox="0 0 100 100" aria-hidden="true">
            <path
              d="M50 20 C 28 30, 24 55, 50 82 C 76 55, 72 30, 50 20 Z"
              fill="var(--color-signal)"
            />
            <path d="M50 40 L50 76" stroke="var(--color-panel)" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="display text-[17px] font-semibold tracking-tight">Asadullah Baig</span>
        </a>
        <nav className="hidden items-center gap-1 text-[14px] text-muted md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-surface hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-signal px-4 py-2 text-[13.5px] font-medium text-panel transition hover:bg-signal-dim"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
