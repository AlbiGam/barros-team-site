import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    nav: {
      about: 'ABOUT',
      services: 'SERVICES',
      calendar: 'CALENDAR',
      partners: 'PARTNERS',
      contact: 'CONTACT',
    },
    hero: {
      subtitle: 'Portuguese Racing Team',
      cta: 'LEARN MORE',
    },
    about: {
      eyebrow: '02 · ABOUT US',
      title1: 'ABOUT',
      title2: 'US',
      p1: 'Barros Racing Team (BRT) is a karting team currently competing in the Iberian Kart Championship by Epicevents (IKC). BRT was founded in 2023 and made its competitive debut in events such as the Kart Euroindy Trophy and the Iberian Kart Championship, achieving impressive results right from the start.',
      p2: 'In 2024, following the excellent results of 2023, we decided to officially enter competitions by joining the IKC in the 4-stroke kart category. It was a year of many ups and downs and challenges, but above all a year of learning, from which we emerged once again with excellent results, including the 4-stroke light class championship title for our driver Antonio Barros, and the titles of 3rd best rookie of the year and 3rd in the 4-stroke light class for our driver Manuel Barros.',
      sub: 'PORTUGAL · EST. 2023',
      stat1label: 'Team Founded',
      stat2label: 'Current Championship',
      stat3label: '4-Stroke Light Title',
      stat4label: 'Best Rookie Placement',
    },
    services: {
      eyebrow: '04 · SERVICES',
      title: 'WHAT WE OFFER',
      items: [
        { title: 'Tuned Engines Rental',       description: 'High-performance tuned engines available for race weekends and testing sessions.' },
        { title: 'Tent Space & Paddock Support', description: 'A reserved place under the BRT tent with full team environment during events.' },
        { title: 'Driver Coaching',             description: 'Trackside coaching focused on race craft, consistency, data review, and confidence.' },
        { title: 'Mechanical Service',          description: 'Professional mechanicing support including setup, maintenance, and race prep.' },
      ],
    },
    calendar: {
      eyebrow: '03 · CALENDAR',
      heroTitle: '2026 RACING\nSEASON\nCALENDAR',
      finished: 'FINISHED',
      scheduled: 'SCHEDULED',
      viewResults: 'VIEW RESULTS +',
      hideResults: 'HIDE RESULTS −',
      thSession: 'Session',
      thKart: 'Kart',
      thPosition: 'Position',
      sessionQualify: 'Qualifying',
      sessionPreFinal: 'Pre-Final',
      sessionFinal: 'Final',
      fastLap: 'Fast Lap',
      note: '*subject to change',
    },
    partners: {
      eyebrow: '05 · PARTNERS',
      title: 'MAIN PARTNERS',
      items: [
        { role: 'Chassis Partner',    description: 'Supplying high-performance chassis solutions to support BRT race and test programs.' },
        { role: 'Telemetry Partner',  description: 'Providing telemetry systems and race data tools for precise on-track performance analysis.' },
        { role: 'AI Coaching Partner', description: 'Delivering AI-powered coaching insights to help drivers improve pace, consistency, and race craft.' },
      ],
    },
    contact: {
      eyebrow: '06 · CONTACT',
      title1: 'GET IN',
      title2: 'TOUCH',
      text: "Interested in partnering with BRT, joining our team, or just want to know more about what we do? Drop us a message and we'll get back to you as soon as possible.",
    },
  },

  pt: {
    nav: {
      about: 'SOBRE',
      services: 'SERVIÇOS',
      calendar: 'CALENDÁRIO',
      partners: 'PARCEIROS',
      contact: 'CONTACTO',
    },
    hero: {
      subtitle: 'Equipa Portuguesa de Karting',
      cta: 'SABER MAIS',
    },
    about: {
      eyebrow: '02 · SOBRE NÓS',
      title1: 'SOBRE',
      title2: 'NÓS',
      p1: 'O Barros Racing Team (BRT) é uma equipa de karting que compete atualmente no Campeonato Ibérico de Kart da Epicevents (IKC). O BRT foi fundado em 2023 e fez a sua estreia competitiva em eventos como o Kart Euroindy Trophy e o Campeonato Ibérico de Kart, alcançando resultados impressionantes desde o início.',
      p2: 'Em 2024, na sequência dos excelentes resultados de 2023, decidimos entrar oficialmente nas competições ao integrar o IKC na categoria de kart 4 tempos. Foi um ano de muitos altos e baixos e desafios, mas acima de tudo um ano de aprendizagem, do qual saímos novamente com excelentes resultados, incluindo o título de campeão da classe 4 tempos light para o nosso piloto António Barros, e os títulos de 3.º melhor rookie do ano e 3.º na classe 4 tempos light para o nosso piloto Manuel Barros.',
      sub: 'PORTUGAL · FUND. 2023',
      stat1label: 'Fundação',
      stat2label: 'Campeonato Atual',
      stat3label: 'Título 4T Light',
      stat4label: 'Melhor Rookie',
    },
    services: {
      eyebrow: '04 · SERVIÇOS',
      title: 'O QUE OFERECEMOS',
      items: [
        { title: 'Aluguer de Motores Preparados', description: 'Motores de alta performance disponíveis para fins de semana de corrida e sessões de treino.' },
        { title: 'Espaço de Tenda & Apoio Paddock', description: 'Lugar reservado sob a tenda BRT com ambiente de equipa completo durante os eventos.' },
        { title: 'Coaching de Piloto',              description: 'Coaching junto à pista focado na arte da corrida, consistência, análise de dados e confiança.' },
        { title: 'Serviço Mecânico',                description: 'Apoio mecânico profissional incluindo setup, manutenção e preparação para a corrida.' },
      ],
    },
    calendar: {
      eyebrow: '03 · CALENDÁRIO',
      heroTitle: 'CALENDÁRIO\nDA ÉPOCA\n2026',
      finished: 'TERMINADO',
      scheduled: 'AGENDADO',
      viewResults: 'VER RESULTADOS +',
      hideResults: 'ESCONDER −',
      thSession: 'Sessão',
      thKart: 'Kart',
      thPosition: 'Posição',
      sessionQualify: 'Qualificação',
      sessionPreFinal: 'Pré-Final',
      sessionFinal: 'Final',
      fastLap: 'Volta Rápida',
      note: '*sujeito a alterações',
    },
    partners: {
      eyebrow: '05 · PARCEIROS',
      title: 'PRINCIPAIS PARCEIROS',
      items: [
        { role: 'Parceiro de Chassis',    description: 'Fornecimento de soluções de chassis de alta performance para apoiar os programas de corrida e testes do BRT.' },
        { role: 'Parceiro de Telemetria', description: 'Fornecimento de sistemas de telemetria e ferramentas de dados de corrida para análise precisa de desempenho em pista.' },
        { role: 'Parceiro AI Coaching',   description: 'Insights de coaching com inteligência artificial para ajudar os pilotos a melhorar ritmo, consistência e arte da corrida.' },
      ],
    },
    contact: {
      eyebrow: '06 · CONTACTO',
      title1: 'ENTRE EM',
      title2: 'CONTACTO',
      text: 'Interessado em fazer parceria com o BRT, juntar-se à nossa equipa ou simplesmente saber mais sobre o que fazemos? Envie-nos uma mensagem e responderemos o mais brevemente possível.',
    },
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggle = () => setLang((l) => (l === 'en' ? 'pt' : 'en'))
  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
