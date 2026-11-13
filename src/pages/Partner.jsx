import { asset } from '../asset.js'
import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero } from '../components/Sections.jsx'
import { sendForm } from '../sendForm.js'

const cards = [
  ['Homes & businesses', 'Tell us what you need to keep running. We will recommend the right size and let you know when we launch.', 'Customer', 'Register interest →', asset('/assets/photos/shop-owner.jpg'), 'Shop owner at his counter'],
  ['Dealers & installers', 'Electrical shops, solar installers and technicians in Freetown, Bo, Kenema and Makeni: join our network. We supply the systems and back you with warranty support.', 'Dealer or installer', 'Join the network →', asset('/assets/photos/panel-lift.jpg'), 'Installer lifting a solar panel'],
  ['Investors & partners', 'We are building in stages and only expanding once each stage works. Talk to us about partnership and investment.', 'Investor or partner', 'Start a conversation →', asset('/assets/photos/panel-closeup.jpg'), 'Solar panel being fitted on a roof'],
]

const roles = ['Customer', 'Dealer or installer', 'Investor or partner']
const cities = ['Freetown', 'Bo', 'Kenema', 'Makeni', 'Elsewhere']

function ApplyForm() {
  const [params] = useSearchParams()
  const ref = useRef(null)
  const fromLink = roles.includes(params.get('role')) ? params.get('role') : null
  const [f, setF] = useState({ name: '', email: '', phone: '', org: '', city: cities[0], role: fromLink || roles[1], message: '' })
  const [msg, setMsg] = useState('')
  const set = k => e => setF(v => ({ ...v, [k]: e.target.value }))
  useEffect(() => {
    if (fromLink) {
      setF(v => ({ ...v, role: fromLink }))
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [fromLink])
  const submit = async e => {
    e.preventDefault()
    if (!f.name || !/^\S+@\S+\.\S+$/.test(f.email)) { setMsg('Please add your name and a valid email.'); return }
    const subject = `REIGN partnership: ${f.role}`
    const body = `${f.message}\n\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nBusiness: ${f.org}\nCity: ${f.city}\nI am a: ${f.role}`
    setMsg('Sending...')
    try {
      const r = await sendForm(subject, { name: f.name, email: f.email, phone: f.phone, business: f.org, city: f.city, role: f.role, message: f.message }, body)
      if (r === 'sent') setF(v => ({ ...v, message: '' }))
      setMsg(r === 'sent' ? 'Thank you, your request has been sent. We will reply by email.' : 'Opening your email app. Thank you, we will reply by email.')
    } catch {
      setMsg('Sorry, that did not send. Please email info@reignsl.com directly.')
    }
  }
  return (
    <section className="apply" ref={ref} id="apply">
      <Reveal className="wrap apply-card">
        <div className="apply-info">
          <p className="eyebrow gold">Partner with us</p>
          <h2>Tell us how you want to work with REIGN</h2>
          <p>Share a few details and we will come back with next steps, usually within a few working days.</p>
          <ul>
            <li>Dealer and installer training</li>
            <li>Genuine products with local warranty</li>
            <li>Clear pricing and support</li>
          </ul>
          <p className="apply-line">info@reignsl.com<br /><span>Starting in Freetown, Sierra Leone</span></p>
        </div>
        <form className="apply-form" onSubmit={submit} noValidate>
          <div className="role-seg" role="group" aria-label="I am a">
            {roles.map(r => <button type="button" key={r} className={f.role === r ? 'on' : ''} onClick={() => setF(v => ({ ...v, role: r }))}>{r}</button>)}
          </div>
          <div className="af-row">
            <label>Full name<input type="text" value={f.name} onChange={set('name')} placeholder="Your name" autoComplete="name" /></label>
            <label>Email<input type="email" value={f.email} onChange={set('email')} placeholder="you@example.com" autoComplete="email" /></label>
          </div>
          <div className="af-row">
            <label>Phone / WhatsApp<input type="text" value={f.phone} onChange={set('phone')} placeholder="+232 ..." autoComplete="tel" /></label>
            <label>City<select value={f.city} onChange={set('city')}>{cities.map(c => <option key={c}>{c}</option>)}</select></label>
          </div>
          <label>Business or organisation<input type="text" value={f.org} onChange={set('org')} placeholder="Shop, company or team name (optional)" /></label>
          <label>Message<textarea rows="4" value={f.message} onChange={set('message')} placeholder="What would you like to do with REIGN?" /></label>
          <button type="submit" className="btn">Send partnership request</button>
          <p className="form-msg" role="status">{msg}</p>
        </form>
      </Reveal>
    </section>
  )
}

export default function Partner() {
  usePageMeta('Partner with REIGN', 'Customers, dealers, installers, investors and partners: work with REIGN.')
  return (
    <>
      <PageHero image={asset('/assets/photos/panel-closeup.jpg')} alt="Solar panel being fitted on a roof" eyebrow="Partner with REIGN" title="Build" accent="with us" lead="Whether you want power for your shop, want to sell and install our systems, or want to invest, start here." />
      <section className="partner">
        <div className="wrap">
          <div className="cards three">
            {cards.map(([t, d, role, cta, img, alt]) => (
              <Reveal as="article" className="card" key={t}>
                <img className="card-photo" src={img} alt={alt} loading="lazy" />
                <h3>{t}</h3>
                <p>{d}</p>
                <Link to={`/partner?role=${encodeURIComponent(role)}`} className="link">{cta}</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ApplyForm />
    </>
  )
}
