import { asset } from '../asset.js'
import { useState, useRef, useLayoutEffect, useCallback } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

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
  const { pathname } = useLocation()
  const bar = useRef(null)
  const glider = useRef(null)
  const moveTo = useCallback(el => {
    const g = glider.current
    if (!g) return
    if (!el) { g.style.opacity = 0; return }
    g.style.opacity = 1
    g.style.width = el.offsetWidth + 'px'
    g.style.transform = `translateX(${el.offsetLeft}px)`
  }, [])
  const toActive = useCallback(() => moveTo(bar.current?.querySelector('a.active')), [moveTo])
  useLayoutEffect(() => {
    toActive()
    window.addEventListener('resize', toActive)
    return () => window.removeEventListener('resize', toActive)
  }, [pathname, toActive])
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
          <div className="nav-bar" ref={bar} onMouseLeave={toActive}>
            <span className="glider" ref={glider} aria-hidden="true" />
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'} onClick={close} onMouseEnter={e => moveTo(e.currentTarget)} onFocus={e => moveTo(e.currentTarget)} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
            ))}
          </div>
          <Link to="/contact" className="btn btn-small" onClick={close}>Get in touch</Link>
        </nav>
      </div>
    </header>
  )
}
