const links = [
  { label: 'experience', href: '#experience' },
  { label: 'skills', href: '#skills' },
  { label: 'certifications', href: '#certifications' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="mono flex items-center gap-2 text-sm text-ink">
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-blink" />
          </span>
          <span className="font-semibold tracking-tight">asadullah@baig</span>
          <span className="text-dim">:~$</span>
        </a>
        <nav className="mono hidden items-center gap-6 text-[13px] text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-signal">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="mono rounded border border-signal-dim px-3 py-1.5 text-[13px] text-signal transition hover:bg-signal hover:text-base"
        >
          get in touch
        </a>
      </div>
    </header>
  )
}
