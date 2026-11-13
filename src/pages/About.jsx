import { Link } from 'react-router-dom'
import { asset } from '../asset.js'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { Pillars, VisionMission, Roadmap } from '../components/Sections.jsx'

const P = n => asset(`/assets/photos/${n}.jpg`)
const stats = [['4', 'Core pillars'], ['1', 'Business launching'], ['4', 'Cities to start'], ['West Africa', 'Next']]
const why = [
  ['Local first', 'We start in Sierra Leone and build proper local teams, not just imports.'],
  ['Honest advice', 'We tell you what a product will really do before you buy it.'],
  ['Strong partners', 'We work with trusted manufacturers, dealers, installers and investors.'],
  ['Built to last', 'Quality checks, proper installation and local warranty support.'],
]
const gallery = ['shop-owner', 'cafe-owner', 'roof-technician', 'panel-closeup', 'panel-lift', 'installer-kneeling', 'freetown-hillside', 'rooftops-aerial']
const perks = ['Dealer and installer training', 'Genuine products with local warranty', 'Clear pricing and support', 'Room to grow across West Africa']

export default function About() {
  usePageMeta('About | REIGN', 'About REIGN: a parent company built on innovation, partnerships, economic growth and global excellence, starting in Sierra Leone.')
  return (
    <>
      <section className="ab-intro">
        <div className="wrap ab-intro-grid">
          <Reveal className="ab-collage">
            <img className="c1" src={P('shop-owner')} alt="Shop owner at her counter" />
            <img className="c2" src={P('installer-kneeling')} alt="Installer fitting a panel" />
            <img className="c3" src={P('cafe-owner')} alt="Café owner" />
            <img className="c4" src={P('rooftops-aerial')} alt="Rooftops in a residential area" />
          </Reveal>
          <Reveal>
            <h2>Powering lives, empowering nations</h2>
            <p>REIGN is a parent company built on innovation, strategic partnerships, economic growth and global excellence. We start in Sierra Leone, and our first business, REIGN Energy, brings affordable lithium power to homes, shops and small businesses.</p>
            <div className="ab-feats">
              <div><b>Built to grow</b><span>One parent company, with room for new businesses over time.</span></div>
              <div><b>Backed locally</b><span>Teams, service and support close to the people we serve.</span></div>
            </div>
            <Link to="/businesses" className="btn">Our businesses &rarr;</Link>
          </Reveal>
        </div>
      </section>

      <section className="ab-stats">
        <Reveal className="wrap ab-stats-grid">
          {stats.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </Reveal>
      </section>

      <section className="ab-why">
        <div className="wrap">
          <Reveal className="ab-head"><p className="eyebrow">Why choose us</p><h2>How REIGN does business</h2></Reveal>
          <div className="ab-why-grid">
            {why.map(([t, d], i) => (
              <Reveal className="ab-card" key={t}>
                <span className="ab-ico">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3><p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Pillars eyebrow="Our commitments" title="What we stand for" />
      <VisionMission />

      <section className="ab-gallery">
        <div className="wrap">
          <Reveal className="ab-head"><p className="eyebrow">In the field</p><h2>REIGN at work in Sierra Leone</h2></Reveal>
          <Reveal className="ab-gal-grid">
            {gallery.map((n, i) => <img key={i} src={P(n)} alt="" loading="lazy" />)}
          </Reveal>
        </div>
      </section>

      <Roadmap />

      <section className="wrap ab-cta-wrap">
        <Reveal className="ab-cta">
          <div>
            <h2>Ready to get started?</h2>
            <p>Tell us what you are looking for and we will point you to the right person.</p>
            <Link to="/contact" className="btn">Contact us</Link>
          </div>
          <img src={P('panel-lift')} alt="Panel being lifted onto a roof" />
        </Reveal>
      </section>

      <section className="wrap ab-cta-wrap">
        <Reveal className="ab-partner">
          <img src={P('roof-technician')} alt="Technician on a rooftop" />
          <div>
            <h2>Become a partner</h2>
            <p>Dealers, installers and investors: grow with REIGN as we build from Sierra Leone outward.</p>
            <ul>{perks.map(p => <li key={p}>{p}</li>)}</ul>
            <Link to="/partner" className="btn">Partner with us</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
