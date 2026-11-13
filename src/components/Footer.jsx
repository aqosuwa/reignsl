import { asset } from '../asset.js'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Link to="/" className="brand light">
          <img src={asset('/assets/reign-mark.jpg')} alt="" width="40" height="36" />
          <span>REIGN</span>
        </Link>
        <p className="tag-line">Powering Lives. Empowering Nations.</p>
        <nav className="footer-links" aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/businesses">Businesses</Link>
          <Link to="/energy">REIGN Energy</Link>
          <Link to="/products">Power range</Link>
          <Link to="/partner">Partner</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="fine">&copy; {new Date().getFullYear()} REIGN. All rights reserved.</p>
      </div>
    </footer>
  )
}
