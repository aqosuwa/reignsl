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
              <p>REIGN is built on innovation, economic growth, strategic partnership and global excellence. Our first division, REIGN Energy, brings affordable, reliable power to homes, shops and growing businesses.</p>
              <Link to="/energy" className="side-card"><span>Explore<br />REIGN Energy</span><i>&#8599;</i></Link>
            </Reveal>
          </div>
          <div className="landscape" aria-hidden="true">
            <svg className="land-svg" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMax slice">
              <defs>
                <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#ffe9a8" stopOpacity=".95" /><stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="600" cy="250" r="230" fill="url(#halo)" />
              <g stroke="#c08a44" strokeWidth="3" strokeLinecap="round" opacity=".55">
                {Array.from({ length: 48 }, (_, i) => {
                  const a = (Math.PI * 2 * i) / 48
                  return <line key={i} x1={600 + Math.cos(a) * 150} y1={250 + Math.sin(a) * 150} x2={600 + Math.cos(a) * (i % 2 ? 176 : 190)} y2={250 + Math.sin(a) * (i % 2 ? 176 : 190)} />
                })}
              </g>
              <path d="M0 330 L120 250 L210 310 L330 200 L470 320 L560 270 L700 340 L820 230 L960 320 L1080 260 L1200 330 L1200 520 L0 520Z" fill="#b9cfc4" opacity=".75" />
              <path d="M0 380 C150 320 260 350 400 340 C560 330 640 390 800 370 C960 350 1080 330 1200 360 L1200 520 L0 520Z" fill="#5f9a74" />
              <path d="M0 430 C200 390 380 430 560 415 C760 400 960 440 1200 405 L1200 520 L0 520Z" fill="#2f6e4b" />
              <path d="M0 480 C240 455 480 485 700 470 C900 458 1050 480 1200 462 L1200 520 L0 520Z" fill="#163a27" />
            </svg>
            <span className="chip c1">Solar-ready</span>
            <span className="chip c2">2,048 Wh</span>
            <span className="chip c3">Grid &middot; Solar &middot; Generator</span>
            <span className="chip c4">Pure sine wave</span>
            <div className="station">
              <div className="screen"><b>86%</b><span>REIGN Power</span></div>
              <div className="bar"><i /></div>
              <div className="ports"><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="statsband">
        <Reveal className="wrap statsband-grid">
          {[['5', 'power sizes', '400 Wh to 15 kWh'], ['3', 'ways to charge', 'grid, solar, generator'], ['4', 'cities in our pilot plan', 'Freetown, Bo, Kenema, Makeni'], ['3,000+', 'cycle design target', 'built to last']].map(([n, l, d]) => (
            <div className="sb" key={l}><strong>{n}</strong><span>{l}</span><small>{d}</small></div>
          ))}
        </Reveal>
        <Reveal className="wrap sb-head">
          <h2>Power you<br />can rely on</h2>
          <p>We help homes and businesses stay powered with safe, solar-ready lithium storage, installed and supported locally.</p>
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
            <p>Affordable, solar-ready lithium power for homes, shops and growing businesses. Powering Lives. Empowering Nations.</p>
          </Reveal>
          {[
            ['01', 'Power systems', 'Five LiFePO4 sizes from 400 Wh to 15 kWh, with pure sine-wave output and a robust battery management system.', '/products', 'See the range', asset('/assets/photos/cafe-owner.jpg'), 'A small business owner at work'],
            ['02', 'Solar & installation', 'Optional solar bundles and qualified installers for fixed systems, with proper isolation, earthing and surge protection.', '/energy', 'How we work', asset('/assets/photos/roof-technician.jpg'), 'Technician wiring solar panels on a roof'],
            ['03', 'Support & warranty', 'Local warranty handling, spare parts, diagnostics and responsible battery recovery, so you are never left on your own.', '/contact', 'Talk to us', asset('/assets/photos/installer.jpg'), 'Installer fixing solar panels'],
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
