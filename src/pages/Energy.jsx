import { asset } from '../asset.js'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero, SectionHead, CTA } from '../components/Sections.jsx'

const steps = [
  ['Source', 'Quality-checked LiFePO4 systems from vetted manufacturers, with test reports and traceable cells.'],
  ['Import', 'Safe lithium shipping and proper customs clearance, handled by licensed partners.'],
  ['Install', 'Qualified electricians for fixed systems: isolation, earthing and surge protection done right.'],
  ['Support', 'Local warranty handling, spare parts, diagnostics and responsible battery recovery.'],
]
const quality = [
  'LiFePO4 cells with a robust battery management system',
  '230 V / 50 Hz pure sine-wave output',
  'Protection against overload, short-circuit, overcharge and heat',
  'Repairable modules and available spare parts',
  'Serial-number traceability on every unit',
  'Transport and electrical standards verified before we ship',
]

export default function Energy() {
  usePageMeta('REIGN Energy | Power where it matters', 'REIGN Energy: affordable, solar-ready lithium power systems for homes, shops and businesses in Sierra Leone.')
  return (
    <>
      <PageHero image={asset('/assets/photos/panel-lift.jpg')} alt="Installer lifting a solar panel on a rooftop" eyebrow="REIGN Energy" title="Power where" accent="it matters" lead="Rechargeable, solar-ready lithium power for homes, shops and businesses. Powering Lives. Empowering Nations." />

      <section className="energy">
        <div className="wrap">
          <div className="stat-sec">
            <Reveal className="stat-left">
              <p className="eyebrow">The gap</p>
              <h2 className="h2x">Reliable power is still out of <em>reach</em> for most</h2>
              <p className="stat-lead">Most people in Sierra Leone live without a dependable electricity supply, and in rural areas almost no one has it. Batteries bridge that gap, one home or shop at a time.</p>
              <p className="source">Access figures: U.S. International Trade Administration, Sierra Leone Energy Infrastructure, January 2026.</p>
            </Reveal>
            <Reveal className="stat-right">
              <div className="sc sc-main">
                <span className="sc-label">Access to electricity</span>
                <strong>~30%</strong>
                <div className="bar"><i style={{width:'30%'}} /></div>
                <small>of Sierra Leone has access, so about 7 in 10 people do not</small>
              </div>
              <div className="sc sc-dark">
                <span className="sc-label">Rural areas</span>
                <strong>&lt;5%</strong>
                <div className="bar"><i style={{width:'5%'}} /></div>
                <small>have access</small>
              </div>
              <div className="sc sc-light">
                <span className="sc-label">Our answer</span>
                <strong>3</strong>
                <ul className="ways"><li>Grid</li><li>Solar</li><li>Generator</li></ul>
                <small>ways to charge a REIGN system</small>
              </div>
            </Reveal>
          </div>

          <div className="two-col">
            <Reveal>
              <h3>The problem</h3>
              <p>Outages are frequent and supply is seasonal. Petrol and diesel generators fill the gap, but bring fuel costs, noise and constant maintenance. For a small shop, a clinic counter or a family home, an outage means lost sales, spoiled food and lost evenings.</p>
            </Reveal>
            <Reveal>
              <h3>Our answer</h3>
              <p>Safe LiFePO4 battery systems that store power when it is available and deliver it when it is not, charged from the grid, from solar panels, or from a generator as a fallback. We back them with honest runtime advice, proper installation and local warranty support.</p>
            </Reveal>
          </div>
          <Reveal as="p" className="note">Batteries store energy; they do not generate it. Battery size sets how long you can run, and inverter wattage sets how much you can run at once. We will always help you size a system to match your real needs.</Reveal>
        </div>
      </section>

      <section className="energy-more">
        <div className="wrap">
          <Reveal><h2 className="h2x">Why <em>lithium</em> beats a generator</h2></Reveal>
          <Reveal className="cmp">
            <div className="cmp-row cmp-head"><span></span><span>REIGN lithium system</span><span>Petrol / diesel generator</span></div>
            <div className="cmp-row"><span>Running cost</span><span>No fuel once installed</span><span>Fuel bought every week</span></div>
            <div className="cmp-row"><span>Noise</span><span>Silent</span><span>Loud, disturbs neighbours</span></div>
            <div className="cmp-row"><span>Maintenance</span><span>Almost none</span><span>Oil, filters, servicing</span></div>
            <div className="cmp-row"><span>Switch-over</span><span>Automatic, no gap</span><span>Start it by hand</span></div>
            <div className="cmp-row"><span>Safety indoors</span><span>No fumes</span><span>Fumes, must run outside</span></div>
            <div className="cmp-row"><span>Battery life</span><span>Thousands of charge cycles</span><span>Engine wears with hours</span></div>
          </Reveal>

          <Reveal><h2 className="h2x" style={{marginTop:72}}>Who it is <em>for</em></h2></Reveal>
          <Reveal className="uses">
            <div className="use"><b>Homes</b><p>Keep lights, fans, TV, phones and the fridge on through the evening, with no fuel run.</p></div>
            <div className="use"><b>Shops and kiosks</b><p>Keep lights, card readers and freezers running so you do not lose sales or stock.</p></div>
            <div className="use"><b>Offices and cafés</b><p>Laptops, routers, coffee machines and tills stay up through every cut.</p></div>
            <div className="use"><b>Clinics and workshops</b><p>Steady power for small equipment, with room to grow as you add more.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="svc-list how2">
        <div className="wrap svc-list-grid">
          <Reveal>
            <h2>How we <em>work</em></h2>
            <ul className="rows">
              {steps.map(([t, d], i) => (
                <li key={t}>
                  <div className="ri">
                    <span className="row-n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="row-t"><b>{t}</b><small>{d}</small></span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="svc-list-photo">
            <img src={asset('/assets/photos/roof-technician.jpg')} alt="Technician connecting solar panel cables on a rooftop" />
          </Reveal>
        </div>
        <div className="wrap">
          <Reveal as="ul" className="quality">
            {quality.map(q => <li key={q}>{q}</li>)}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
