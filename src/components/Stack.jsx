import { stack } from '../data'

const cardRot = [-1.5, 1.2, -0.8, 1.8]
const cardTop = [0, 24, 8, 30]
const tapeRot = [-3, 4, 2, -5]
const tagRot = [-1, 1, -0.5, 1.5]

export default function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="section-head">
        <h2 className="big-h">stack</h2>
        <p>o que eu uso no dia a dia, separado por gaveta</p>
      </div>
      <div className="cols4">
        {stack.map((group, i) => (
          <div
            key={group.title}
            className="stack-card drop"
            style={{ transform: `rotate(${cardRot[i % 4]}deg)`, marginTop: cardTop[i % 4] }}
          >
            <div
              className={`tape center ${i % 2 ? 'tape-check' : ''}`}
              style={{ top: -12, transform: `rotate(${tapeRot[i % 4]}deg)` }}
            />
            <div className="index-card">
              <span className="num">ficha {String(i + 1).padStart(2, '0')}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item, j) => (
                  <li key={item} className="dymo" style={{ transform: `rotate(${tagRot[(i + j) % 4]}deg)` }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
