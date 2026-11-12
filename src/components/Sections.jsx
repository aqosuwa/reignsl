import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export function PageHero({ eyebrow, title, accent, lead, image, alt, actions }) {
  if (image) {
    return (
      <section className="hero2">
        <div className="hero2-card">
          <div className="hero3 hero3-sm">
            <Reveal className="hero3-copy">
              <p className="eyebrow">{eyebrow}</p>
              <h1>{title}{accent && <><br /><em>{accent}</em></>}</h1>
              <p>{lead}</p>
              {actions}
            </Reveal>
            <Reveal className="hero3-visual">
              <div className="blob"><img src={image} alt={alt} /></div>
            </Reveal>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="page-hero">
      <Reveal className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </Reveal>
    </section>
  )
}

export function SectionHead({ eyebrow, title, sub, light, gold }) {
  return (
    <Reveal className={`section-head ${light ? 'light' : ''}`}>
      <p className={`eyebrow ${gold ? 'gold' : ''}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  )
}

const pillars = [
  ['Innovation', 'Proven technology, applied thoughtfully to the real problems people in our markets face every day.'],
  ['Economic Growth', 'Reliable power keeps shops open, work moving and local technical jobs growing.'],
  ['Strategic Partnership', 'We work with trusted manufacturers, dealers, installers and financing partners to deliver well and stand behind it.'],
  ['Global Excellence', 'International standards of quality and safety, delivered with dependable local service.'],
]

export function Pillars({ eyebrow = 'Who we are', title = 'Built on four commitments' }) {
  return (
    <section className="pillars">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="pillar-grid">
          {pillars.map(([t, d], i) => (
            <Reveal as="article" className="pillar" key={t}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function VisionMission() {
  return (
    <section className="vm">
      <div className="wrap vm-grid">
        <Reveal>
          <p className="eyebrow gold">Vision</p>
          <p className="vm-text">To become a leading African energy solutions company, empowering households, businesses and industries through affordable, reliable and innovative power technologies, while driving economic development, job creation and sustainable growth across West Africa.</p>
        </Reveal>
        <Reveal>
          <p className="eyebrow gold">Mission</p>
          <p className="vm-text">To bridge Africa&rsquo;s electricity reliability gap through accessible lithium battery storage, solar-integrated technologies, strategic international partnerships and dependable local after-sales service.</p>
        </Reveal>
      </div>
    </section>
  )
}

const phases = [
  ['Years 1–2', 'Sierra Leone', 'Freetown launch and controlled pilot, then vetted dealers and technicians in Bo, Kenema and Makeni.'],
  ['Years 3–4', 'Liberia & Guinea', 'Distributor-led entry with local technical partners, subject to results at home.'],
  ['Years 5–7', 'Ghana, Côte d’Ivoire & Nigeria', 'Larger commercial channels, local warehousing and, in time, assembly partnerships.'],
]

export function Roadmap() {
  return (
    <section className="roadmap">
      <div className="wrap">
        <SectionHead
          eyebrow="Where we’re heading"
          title="Sierra Leone first. West Africa next."
          sub="We expand only when our service and customer results are proven. Each new country brings its own import, standards and service requirements."
        />
        <ol className="timeline">
          {phases.map(([when, title, text]) => (
            <Reveal as="li" key={title}>
              <span className="when">{when}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal as="p" className="source">Market sequence is provisional and depends on operational milestones.</Reveal>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="cta">
      <Reveal className="wrap">
        <h2>Customer, dealer, installer or investor?</h2>
        <p>Tell us how you&rsquo;d like to work with REIGN.</p>
        <Link to="/contact" className="btn btn-gold">Get in touch</Link>
      </Reveal>
    </section>
  )
}
