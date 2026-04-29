import './Hero.css'
import { useLang } from '../context/LangContext'

const baseUrl = import.meta.env.BASE_URL

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      {/* Left: Photo with fade overlay */}
      {/* To change the hero image: place your file in public/images/ and update the src below */}
      <div className="hero__image-wrap">
        <img
          src={`${baseUrl}images/main_picture.jpeg`}
          alt="Barros Racing Team"
          className="hero__image"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="hero__image-fallback" />
        <div className="hero__image-fade" />
      </div>

      {/* Right: Content */}
      <div className="hero__content">
        <h1 className="hero__name">
          <span className="hero__name-light">BARROS</span>
          <span className="hero__name-red">RACING TEAM</span>
        </h1>

        <p className="hero__subtitle">{t.hero.subtitle}</p>

        <a href="#" className="hero__cta">{t.hero.cta}</a>
      </div>

      {/* Scroll dots */}
      <div className="hero__dots">
        <span className="hero__dot hero__dot--active" />
        <span className="hero__dot" />
        <span className="hero__dot" />
      </div>
    </section>
  )
}
