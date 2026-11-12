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
      <PageHero eyebrow="REIGN Energy" title="Power where it matters" lead="Rechargeable, solar-ready lithium power for homes, shops and businesses. Powering Lives. Empowering Nations." />

      <section className="photo-band">
        <Reveal className="band-inner"><img src={asset('/assets/photos/installer.jpg')} alt="Installer fixing solar panels on a rooftop" /></Reveal>
      </section>

      <section className="energy">
        <div className="wrap">
          <SectionHead eyebrow="The need" title="Reliable power is still out of reach for most" />
          <Reveal className="stats">
            <div className="stat"><strong>~30%</strong><span>of Sierra Leone has access to electricity</span></div>
            <div className="stat"><strong>&lt;5%</strong><span>access in rural areas</span></div>
            <div className="stat"><strong>3</strong><span>ways to charge: grid, solar, approved generator</span></div>
          </Reveal>
          <Reveal as="p" className="source">Access figures: U.S. International Trade Administration, Sierra Leone Energy Infrastructure, January 2026.</Reveal>

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

      <section className="how">
        <div className="wrap">
          <SectionHead light gold eyebrow="How we work" title="Quality you can rely on, service you can reach" />
          <div className="steps">
            {steps.map(([t, d], i) => (
              <Reveal className="step" key={t}><span>{i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </div>
          <Reveal as="ul" className="quality">
            {quality.map(q => <li key={q}>{q}</li>)}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
