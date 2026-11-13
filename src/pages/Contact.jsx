import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { sendForm } from '../sendForm.js'

const roles = ['Customer', 'Dealer or installer', 'Investor or partner', 'Other']

export default function Contact() {
  usePageMeta('Contact | REIGN', 'Get in touch with REIGN.')
  const [params] = useSearchParams()
  const initial = roles.includes(params.get('role')) ? params.get('role') : roles[0]
  const [form, setForm] = useState({ name: '', email: '', role: initial, message: '' })
  const [msg, setMsg] = useState('')
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email) || !form.message) {
      setMsg('Please fill in your name, a valid email and a message.')
      return
    }
    const subject = `REIGN enquiry: ${form.role}`
    const body = `${form.message}\n\n${form.name}\n${form.email}`
    setMsg('Sending...')
    try {
      const r = await sendForm(subject, { name: form.name, email: form.email, role: form.role, message: form.message }, body)
      if (r === 'sent') setForm(f => ({ ...f, message: '' }))
      setMsg(r === 'sent' ? 'Thank you, your message has been sent. We will reply by email.' : 'Opening your email app. Thank you for reaching out.')
    } catch {
      setMsg('Sorry, that did not send. Please email info@reignsl.com directly.')
    }
  }

  return (
    <section className="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <p className="eyebrow gold">Contact</p>
          <h2>Let&rsquo;s talk</h2>
          <p>Questions about the range, want to become a dealer or installer, or interested in investing? Send us a message and tell us which fits. We will reply by email.</p>
          <p className="contact-line"><a href="mailto:info@reignsl.com">info@reignsl.com</a></p>
          <p className="contact-line dim">Starting in Freetown, Sierra Leone</p>
        </Reveal>
        <Reveal as="form" className="form" onSubmit={submit} noValidate>
          <label>Name<input type="text" value={form.name} onChange={set('name')} autoComplete="name" required /></label>
          <label>Email<input type="email" value={form.email} onChange={set('email')} autoComplete="email" required /></label>
          <label>I am a
            <select value={form.role} onChange={set('role')}>{roles.map(r => <option key={r}>{r}</option>)}</select>
          </label>
          <label>Message<textarea rows="4" value={form.message} onChange={set('message')} required /></label>
          <button type="submit" className="btn">Send message</button>
          <p className="form-msg" role="status">{msg}</p>
        </Reveal>
      </div>
    </section>
  )
}
