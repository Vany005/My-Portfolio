import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Stack from './components/Stack'
import TikTok from './components/TikTok'
import Contact from './components/Contact'
import { profile, year } from './data'

export default function App() {
  return (
    <div className="page kraft">
      {/* luz de fim de tarde + granulado de filme; apague estas duas linhas pra desligar */}
      <div className="golden-hour" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="container">
        <Nav />
        <main style={{ display: 'contents' }}>
          <Hero />
          <About />
          <Projects />
          <Stack />
          <TikTok />
          <Contact />
        </main>
        <footer className="footer">
          feito à mão (e com muito café) · © {year} {profile.name}
        </footer>
      </div>
    </div>
  )
}
