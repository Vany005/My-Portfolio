import { profile } from '../data'
import { Heart } from './Icons'

export default function Contact() {
  const { links } = profile
  return (
    <section id="contato" className="contact">
      <div className="envelope-wrap">
        <div className="envelope aged shadow">
          <div className="flap" aria-hidden="true" />
          <div className="seal" aria-hidden="true">V</div>
          <div className="stamp-small stamp-edge" aria-hidden="true">
            <div><Heart /></div>
          </div>
          <h2>manda uma cartinha</h2>
          <p>tem um projeto em mente? bora tirar ele do papel</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="email link-44">{profile.email}</a>
            <div className="row">
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="link-44">LinkedIn ↗</a>
              <a href={links.github} target="_blank" rel="noreferrer" className="link-44">GitHub ↗</a>
              <a href={links.tiktok} target="_blank" rel="noreferrer" className="link-44">TikTok ↗</a>
              {profile.resume && (
                <a href={profile.resume} download className="link-44">Currículo (PDF) ↓</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
