import { asset } from '../asset.js'
import { Link } from 'react-router-dom'
import Social from './Social.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="ft-grid">
          <div className="ft-brand">
            <Link to="/" className="brand light">
              <img src={asset('/assets/reign-mark.jpg')} alt="" width="40" height="36" />
              <span>REIGN</span>
            </Link>
            <p className="ft-tag">Powering Lives.<br />Empowering Nations.</p>
            <p className="ft-note">Sierra Leone first. West Africa next.</p>
          </div>
          <nav className="ft-col" aria-label="Company">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/businesses">Businesses</Link>
            <Link to="/partner">Partner with us</Link>
          </nav>
          <nav className="ft-col" aria-label="REIGN Energy">
            <h4>REIGN Energy</h4>
            <Link to="/energy">Overview</Link>
            <Link to="/products">Power range</Link>
            <Link to="/contact">Request a quote</Link>
          </nav>
          <div className="ft-col">
            <h4>Connect</h4>
            <a href="mailto:info@reignsl.com">info@reignsl.com</a>
            <span className="ft-loc">Freetown, Sierra Leone</span>
            <Social />
          </div>
        </div>
        <div className="ft-bottom">
          <p>&copy; {new Date().getFullYear()} REIGN. All rights reserved.</p>
          <p>Freetown &middot; Bo &middot; Kenema &middot; Makeni</p>
        </div>
      </div>
    </footer>
  )
}
