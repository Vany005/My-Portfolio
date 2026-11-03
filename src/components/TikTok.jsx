import { profile } from '../data'

export default function TikTok() {
  return (
    <section className="tiktok drop" aria-labelledby="tiktok-title">
      <div className="tiktok-inner news torn-tb">
        <span className="kicker">extra! extra!</span>
        <h2 id="tiktok-title">também tô no TikTok</h2>
        <p>
          Gosto de simplificar a tecnologia. No meu perfil, explico conceitos de dev, mostro a evolução dos meus projetos e partilho conteúdos pra quem também está nesta jornada.
        </p>
        <a href={profile.links.tiktok} target="_blank" rel="noreferrer" className="carimbo">
          {profile.tiktokUser}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </section>
  )
}
