import { about, now, profile } from '../data'

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="notebook drop">
        <div className="tape tape-check" style={{ top: -12, left: 40, transform: 'rotate(-6deg)' }} />
        <div className="notebook-page lined torn-b">
          <h2>sobre mim</h2>
          {about.map((p) =>
            Array.isArray(p) ? (
              <p key={p[0]}>
                {p[0]} <strong className="marker">{p[1]}</strong>
              </p>
            ) : (
              <p key={p}>{p}</p>
            ),
          )}
        </div>
      </div>

      <div className="about-side">
        <div className="sticky shadow">
          <div className="tape center" style={{ top: -14, transform: 'rotate(3deg)' }} />
          <h3>agora mesmo</h3>
          <ul>
            {now.map(([what, value, href]) => (
              <li key={what}>
                {what} →{' '}
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer">
                    {value} ↗<span className="sr-only"> (abre em nova aba)</span>
                  </a>
                ) : (
                  value
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="ticket aged shadow">
          <div className="ticket-stub" aria-hidden="true">ADMIT ONE</div>
          <div className="ticket-body">
            <span className="label">status</span>
            <span className="status">aberta a freelas &amp; projetos</span>
            <span className="aside">(e a vagas CLT também)</span>
            <span className="where">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
