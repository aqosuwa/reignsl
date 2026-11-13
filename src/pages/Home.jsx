import { asset } from '../asset.js'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { CTA } from '../components/Sections.jsx'

export default function Home() {
  usePageMeta('REIGN | Powering Lives. Empowering Nations.', 'REIGN is a company built on innovation, economic growth, strategic partnership and global excellence. REIGN Energy brings affordable lithium power to Sierra Leone first, West Africa next.')
  return (
    <>
      <section className="hero2">
        <div className="hero2-card">
          <div className="hero4">
            <Reveal as="h1" className="hero4-h1">Powering <em>Lives.</em><br /><em>Empowering</em> Nations</Reveal>
            <Reveal className="hero3-copy hero4-body">
              <p>REIGN is a Sierra Leone company built on innovation, partnerships and economic growth. Our first business, REIGN Energy, brings reliable lithium power to homes and businesses.</p>
              <div className="hero3-actions">
                <Link to="/businesses" className="btn">Our businesses</Link>
                <Link to="/contact" className="btn btn-gold">Get in touch</Link>
                <Link to="/about" className="circle-btn" aria-label="About REIGN">&#8599;</Link>
              </div>
              <dl className="hero3-stats">
                <div><dt>4</dt><dd>pillars: innovation,<br />growth, partnership, excellence</dd></div>
                <div><dt>1</dt><dd>business launching:<br />REIGN Energy</dd></div>
                <div><dt>4</dt><dd>cities: Freetown, Bo,<br />Kenema, Makeni</dd></div>
              </dl>
            </Reveal>
            <Reveal className="hero4-visual">
              <img src={asset('/assets/hero-island.svg')} alt="Floating island with solar panels, wind turbines, trees and homes" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <Reveal className="intro-head">
            <h2>A company built to <em>power progress</em> across Africa</h2>
            <div>
              <p>REIGN brings together innovation, strategic partnerships and local know-how to build businesses that create jobs and lift economies. We begin in Sierra Leone and grow across West Africa, one proven step at a time.</p>
              <Link to="/about" className="textlink">About REIGN &rarr;</Link>
            </div>
          </Reveal>
          <Reveal className="intro-grid">
            <div className="ic ic-dark">
              <span className="ic-tag">Our first business</span>
              <h3>REIGN Energy</h3>
              <p>Rechargeable lithium power systems for homes, shops and small businesses, installed and looked after locally.</p>
              <Link to="/energy" className="btn btn-gold btn-small">Explore REIGN Energy</Link>
            </div>
            <div className="ic ic-photo">
              <img src={asset('/assets/photos/rooftops-aerial.jpg')} alt="Rooftops in a residential neighbourhood" />
            </div>
            <div className="ic ic-stat">
              <strong>SL</strong>
              <span>Sierra Leone first</span>
              <p>Freetown first, then Bo, Kenema and Makeni. The rest of West Africa follows once we have proved the model.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="divs">
        <div className="wrap">
          <Reveal className="ab-head"><p className="eyebrow">Our businesses</p><h2>What REIGN <em>does</em></h2></Reveal>
          <Reveal className="divs-grid">
            <Link to="/energy" className="div-card div-main">
              <img src={asset('/assets/photos/panel-lift.jpg')} alt="A solar panel being lifted onto a roof" />
              <div>
                <span className="div-tag">Now launching</span>
                <h3>REIGN Energy</h3>
                <p>Affordable lithium battery systems from 400 Wh to 15 kWh, solar-ready, with installation, warranty and spare parts handled in Sierra Leone.</p>
                <span className="div-go">Explore &rarr;</span>
              </div>
            </Link>
            <div className="div-card div-next">
              <span className="div-tag alt">Built to grow</span>
              <h3>More to come</h3>
              <p>REIGN is a parent company, so new businesses can be added over time. Each one will be listed here when it is ready.</p>
              <Link to="/partner" className="textlink">Partner with REIGN &rarr;</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="svc-list">
        <div className="wrap svc-list-grid">
          <Reveal>
            <h2>How we <em>work</em></h2>
            <ul className="rows">
              {[
                ['Innovation', 'We choose proven technology and adapt it to how people really live and work here.', '/about'],
                ['Strategic partnerships', 'We work with trusted manufacturers, dealers, installers and investors.', '/partner'],
                ['Sourcing and supply', 'Quality-checked products, imported and cleared properly, then distributed through local dealers.', '/businesses'],
                ['Installation and aftercare', 'Qualified electricians, local warranty, spare parts and repairs.', '/energy'],
                ['Training and local jobs', 'We grow technician skills and create work wherever we operate.', '/partner'],
              ].map(([t, d, to], i) => (
                <li key={t}>
                  <Link to={to}>
                    <span className="row-n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="row-t"><b>{t}</b><small>{d}</small></span>
                    <span className="row-a">&#8599;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="svc-list-photo">
            <img src={asset('/assets/photos/roof-technician.jpg')} alt="Technician connecting solar panel cables on a rooftop" />
          </Reveal>
        </div>
      </section>

      <section className="purpose">
        <div className="wrap">
          <Reveal className="purpose-head">
            <h2>REIGN Energy <em>in action</em></h2>
            <Link to="/products" className="textlink">See the range &rarr;</Link>
          </Reveal>
          <Reveal className="purpose-grid">
            {[
              ['For shops', 'Keep the fridge, lights and card machine running through a power cut.', '/assets/photos/shop-owner.jpg', 'A shop owner in her shop', '/products'],
              ['For small businesses', 'Cafes, salons and workshops that cannot afford to stop when the grid does.', '/assets/photos/cafe-owner.jpg', 'A small business owner at work', '/products'],
            ].map(([t, d, img, alt, to]) => (
              <Link to={to} className="pc" key={t}>
                <img src={asset(img)} alt={alt} />
                <div><b>{t}</b><span>{d}</span></div>
              </Link>
            ))}
            <div className="pc-text">
              <p>Every system is sold with installation and a local warranty, so there is someone to call when something needs fixing.</p>
              <Link to="/contact" className="btn btn-small">Talk to us</Link>
            </div>
            <Link to="/energy" className="pc pc-wide">
              <img src={asset('/assets/photos/installer-kneeling.jpg')} alt="Installer tightening a solar panel clamp on a rooftop" />
              <div><b>Installed properly</b><span>How we survey, install and hand over a system.</span></div>
            </Link>
          </Reveal>
          <Reveal className="numbers">
            <div><strong>5</strong><span>power sizes</span></div>
            <div><strong>3</strong><span>ways to charge: grid, solar, generator</span></div>
            <div><strong>15 kWh</strong><span>largest standard system</span></div>
            <div><strong>4</strong><span>cities: Freetown, Bo, Kenema, Makeni</span></div>
          </Reveal>
        </div>
      </section>

      <section className="faq">
        <div className="wrap faq-grid">
          <Reveal className="faq-photo">
            <img src={asset('/assets/photos/freetown-hillside.jpg')} alt="Freetown homes on a hillside at dusk" />
          </Reveal>
          <Reveal>
            <h2>Questions <em>people ask</em></h2>
            {[
              ['What is REIGN?', 'REIGN is a parent company built on innovation, economic growth, strategic partnerships and global excellence, starting in Sierra Leone.'],
              ['What does REIGN Energy do?', 'It supplies, installs and looks after rechargeable lithium power systems for homes, shops and small businesses.'],
              ['Where do you work?', 'We start in Freetown, then Bo, Kenema and Makeni, with the rest of West Africa to follow.'],
              ['Do I need solar panels?', 'No. The batteries charge from the mains or a generator too. Panels can be added now or later.'],
              ['Can I work with REIGN?', 'Yes. We are looking for dealers, installers, investors and partners. Use the Partner page to tell us how.'],
            ].map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
