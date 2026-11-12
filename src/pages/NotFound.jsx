import { Link } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta.js'
import { PageHero } from '../components/Sections.jsx'

export default function NotFound() {
  usePageMeta('Page not found | REIGN', 'This page could not be found.')
  return (
    <>
      <PageHero eyebrow="404" title="Page not found" lead="That page doesn’t exist, but the rest of REIGN does." />
      <section className="cta"><div className="wrap"><Link to="/" className="btn">Back home</Link></div></section>
    </>
  )
}
