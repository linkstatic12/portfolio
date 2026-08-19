import { useState } from 'react'
import { skillGroups } from '../data.js'

/* ── SkillIcon: tries the CDN image; on failure shows text in the circle ── */
function SkillIcon({ skill, pct }) {
  const [failed, setFailed] = useState(false)

  // Abbreviate long names for the text circle
  const abbr = (name) => {
    const words = name.split(/[\/\s-]+/).filter(Boolean)
    if (words.length === 1) return name.length <= 7 ? name : name.slice(0, 6) + '…'
    return words.map(w => w[0].toUpperCase()).join('').slice(0, 4)
  }

  return (
    <div
      className="skill-icon-wrap"
      title={`${skill} — ${pct}%`}
    >
      {!failed && ICON[skill] ? (
        <img
          src={ICON[skill]}
          alt={skill}
          className="skill-icon-img"
          onError={() => setFailed(true)}
        />
      ) : (
        /* Text-in-circle fallback */
        <div
          className="skill-icon-img"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(104,178,160,0.18), rgba(45,106,79,0.18))',
            padding: '4px',
          }}
        >
          <span style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            color: '#2d6a4f',
            textAlign: 'center',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            wordBreak: 'break-word',
            maxWidth: '100%',
          }}>
            {skill.length <= 8 ? skill : abbr(skill)}
          </span>
        </div>
      )}

      <div className="skill-hover-overlay">
        <span>{pct}%</span>
      </div>
    </div>
  )
}

/* ─── Icon map ─────────────────────────────────────────────────────────── */
const ICON = {
  // LLM / NLP
  'LLM/NLP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'RAG': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  'LangGraph': 'https://avatars.githubusercontent.com/u/139907960',
  'CrewAI': 'https://avatars.githubusercontent.com/u/170677839',
  'GraphRAG': '/graphrag.png',
  'Neo4j': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg',
  'LlamaIndex': '/llama.png',
  'Semantic Kernel': 'https://avatars.githubusercontent.com/u/6154722',
  'PydanticAI': '/pydanticai.png',
  // ML / AI
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  'Fine-Tuning Pipeline': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
  'Raga AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  // Data & Retrieval
  'SQL DB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'DB2': '/ibm-db2.webp',
  'Qdrant': '/qdrant.png',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  // Infrastructure
  'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
  'RabbitMQ': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
  // Full-stack
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
  'C# .NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'VBA': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
}

/* Manual overrides that take precedence over the seeded value */
const OVERRIDE_PCT = { 'VBA': 60 }

/* 80–100% seeded per skill name, overridable */
function seededPct(name) {
  if (name in OVERRIDE_PCT) return OVERRIDE_PCT[name]
  const seed = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return 80 + (seed % 21)
}

const allSkills = skillGroups.flatMap((g) => g.items)


export default function Skills() {
  const [tooltip, setTooltip] = useState(null) // { name, pct }

  return (
    <section
      id="skills"
      className="snap-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        minHeight: '100dvh',
      }}
    >
      <h3 className="section-label">Skills</h3>
      <p style={{
        position: 'absolute',
        top: '8.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#9ca3af',
        fontSize: '0.72rem',
        whiteSpace: 'nowrap',
      }}>
        Hover over a skill for current proficiency
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))',
        gap: '0.875rem',
        padding: '10rem 1.5rem 2rem',
        width: '100%',
        maxWidth: '56rem',
        justifyItems: 'center',
      }}>
        {allSkills.map((skill) => {
          const pct = seededPct(skill)
          return (
            <div
              key={skill}
              onMouseEnter={() => setTooltip({ name: skill, pct })}
              onMouseLeave={() => setTooltip(null)}
            >
              <SkillIcon skill={skill} pct={pct} />
            </div>
          )
        })}
      </div>

      {/* Floating tooltip */}
      {tooltip && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(36,36,36,0.92)',
          color: '#fff',
          padding: '6px 16px',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          fontWeight: 500,
          letterSpacing: '0.04em',
          pointerEvents: 'none',
          zIndex: 50,
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(104,178,160,0.4)',
        }}>
          {tooltip.name} — {tooltip.pct}%
        </div>
      )}
    </section>
  )
}
