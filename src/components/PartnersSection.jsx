import './PartnersSection.css'
import { useLang } from '../context/LangContext'

const baseUrl = import.meta.env.BASE_URL

const partnersMeta = [
  { name: 'OTK Kart Group', logo: `${baseUrl}images/otk_logo.jpeg`,       logoAlt: 'OTK Kart Group logo' },
  { name: 'Alfano',         logo: `${baseUrl}images/alfano_kart_pats.jpeg`, logoAlt: 'Alfano logo' },
  { name: 'AiMotor',        logo: `${baseUrl}images/aimotor_logo.jpg`,     logoAlt: 'AiMotor logo', darkLogo: true },
]

export default function PartnersSection() {
  const { t } = useLang()
  return (
    <section className="partners" id="partners">
      <div className="partners__container">
        <p className="partners__eyebrow">{t.partners.eyebrow}</p>
        <h2 className="partners__title">{t.partners.title}</h2>

        <div className="partners__grid">
          {partnersMeta.map((meta, i) => {
            const item = t.partners.items[i]
            return (
              <article className="partners__card" key={meta.name}>
                <div className={`partners__logo-wrap${meta.darkLogo ? ' partners__logo-wrap--dark' : ''}`}>
                  <img src={meta.logo} alt={meta.logoAlt} className="partners__logo" />
                </div>
                <p className="partners__role">{item.role}</p>
                <h3 className="partners__name">{meta.name}</h3>
                <p className="partners__description">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
