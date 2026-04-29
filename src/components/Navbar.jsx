import { useState } from 'react'
import './Navbar.css'
import { useLang } from '../context/LangContext'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
)

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

export default function Navbar() {
  const { lang, t, toggle } = useLang()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Left: Logo + socials */}
        <div className="navbar__left">
          <div className="navbar__logo">
            <img src="/images/logo.jpeg" alt="Barros Racing Team logo" className="navbar__logo-image" />
          </div>
          <div className="navbar__socials">
            <a href="#" aria-label="Instagram" className="navbar__social-link">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="TikTok" className="navbar__social-link">
              <TikTokIcon />
            </a>
          </div>
        </div>

        {/* Right: Nav links + language */}
        <div className="navbar__right">
          <ul className="navbar__links">
            <li><a href="#about-us" className="navbar__link navbar__link--active">{t.nav.about}</a></li>
            <li><a href="#services" className="navbar__link">{t.nav.services}</a></li>
            <li><a href="#calendar" className="navbar__link">{t.nav.calendar}</a></li>
            <li><a href="#partners" className="navbar__link">{t.nav.partners}</a></li>
            <li><a href="#contact" className="navbar__link">{t.nav.contact}</a></li>
          </ul>
          <button className="navbar__lang" onClick={toggle}>
            {lang === 'en' ? 'EN' : 'PT'} <ChevronDown />
          </button>
        </div>

        <button
          className="navbar__menu-btn"
          type="button"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {isMobileMenuOpen && <div className="navbar__mobile-overlay" onClick={closeMobileMenu} />}

      <aside
        id="mobile-nav-panel"
        className={`navbar__mobile-panel${isMobileMenuOpen ? ' navbar__mobile-panel--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="navbar__mobile-top">
          <button className="navbar__mobile-close" type="button" onClick={closeMobileMenu} aria-label="Close menu">
            x
          </button>
        </div>

        <ul className="navbar__mobile-links">
          <li><a href="#about-us" className="navbar__mobile-link" onClick={closeMobileMenu}>{t.nav.about}</a></li>
          <li><a href="#services" className="navbar__mobile-link" onClick={closeMobileMenu}>{t.nav.services}</a></li>
          <li><a href="#calendar" className="navbar__mobile-link" onClick={closeMobileMenu}>{t.nav.calendar}</a></li>
          <li><a href="#partners" className="navbar__mobile-link" onClick={closeMobileMenu}>{t.nav.partners}</a></li>
          <li><a href="#contact" className="navbar__mobile-link" onClick={closeMobileMenu}>{t.nav.contact}</a></li>
        </ul>

        <button
          className="navbar__mobile-lang"
          type="button"
          onClick={() => {
            toggle()
            closeMobileMenu()
          }}
        >
          {lang === 'en' ? 'EN' : 'PT'} <ChevronDown />
        </button>
      </aside>
    </nav>
  )
}
