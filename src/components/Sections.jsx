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
  ['Innovation', 'We use proven technology to solve the problems our customers actually have, starting with power cuts.'],
  ['Economic growth', 'Reliable power keeps shops open and people working, and it creates local technical jobs.'],
  ['Strong partnerships', 'We work with trusted manufacturers, dealers, installers and finance partners, and we stand behind what we sell.'],
  ['High standards', 'International quality and safety standards, with service you can reach locally.'],
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
          <p className="vm-text">To be a leading African energy company: affordable, reliable power for homes, businesses and industry across West Africa, and the jobs and growth that come with it.</p>
        </Reveal>
        <Reveal>
          <p className="eyebrow gold">Mission</p>
          <p className="vm-text">To close the electricity reliability gap with lithium battery storage, solar-ready systems and dependable local after-sales service, working with strong international partners.</p>
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
          sub="We only move to a new country when our service and customer results at home are proven. Every country has its own import rules, standards and service needs."
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
