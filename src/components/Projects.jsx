import { projects } from '../data'

const paperClass = { aged: 'aged', grid: 'grid-paper', lined: 'lined' }
const shotPaper = { aged: 'grid-paper', grid: 'news', lined: 'aged' }
// rotação, deslocamento e fita de cada cartão, como no esboço
const layout = [
  { rot: -1.5, top: 0, tape: { left: 24, transform: 'rotate(-8deg)' }, check: false },
  { rot: 1.2, top: 36, tape: { right: 24, transform: 'rotate(7deg)' }, check: true },
  { rot: -0.8, top: 12, tape: { left: '50%', marginLeft: -60, transform: 'rotate(-2deg)' }, check: false },
]

function Doodle({ text, side, color }) {
  const lines = [].concat(text)
  const label = (
    <span>
      {lines.map((line, i) => (
        <span key={line}>{i > 0 && <br />}{line}</span>
      ))}
    </span>
  )
  return side === 'right' ? (
    <div className="doodle right" style={{ color }} aria-hidden="true">
      {label}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6c14 0 24 8 26 26" /><path d="M23 26l7 7 5-9" />
      </svg>
    </div>
  ) : (
    <div className="doodle left" style={{ color }} aria-hidden="true">
      <svg width="40" height="44" viewBox="0 0 40 44" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 4C12 6 6 18 12 38" /><path d="M5 31l7 8 6-8" />
      </svg>
      {label}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const l = layout[index % layout.length]
  return (
    <article className="project drop" style={{ transform: `rotate(${l.rot}deg)`, marginTop: l.top }}>
      {project.doodle && <Doodle {...project.doodle} />}
      <div className={`tape ${l.check ? 'tape-check' : ''}`} style={{ top: -12, ...l.tape }} />
      <div className={`project-card torn-b ${paperClass[project.paper]}`}>
        <div className={`shot develop ${shotPaper[project.paper]}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt ?? `Captura de tela: ${project.title}`}
              width="960"
              height="600"
              loading="lazy"
              decoding="async"
            />
          ) : (
            project.imagePlaceholder
          )}
        </div>
        <div className="project-meta">
          <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
          <span className={`badge ${project.badgeStyle}`}>{project.badge}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <ul>
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        {project.note && <p className="project-note">{project.note}</p>}
        <div className={`tags ${project.tagColor}`}>
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} ↗<span className="sr-only"> (abre em nova aba)</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="section-head">
        <h2 className="big-h news shadow" style={{ transform: 'rotate(-2deg)' }}>projetos</h2>
        <p>do código ao impacto no mundo real</p>
        <p className="reveal-hint">passe o mouse nas fotos pra revelar →</p>
      </div>
      <div className="cols3">
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  )
}
