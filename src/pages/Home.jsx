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
          <div className="hero2-top">
            <Reveal as="h1" className="hero2-h1">
              <span>People.</span>
              <Link to="/contact" className="h1-pill">Work with us <i>&rarr;</i></Link>
              <span>Progress.</span>
              <em>Prosperity.</em>
            </Reveal>
            <Reveal className="hero2-side">
              <p className="eyebrow">Sierra Leone first &bull; West Africa next</p>
              <p>REIGN Energy sells and installs rechargeable lithium power systems for homes, shops and small businesses in Sierra Leone, and looks after them once they are installed.</p>
              <Link to="/energy" className="side-card"><span>Explore<br />REIGN Energy</span><i>&#8599;</i></Link>
            </Reveal>
          </div>
          <div className="hero-photo">
            <img src={asset('/assets/photos/installer.jpg')} alt="Installer fixing solar panels on a rooftop" />
          </div>
        </div>
      </section>

      <section className="statsband">
        <Reveal className="wrap statsband-grid">
          {[['5', 'power sizes', '400 Wh to 15 kWh'], ['3', 'ways to charge', 'grid, solar, generator'], ['Freetown', 'where we start', 'then Bo, Kenema and Makeni'], ['2 years', 'Sierra Leone pilot', 'before we look at other countries']].map(([n, l, d]) => (
            <div className="sb" key={l}><strong>{n}</strong><span>{l}</span><small>{d}</small></div>
          ))}
        </Reveal>
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
