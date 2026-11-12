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
        <p className="fine">&copy; {new Date().getFullYear()} REIGN. All rights reserved.</p>
      </div>
    </footer>
  )
}
