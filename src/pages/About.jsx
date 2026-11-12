import { asset } from '../asset.js'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero, Pillars, VisionMission, Roadmap, CTA } from '../components/Sections.jsx'

export default function About() {
  usePageMeta('About | REIGN', 'About REIGN: our commitments, vision, mission and roadmap from Sierra Leone to West Africa.')
  return (
    <>
      <PageHero image={asset('/assets/photos/rooftops-aerial.jpg')} alt="Aerial view of rooftops in a residential neighbourhood" eyebrow="About REIGN" title="Built to keep" accent="the power on" lead="REIGN is a new company starting in Sierra Leone. Our first division, REIGN Energy, sells and installs lithium batteries so homes and shops can keep working when the grid goes down." />
      <Pillars eyebrow="Our commitments" />
      <VisionMission />
      <Roadmap />
      <CTA />
    </>
  )
}
