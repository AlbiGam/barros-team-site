import { useState } from 'react'
import './CalendarSection.css'
import { useLang } from '../context/LangContext'

const races = [
  {
    id: 'r1',
    dates: '14–15 MAR',
    location: 'Fátima',
    name: 'IKC ROUND 1',
    status: 'finished',
    results: {
      qualify:   [{ kart: '#530', pos: 'P1' }, { kart: '#532', pos: 'P3' }],
      preFinal:  [{ kart: '#530', pos: 'P1', extra: 'Fast Lap' }, { kart: '#532', pos: 'P2' }],
      final:     [{ kart: '#530', pos: 'P2' }, { kart: '#532', pos: 'P4' }],
    },
  },
  {
    id: 'r2',
    dates: '18–19 APR',
    location: 'Braga',
    name: 'IKC ROUND 2',
    status: 'finished',
    results: {
      qualify:   [{ kart: '#530', pos: 'P3' }, { kart: '#532', pos: 'P2' }],
      preFinal:  [{ kart: '#530', pos: 'P3' }, { kart: '#532', pos: 'P2' }],
      final:     [{ kart: '#530', pos: 'P2', extra: 'Fast Lap' }, { kart: '#532', pos: 'P1' }],
    },
  },
  { id: 'r3', dates: '16–17 MAY', location: 'Braga',          name: 'IKC ROUND 3', status: 'scheduled' },
  { id: 'r4', dates: '4–5 JUL',   location: 'Castelo Branco', name: 'IKC ROUND 4', status: 'scheduled' },
  { id: 'r5', dates: '25–27 SEP', location: 'A definir',      name: 'IKC ROUND 5', status: 'scheduled' },
  { id: 'r6', dates: '7–8 NOV',   location: 'Leiria',         name: 'IKC ROUND 6', status: 'scheduled' },
]

function ResultsPanel({ results, c }) {
  const rows = [
    { label: c.sessionQualify, data: results.qualify },
    { label: c.sessionPreFinal, data: results.preFinal },
    { label: c.sessionFinal, data: results.final },
  ]
  return (
    <div className="calendar__results">
      <table className="calendar__results-table">
        <thead>
          <tr>
            <th>{c.thSession}</th>
            <th>{c.thKart}</th>
            <th>{c.thPosition}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, data }) =>
            data.map((entry, i) => (
              <tr key={`${label}-${i}`}>
                {i === 0 && <td className="calendar__session-label" rowSpan={data.length}>{label}</td>}
                <td className="calendar__kart">{entry.kart}</td>
                <td className="calendar__pos">{entry.pos}</td>
                <td>{entry.extra ? <span className="calendar__badge-extra">{c.fastLap}</span> : null}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default function CalendarSection() {
  const [open, setOpen] = useState(null)
  const { t } = useLang()
  const c = t.calendar
  const toggleRow = (id) => setOpen((prev) => (prev === id ? null : id))

  return (
    <section className="calendar" id="calendar">
      <div className="calendar__container">

        {/* ── Hero card ── */}
        <div className="calendar__hero">
          <div className="calendar__hero-text">
            <p className="calendar__eyebrow">{c.eyebrow}</p>
            <h2 className="calendar__title">
              {c.heroTitle.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
          </div>
          <div className="calendar__hero-img-wrap">
            <img src="/images/calendar.jpeg" alt="BRT racing action" className="calendar__hero-img" />
          </div>
        </div>

        {/* ── Race rows ── */}
        <div className="calendar__list">
          {races.map((race) => (
            <div className="calendar__row-wrap" key={race.id}>
              <div
                className={`calendar__row${race.status === 'finished' ? ' calendar__row--finished' : ''}`}
                onClick={() => race.status === 'finished' && toggleRow(race.id)}
                role={race.status === 'finished' ? 'button' : undefined}
                tabIndex={race.status === 'finished' ? 0 : undefined}
                onKeyDown={(e) => e.key === 'Enter' && race.status === 'finished' && toggleRow(race.id)}
              >
                <span className="calendar__row-dates">{race.dates}</span>
                <span className="calendar__row-location">{race.location}</span>
                <span className={`calendar__status calendar__status--${race.status}`}>
                  {race.status === 'finished' ? c.finished : c.scheduled}
                </span>
                <span className="calendar__row-name">{race.name}</span>
                {race.status === 'finished' && (
                  <span className="calendar__view-results">
                    {open === race.id ? c.hideResults : c.viewResults}
                  </span>
                )}
              </div>
              {open === race.id && <ResultsPanel results={race.results} c={c} />}
            </div>
          ))}
          <p className="calendar__note">{c.note}</p>
        </div>

      </div>
    </section>
  )
}
