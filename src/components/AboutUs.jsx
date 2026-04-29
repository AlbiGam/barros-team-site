import './AboutUs.css'
import { useLang } from '../context/LangContext'

const baseUrl = import.meta.env.BASE_URL

export default function AboutUs() {
  const { t } = useLang()
  const a = t.about
  return (
    <section className="about" id="about-us">
      <div className="about__container">
        <div className="about__content">
          <p className="about__eyebrow">{a.eyebrow}</p>
          <h2 className="about__title">
            {a.title1}
            <span>{a.title2}</span>
          </h2>

          <p className="about__text">{a.p1}</p>

          <p className="about__text">{a.p2}</p>
        </div>

        <aside className="about__card">
          <div className="about__image-wrap">
            <img src={`${baseUrl}images/about_us.jpeg`} alt="Barros Racing Team kart in action" className="about__image" />
          </div>

          <div className="about__stats">
            <h3 className="about__team">BARROS RACING TEAM</h3>
            <p className="about__sub">{a.sub}</p>

            <div className="about__grid">
              <div className="about__stat"><strong>2023</strong><span>{a.stat1label}</span></div>
              <div className="about__stat"><strong>IKC</strong><span>{a.stat2label}</span></div>
              <div className="about__stat"><strong>1st</strong><span>{a.stat3label}</span></div>
              <div className="about__stat"><strong>3rd</strong><span>{a.stat4label}</span></div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
