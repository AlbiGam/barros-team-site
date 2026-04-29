import './ServicesSection.css'
import { useLang } from '../context/LangContext'

export default function ServicesSection() {
  const { t } = useLang()
  return (
    <section className="services" id="services">
      <div className="services__container">
        <p className="services__eyebrow">{t.services.eyebrow}</p>
        <h2 className="services__title">{t.services.title}</h2>

        <div className="services__grid">
          {t.services.items.map((service) => (
            <article className="services__card" key={service.title}>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-text">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
