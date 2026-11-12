import { asset } from '../asset.js'
import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero, CTA } from '../components/Sections.jsx'

const range = [
  { name: 'Power Mini', wh: 400, w: 400, fill: 18, tags: ['Lights', 'Phones', 'Router'], use: 'Lights, phones, router and a fan. The essentials, kept on.' },
  { name: 'Power Home', wh: 1024, w: 1000, fill: 34, tags: ['TV', 'Fans', 'Lighting'], use: 'Lighting, TV, router and fans for households and kiosks.' },
  { name: 'Power Plus', wh: 2048, w: 2000, fill: 52, tags: ['Small fridge', 'TV', 'Router'], use: 'Home essentials plus a small fridge, for medium homes and shops.', featured: true },
  { name: 'Power Business', wh: 5120, w: 3000, fill: 76, tags: ['Refrigeration', 'Shops', 'Offices'], use: 'Shops, offices and refrigeration. Larger homes and SMEs.', order: true },
  { name: 'Power Industrial', wh: 15360, w: 8000, fill: 100, tags: ['Commercial', 'Critical loads'], use: 'Engineered fixed installations for commercial and critical loads.', order: true },
]
const fmt = n => n.toLocaleString('en-US')

const sizes = [[400, 'Mini'], [1024, 'Home'], [2048, 'Plus'], [5120, 'Business']]
const loads = [['Lights + phone', 40], ['TV + router', 120], ['Small fridge', 150], ['Shop essentials', 400]]

function RuntimeCalc() {
  const [wh, setWh] = useState(1024)
  const [load, setLoad] = useState(250)
  const hrs = (wh * 0.85) / load
  const result = hrs >= 48 ? '2+ days' : hrs < 1 ? `${Math.round(hrs * 60)} min` : `${hrs.toFixed(1)} hrs`
  const pct = Math.min(100, (hrs / 48) * 100)
  return (
    <Reveal className="calc2">
      <div className="calc2-left">
        <p className="eyebrow gold">Runtime estimator</p>
        <h3>How long will it run?</h3>
        <p>Pick a size and the load you want to power. We will show roughly how long it keeps going.</p>
        <div className="calc2-result" aria-live="polite">
          <span>Approximate runtime</span>
          <strong>{result}</strong>
          <div className="calc2-bar"><i style={{ width: `${Math.max(3, pct)}%` }} /></div>
          <small>{wh.toLocaleString('en-US')} Wh at {load} W</small>
        </div>
      </div>
      <form className="calc2-form" onSubmit={e => e.preventDefault()}>
        <fieldset>
          <legend>Power unit</legend>
          <div className="seg">
            {sizes.map(([v, n]) => (
              <button type="button" key={v} className={wh === v ? 'on' : ''} onClick={() => setWh(v)}>
                <b>{n}</b><span>{v.toLocaleString('en-US')} Wh</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Average load <output>{load} W</output></legend>
          <input type="range" min="20" max="1500" step="10" value={load} onChange={e => setLoad(Number(e.target.value))} style={{ '--p': `${((load - 20) / 1480) * 100}%` }} />
          <div className="quick">
            {loads.map(([n, v]) => <button type="button" key={n} className={load === v ? 'on' : ''} onClick={() => setLoad(v)}>{n}<span>{v} W</span></button>)}
          </div>
        </fieldset>
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
          <div className="pr-grid">
            {range.map((p, i) => (
              <Reveal as="article" className={`pr ${p.featured ? 'pr-feat' : ''} ${i > 2 ? 'pr-wide' : ''}`} key={p.name}>
                <header className="pr-top">
                  <span className="pr-n">{String(i + 1).padStart(2, '0')}</span>
                  {p.featured ? <span className="pr-flag">Most popular</span> : p.order ? <span className="pr-flag alt">Made to order</span> : <span className="pr-flag alt">Ready to install</span>}
                </header>
                <div className="pr-stage">
                  <div className="unit" style={{ '--h': `${70 + p.fill * 0.9}px`, '--w': `${88 + p.fill * 0.7}px` }}>
                    <i className="led" style={{ '--on': Math.max(1, Math.round(p.fill / 20)) }} />
                    <b className="unit-logo">R</b>
                  </div>
                </div>
                <h3>{p.name}</h3>
                <p className="pr-use">{p.use}</p>
                <dl className="pr-spec">
                  <div><dt>Capacity</dt><dd>{fmt(p.wh)}<small> Wh</small></dd></div>
                  <div><dt>Output</dt><dd>{fmt(p.w)}<small> W</small></dd></div>
                </dl>
                <ul className="pr-tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
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
