import { SocialIcon } from 'react-social-icons'
import { profile } from '../data.js'

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '80rem',
        margin: '0 auto',
        zIndex: 20,
        width: '100%',
        pointerEvents: 'none',
      }}
    >
      {/* Left — LinkedIn, Twitter, GitHub */}
      <div style={{ display: 'flex', gap: '4px', pointerEvents: 'all' }}>
        <SocialIcon
          url={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          style={{ width: 44, height: 44 }}
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url={profile.twitter}
          target="_blank"
          rel="noreferrer"
          style={{ width: 44, height: 44 }}
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url={profile.github}
          target="_blank"
          rel="noreferrer"
          style={{ width: 44, height: 44 }}
          bgColor="transparent"
          fgColor="gray"
        />
      </div>

      {/* Right — email / Get in touch */}
      <a
        href="#contact"
        style={{ pointerEvents: 'all', textDecoration: 'none' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.6 }}>
          <SocialIcon
            network="email"
            style={{ width: 44, height: 44 }}
            bgColor="transparent"
            fgColor="gray"
          />
          <span style={{
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            color: '#9ca3af',
            letterSpacing: '0.08em',
          }}>
            Get in touch
          </span>
        </div>
      </a>
    </header>
  )
}
