import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import CalendarSection from './components/CalendarSection'
import ServicesSection from './components/ServicesSection'
import PartnersSection from './components/PartnersSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <CalendarSection />
        <ServicesSection />
        <PartnersSection />
        <ContactSection />
      </main>
    </LangProvider>
  )
}
