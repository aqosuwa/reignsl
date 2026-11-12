import { asset } from '../asset.js'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { Pillars, VisionMission, CTA } from '../components/Sections.jsx'

export default function Home() {
  usePageMeta('REIGN | People. Progress. Prosperity.', 'REIGN is a company built on innovation, economic growth, strategic partnership and global excellence. REIGN Energy brings affordable lithium power to Sierra Leone first, West Africa next.')
  return (
    <>
      <section className="hero2">
        <div className="hero2-card">
          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              {[0, 1].map(k => (
                <div className="ticker-set" key={k}>
                  {['Power Mini', 'Power Home', 'Power Plus', 'Power Business', 'Power Industrial', 'Freetown', 'Bo', 'Kenema', 'Makeni', 'Solar-ready', 'Local warranty'].map(t => (
                    <span key={t}>{t}<i>&#10033;</i></span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="hero3">
            <Reveal className="hero3-copy">
              <h1>Power where<br /><em>it matters</em></h1>
              <p>REIGN Energy sells and installs rechargeable lithium power systems for homes, shops and small businesses in Sierra Leone, and looks after them once they are installed.</p>
              <div className="hero3-actions">
                <Link to="/products" className="btn">See the range</Link>
                <Link to="/contact" className="btn btn-gold">Get in touch</Link>
                <Link to="/energy" className="circle-btn" aria-label="How it works">&#8599;</Link>
              </div>
              <dl className="hero3-stats">
                <div><dt>5</dt><dd>power sizes,<br />400 Wh to 15 kWh</dd></div>
                <div><dt>3</dt><dd>ways to charge:<br />grid, solar, generator</dd></div>
                <div><dt>Freetown</dt><dd>where we start,<br />then Bo, Kenema, Makeni</dd></div>
              </dl>
            </Reveal>
            <Reveal className="hero3-visual">
              <div className="blob"><img src={asset('/assets/photos/installer.jpg')} alt="Installer fixing solar panels on a rooftop" /></div>
              <div className="float-card"><strong>Solar-ready</strong><span>Charge from the grid, panels or a generator</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="statsband">
        <Reveal className="wrap sb-head">
          <h2>Power you<br />can rely on</h2>
          <p>When the grid drops, shops lose sales and homes lose their evenings. We supply battery systems that keep the essentials running, and the people to install and fix them.</p>
          <p>Get to know us.<br /><Link to="/about">See our commitments &rarr;</Link></p>
          <img className="sb-photo" src={asset('/assets/photos/roof-technician.jpg')} alt="Technician connecting solar panel cables on a rooftop" />
        </Reveal>
      </section>

      <Pillars />
      <VisionMission />

      <section className="services">
        <div className="wrap">
          <Reveal className="services-head">
            <div>
              <p className="eyebrow gold">Our first division</p>
              <h2>REIGN Energy</h2>
            </div>
            <p>What we sell, how it is installed, and who looks after it afterwards.</p>
          </Reveal>
          {[
            ['01', 'The batteries', 'Five sizes, from one that runs lights, a phone and a router to one that runs a small shop. Larger systems are built to order after we visit the site.', '/products', 'See the range', asset('/assets/photos/cafe-owner.jpg'), 'A small business owner at work'],
            ['02', 'Installation', 'Solar panels are optional. Fixed systems are installed by qualified electricians who handle the wiring, earthing and surge protection.', '/energy', 'How we work', asset('/assets/photos/roof-technician.jpg'), 'Technician wiring solar panels on a roof'],
            ['03', 'Aftercare', 'Warranty claims, spare parts and repairs are handled in Sierra Leone, and old batteries are collected for proper disposal.', '/contact', 'Talk to us', asset('/assets/photos/installer.jpg'), 'Installer fixing solar panels'],
          ].map(([n, t, d, to, cta, img, alt], i) => (
            <Reveal className={`svc ${i % 2 ? 'alt' : ''}`} key={n}>
              <span className="svc-num">{n}</span>
              <div className="svc-body">
                <h3>{t}</h3>
                <p>{d}</p>
                <Link to={to} className="btn btn-small">{cta}</Link>
              </div>
              <img className="svc-photo" src={img} alt={alt} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
