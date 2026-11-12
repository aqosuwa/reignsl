import { asset } from '../asset.js'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { CTA } from '../components/Sections.jsx'

export default function Home() {
  usePageMeta('REIGN | People. Progress. Prosperity.', 'REIGN is a company built on innovation, economic growth, strategic partnership and global excellence. REIGN Energy brings affordable lithium power to Sierra Leone first, West Africa next.')
  return (
    <>
      <section className="hero2">
        <div className="hero2-card">
          <div className="hero4">
            <Reveal as="h1" className="hero4-h1">Power Where It <em>Matters</em><br /><em>In Sierra Leone</em></Reveal>
            <Reveal className="hero3-copy hero4-body">
              <p>REIGN Energy sells and installs rechargeable lithium power systems for homes, shops and small businesses, and looks after them once they are installed.</p>
              <div className="hero3-actions">
                <Link to="/products" className="btn">See the range</Link>
                <Link to="/contact" className="btn btn-gold">Get in touch</Link>
                <Link to="/energy" className="circle-btn" aria-label="How it works">&#8599;</Link>
              </div>
              <dl className="hero3-stats">
                <div><dt>5</dt><dd>power sizes,<br />400 Wh to 15 kWh</dd></div>
                <div><dt>3</dt><dd>ways to charge:<br />grid, solar, generator</dd></div>
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
            <h2>Powering homes and businesses with <em>reliable</em> solar-ready power</h2>
            <div>
              <p>When the grid drops, shops lose sales and homes lose their evenings. We supply battery systems that keep the essentials running, and the people to install and fix them.</p>
              <Link to="/about" className="textlink">About REIGN &rarr;</Link>
            </div>
          </Reveal>
          <Reveal className="intro-grid">
            <div className="ic ic-dark">
              <span className="ic-tag">REIGN Energy</span>
              <h3>Batteries that keep the lights on</h3>
              <p>Rechargeable lithium systems from a phone-and-lights size up to a small shop, installed and looked after locally.</p>
              <Link to="/products" className="btn btn-gold btn-small">See the range</Link>
            </div>
            <div className="ic ic-photo">
              <img src={asset('/assets/photos/panel-closeup.jpg')} alt="Close-up of a solar panel being installed" />
            </div>
            <div className="ic ic-stat">
              <strong>3</strong>
              <span>ways to charge</span>
              <p>Mains, solar panels or a generator. Solar is optional, never required.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="svc-list">
        <div className="wrap svc-list-grid">
          <Reveal>
            <h2>What we <em>do</em></h2>
            <ul className="rows">
              {[
                ['The batteries', 'Five sizes, from 400 Wh to 15 kWh. Larger systems are built to order after a site visit.', '/products'],
                ['Installation', 'Qualified electricians handle the wiring, earthing and surge protection.', '/energy'],
                ['Solar-ready charging', 'Add panels now or later. The same battery charges from mains, sun or a generator.', '/energy'],
                ['Aftercare', 'Warranty claims, spare parts and repairs handled in Sierra Leone.', '/contact'],
                ['Dealers and installers', 'Stock the range or join our installer network in your town.', '/partner'],
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
            <h2>Powering with <em>purpose</em></h2>
            <Link to="/products" className="textlink">All products &rarr;</Link>
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
            <div><strong>400 Wh</strong><span>smallest system</span></div>
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
              ['Do I need solar panels?', 'No. The battery charges from the mains or a generator too. Panels can be added now or later.'],
              ['How long will it run my things?', 'It depends on what you plug in. The runtime calculator on the range page gives a quick estimate.'],
              ['Where do you work?', 'We start in Freetown, then Bo, Kenema and Makeni, with the rest of West Africa to follow.'],
              ['Who looks after it afterwards?', 'Warranty, spare parts and repairs are handled in Sierra Leone, and old batteries are collected for proper disposal.'],
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
