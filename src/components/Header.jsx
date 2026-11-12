import { asset } from '../asset.js'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/energy', 'REIGN Energy'],
  ['/products', 'Range'],
  ['/partner', 'Partner'],
]

const items = ['Power Mini', 'Power Home', 'Power Plus', 'Power Business', 'Power Industrial', 'Freetown', 'Bo', 'Kenema', 'Makeni', 'Solar-ready', 'Local warranty']

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map(k => (
            <div className="ticker-set" key={k}>
              {items.map(t => <span key={t}>{t}<i>&#10033;</i></span>)}
            </div>
          ))}
        </div>
      </div>
      <div className="wrap header-inner">
        <Link to="/" className="brand" aria-label="REIGN home" onClick={close}>
          <img src={asset('/assets/reign-mark.jpg')} alt="" width="44" height="40" />
          <span>REIGN</span>
        </Link>
        <button className="nav-toggle" aria-label="Menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}>
          <span /><span />
        </button>
        <nav id="nav" className={`nav ${open ? 'open' : ''}`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn-small" onClick={close}>Get in touch</Link>
        </nav>
      </div>
    </header>
  )
}
