import './ContactSection.css'
import { useLang } from '../context/LangContext'

const baseUrl = import.meta.env.BASE_URL

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

export default function ContactSection() {
  const { t } = useLang()
  const c = t.contact
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__image-col">
          <div className="contact__image-wrap">
            <img src={`${baseUrl}images/contact.jpeg`} alt="Barros Racing Team contact" className="contact__image" />
          </div>
        </div>

        <div className="contact__content">
          <p className="contact__eyebrow">{c.eyebrow}</p>
          <h2 className="contact__title">
            {c.title1}
            <span>{c.title2}</span>
          </h2>

          <p className="contact__text">{c.text}</p>

          <a href="mailto:brt.barrosracingteam@gmail.com" className="contact__email-btn">
            <MailIcon />
            brt.barrosracingteam@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
