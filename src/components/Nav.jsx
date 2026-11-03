const links = [
  { href: '#sobre', label: 'sobre', paper: 'aged', rot: -2 },
  { href: '#projetos', label: 'projetos', paper: 'grid-paper', rot: 1.5 },
  { href: '#stack', label: 'stack', paper: 'lined', rot: -1 },
  { href: '#contato', label: 'contato', paper: 'solid', rot: 2 },
]

export default function Nav() {
  return (
    <nav className="nav" aria-label="Seções">
      <a href="#topo" className="logo">vania.dev</a>
      <div className="nav-links">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`nav-link shadow ${l.paper}`}
            style={{ transform: `rotate(${l.rot}deg)` }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
