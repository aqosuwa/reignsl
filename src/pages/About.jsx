import { asset } from '../asset.js'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero, Pillars, VisionMission, Roadmap, CTA } from '../components/Sections.jsx'

export default function About() {
  usePageMeta('About | REIGN', 'About REIGN: our commitments, vision, mission and roadmap from Sierra Leone to West Africa.')
  return (
    <>
      <PageHero eyebrow="About REIGN" title="Who we are" lead="A company built on innovation, economic growth, strategic partnership and global excellence." />
      <section className="photo-band"><Reveal className="band-inner"><img src={asset('/assets/photos/shop-owner.jpg')} alt="Shop owner at his counter" /></Reveal></section>
      <Pillars eyebrow="Our commitments" />
      <VisionMission />
      <Roadmap />
      <CTA />
    </>
  )
}
