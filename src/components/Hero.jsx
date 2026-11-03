import { profile, year } from '../data'
import { ArrowDown, Coffee, FileDown, Star } from './Icons'

// cada letra recortada: [letra, papel/cor, fonte, rotação]
const rows = [
  [
    ['V', 'aged', 'display', -4],
    ['a', 'ink', 'mono', 3],
    ['N', 'grid-paper blue-text', 'display', -2],
    ['i', 'accent', 'hand', 5],
    ['A', 'news', 'display', -3],
  ],
  [
    ['M', 'lined', 'mono', 2],
    ['e', 'aged accent-text', 'display', -5],
    ['L', 'blue', 'display', 3],
    ['o', 'grid-paper', 'hand', -2],
  ],
]

const paperStyle = {
  ink: { background: 'var(--ink)', color: 'var(--cream)' },
  accent: { background: 'var(--accent)', color: 'var(--paper)' },
  blue: { background: 'var(--blue)', color: 'var(--cream)' },
}
const fontStyle = {
  display: { fontFamily: 'var(--display)' },
  mono: { fontFamily: 'var(--mono)', fontWeight: 700 },
  hand: { fontFamily: 'var(--hand)', fontWeight: 700 },
}

function Letter({ char, paper, font, rot }) {
  const classes = paper.split(' ')
  const style = { ...fontStyle[font], transform: `rotate(${rot}deg)`, ...paperStyle[classes[0]] }
  if (classes.includes('blue-text')) style.color = 'var(--blue)'
  if (classes.includes('accent-text')) style.color = 'var(--accent)'
  return (
    <span className={`ransom-letter shadow ${paperStyle[classes[0]] ? '' : classes[0]}`} style={style}>
      {char}
    </span>
  )
}

export default function Hero() {
  const resumeProps = profile.resume
    ? { href: profile.resume, download: '' }
    : { href: '#contato', 'aria-disabled': 'true', title: 'Currículo em breve' }

  return (
    <section id="topo" className="hero">
      <div className="hero-text">
        <div className="issue">portfólio · nº 01 · {year}</div>

        <h1 className="ransom" aria-label={profile.name}>
          {rows.map((row, i) => (
            <span className="ransom-row" aria-hidden="true" key={i}>
              {row.map(([char, paper, font, rot]) => (
                <Letter key={char + rot} char={char} paper={paper} font={font} rot={rot} />
              ))}
            </span>
          ))}
        </h1>

        <div className="role">{profile.role}</div>
        <p className="tagline">{profile.tagline}</p>

        <div className="cta">
          <a href="#projetos" className="btn btn-primary shadow">
            ver projetos <ArrowDown />
          </a>
          <a className="btn btn-secondary aged shadow" {...resumeProps}>
            <FileDown /> baixar currículo
          </a>
          <a href="#contato" className="wavy">ou bora conversar?</a>
        </div>
      </div>

      <div className="polaroid-wrap">
        <div className="tape center" style={{ top: -14, transform: 'rotate(-4deg)' }} />
        <div className="polaroid shadow">
          <div className="photo-slot grid-paper leak">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                width="512"
                height="640"
                fetchPriority="high"
              />
            ) : (
              '[sua foto]'
            )}
          </div>
          <p>{profile.photoCaption}</p>
        </div>
        <div className="stamp stamp-edge shadow" aria-hidden="true">
          <div className="stamp-inner">
            <Coffee />
            <strong>JAVA</strong>
            <small>CORREIO DEV</small>
          </div>
        </div>
        <Star size={58} color="var(--accent)" style={{ left: -36, top: 40, transform: 'rotate(-12deg)' }} />
        <Star size={34} color="var(--blue)" style={{ left: 6, bottom: -26, transform: 'rotate(14deg)' }} />
      </div>
    </section>
  )
}
