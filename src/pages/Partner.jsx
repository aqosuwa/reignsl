import { asset } from '../asset.js'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero } from '../components/Sections.jsx'

const cards = [
  ['Homes & businesses', 'Tell us what you need to keep running. We will recommend the right size and let you know when we launch.', 'Customer', 'Register interest →', asset('/assets/photos/shop-owner.jpg'), 'Shop owner at his counter'],
  ['Dealers & installers', 'Electrical shops, solar installers and technicians in Freetown, Bo, Kenema and Makeni: join our network. We supply the systems and back you with warranty support.', 'Dealer or installer', 'Join the network →', asset('/assets/photos/panel-lift.jpg'), 'Installer lifting a solar panel'],
  ['Investors & partners', 'We are building in stages and only expanding once each stage works. Talk to us about partnership and investment.', 'Investor or partner', 'Start a conversation →', asset('/assets/photos/panel-closeup.jpg'), 'Solar panel being fitted on a roof'],
]

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
                <Link to={`/contact?role=${encodeURIComponent(role)}`} className="link">{cta}</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
