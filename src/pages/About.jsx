import { Link } from 'react-router-dom'
import { asset } from '../asset.js'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { Pillars, VisionMission, Roadmap } from '../components/Sections.jsx'

const P = n => asset(`/assets/photos/${n}.jpg`)
const stats = [['5', 'Power sizes'], ['3', 'Ways to charge'], ['4', 'Cities to start'], ['15 kWh', 'Largest system']]
const why = [
  ['Proper installation', 'Every system is sized to your real needs and fitted by a trained technician.'],
  ['Safe lithium batteries', 'LiFePO4 chemistry with built-in protection, made for daily use.'],
  ['Local warranty', 'Support and repairs happen here in Sierra Leone, not overseas.'],
  ['Honest advice', 'We tell you how long a system will run before you buy it.'],
]
const gallery = ['shop-owner', 'cafe-owner', 'roof-technician', 'panel-closeup', 'panel-lift', 'installer-kneeling', 'freetown-hillside', 'rooftops-aerial']
const perks = ['Dealer and installer training', 'Genuine products with local warranty', 'Clear pricing and support', 'Room to grow across West Africa']

export default function About() {
  usePageMeta('About | REIGN', 'About REIGN: our commitments, vision, mission and roadmap from Sierra Leone to West Africa.')
  return (
    <>
      <section className="ab-band">
        <div className="wrap">
          <h1>About REIGN</h1>
          <p className="crumbs"><Link to="/">Home</Link> / <b>About Us</b></p>
        </div>
      </section>

      <section className="ab-intro">
        <div className="wrap ab-intro-grid">
          <Reveal className="ab-collage">
            <img className="c1" src={P('shop-owner')} alt="Shop owner at her counter" />
            <img className="c2" src={P('installer-kneeling')} alt="Installer fitting a panel" />
            <img className="c3" src={P('cafe-owner')} alt="Café owner" />
            <img className="c4" src={P('rooftops-aerial')} alt="Rooftops in a residential area" />
          </Reveal>
          <Reveal>
            <h2>Built to keep the power on</h2>
            <p>REIGN is a new company starting in Sierra Leone. Our first division, REIGN Energy, sells and installs rechargeable lithium batteries so homes, shops and small businesses can keep working when the grid goes down.</p>
            <div className="ab-feats">
              <div><b>Simple to run</b><span>Plug in, charge from the grid, solar or a generator.</span></div>
              <div><b>Backed locally</b><span>Installation and warranty support close to you.</span></div>
            </div>
            <Link to="/contact" className="btn">Contact us &rarr;</Link>
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
          <Reveal className="ab-head"><p className="eyebrow">Why choose us</p><h2>We provide power you can count on</h2></Reveal>
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
          <Reveal className="ab-head"><p className="eyebrow">In the field</p><h2>Power at work in Sierra Leone</h2></Reveal>
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
            <p>Tell us what you need to power and we will recommend the right system.</p>
            <Link to="/products" className="btn">See the range</Link>
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
