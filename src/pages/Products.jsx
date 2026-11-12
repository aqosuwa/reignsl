import { asset } from '../asset.js'
import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero, CTA } from '../components/Sections.jsx'

const range = [
  { name: 'Power Mini', wh: 400, w: 400, fill: 18, use: 'Lights, phones, router and a fan. The essentials, kept on.' },
  { name: 'Power Home', wh: 1024, w: 1000, fill: 34, use: 'Lighting, TV, router and fans for households and kiosks.' },
  { name: 'Power Plus', wh: 2048, w: 2000, fill: 52, use: 'Home essentials plus a small fridge, for medium homes and shops.', featured: true },
  { name: 'Power Business', wh: 5120, w: 3000, fill: 76, use: 'Shops, offices and refrigeration. Larger homes and SMEs.', order: true },
  { name: 'Power Industrial', wh: 15360, w: 8000, fill: 100, use: 'Engineered fixed installations for commercial and critical loads.', order: true },
]
const fmt = n => n.toLocaleString('en-US')

function RuntimeCalc() {
  const [wh, setWh] = useState(1024)
  const [load, setLoad] = useState(250)
  const hrs = (wh * 0.85) / load
  const result = hrs >= 48 ? '2+ days' : hrs < 1 ? `${Math.round(hrs * 60)} minutes` : `${hrs.toFixed(1)} hours`
  return (
    <Reveal className="calc">
      <div className="calc-text">
        <h3>How long will it run?</h3>
        <p>A quick guide to runtime. Pick a size and tell us the average power your appliances draw.</p>
      </div>
      <form className="calc-form" onSubmit={e => e.preventDefault()}>
        <label>Power unit
          <select value={wh} onChange={e => setWh(Number(e.target.value))}>
            <option value={400}>Mini — 400 Wh</option>
            <option value={1024}>Home — 1,024 Wh</option>
            <option value={2048}>Plus — 2,048 Wh</option>
            <option value={5120}>Business — 5,120 Wh</option>
          </select>
        </label>
        <label>Average load: <output>{load} W</output>
          <input type="range" min="20" max="1500" step="10" value={load} onChange={e => setLoad(Number(e.target.value))} />
        </label>
        <div className="calc-result" aria-live="polite">
          <span>Approximate runtime</span>
          <strong>{result}</strong>
        </div>
      </form>
      <p className="fine">Estimate = capacity × 0.85 ÷ average load. Indicative only; it does not include battery ageing, idle use or motor start-up surges (fridges, pumps). Kettles, irons, cookers and air conditioners draw too much for the smaller units.</p>
    </Reveal>
  )
}

export default function Products() {
  usePageMeta('The REIGN Power range', 'Five REIGN Power sizes from 400 Wh to 15 kWh, plus a runtime estimator.')
  return (
    <>
      <PageHero image={asset('/assets/photos/panel-closeup.jpg')} alt="Solar panel being fitted on a roof" eyebrow="The range" title="REIGN" accent="Power" lead="Five sizes, from a phone charger to a workshop. We lead with Mini, Home and Plus; Business and Industrial are supplied to order after a site assessment." />
      <section className="range">
        <div className="wrap">
          <div className="cards">
            {range.map(p => (
              <Reveal as="article" className={`card ${p.featured ? 'featured' : ''}`} key={p.name}>
                <div className="batt" style={{ '--fill': `${p.fill}%` }} />
                <span className="card-n">{String(range.indexOf(p) + 1).padStart(2, '0')}</span>
                <h3>{p.name}</h3>
                <p className="spec"><b>{fmt(p.wh)} Wh</b> &middot; {fmt(p.w)} W</p>
                <p>{p.use}</p>
                {p.order && <span className="tag">Made to order</span>}
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="source">Specifications shown are design targets for the planned range. Final models, performance and availability will be confirmed at launch.</Reveal>
          <RuntimeCalc />
        </div>
      </section>
      <CTA />
    </>
  )
}
