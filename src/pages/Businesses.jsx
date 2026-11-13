import { Link } from 'react-router-dom'
import { asset } from '../asset.js'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero, CTA } from '../components/Sections.jsx'

const does = [
  ['Sourcing', 'Quality-checked lithium systems from established manufacturers.'],
  ['Import and clearance', 'Shipping, customs and compliance handled properly.'],
  ['Retail and distribution', 'Sold to households and small businesses, and through trained local dealers.'],
  ['Solar bundles', 'Optional panels and accessories, now or later.'],
  ['Installation', 'Qualified electricians for safe wiring, earthing and surge protection.'],
  ['Warranty and spares', 'Claims, repairs and spare parts handled in Sierra Leone.'],
  ['Training and jobs', 'Technician and dealer training that creates local work.'],
  ['Battery recovery', 'Old batteries collected for responsible disposal.'],
]

export default function Businesses() {
  usePageMeta('Our businesses | REIGN', 'REIGN is a parent company. Its first business, REIGN Energy, supplies, installs and supports lithium power systems in Sierra Leone.')
  return (
    <>
      <PageHero
        eyebrow="Our businesses"
        title="One company,"
        accent="built to grow"
        lead="REIGN is the parent company. Each business under it is run with the same standards: honest advice, proper delivery and local support."
        image={asset('/assets/photos/rooftops-aerial.jpg')}
        alt="Rooftops in a residential neighbourhood"
        actions={<div className="hero3-actions"><Link to="/energy" className="btn">REIGN Energy</Link><Link to="/partner" className="btn btn-gold">Partner with us</Link></div>}
      />

      <section className="bz">
        <div className="wrap">
          <Reveal className="bz-main">
            <img src={asset('/assets/photos/panel-lift.jpg')} alt="A solar panel being lifted onto a roof" />
            <div>
              <span className="div-tag">Now launching</span>
              <h2>REIGN Energy</h2>
              <p>Our energy business supplies affordable, solar-ready lithium battery systems from 400 Wh to 15 kWh, so homes, shops and growing businesses can keep working when the grid drops.</p>
              <div className="hero3-actions">
                <Link to="/energy" className="btn">About REIGN Energy</Link>
                <Link to="/products" className="btn btn-gold">See the range</Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="ab-head" style={{ marginTop: 80 }}><p className="eyebrow">What REIGN Energy does</p><h2>From the factory to your front door</h2></Reveal>
          <div className="bz-grid">
            {does.map(([t, d], i) => (
              <Reveal className="ab-card" key={t}>
                <span className="ab-ico">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3><p>{d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="bz-next">
            <div>
              <span className="div-tag alt">Built to grow</span>
              <h2>More businesses to come</h2>
              <p>REIGN is built so new businesses can be added over time. Each will be listed here when it is ready.</p>
            </div>
            <Link to="/partner" className="btn">Partner with REIGN</Link>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  )
}
