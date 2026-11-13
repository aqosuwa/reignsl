// Paste your Formspree form URL here (looks like https://formspree.io/f/abcdwxyz).
// While this is empty, forms fall back to opening the visitor's email app.
export const FORM_ENDPOINT = ''
export const FORM_EMAIL = 'info@reignsl.com'

// Returns 'sent' (delivered to the form service) or 'mailto' (email app opened).
// Throws if the form service rejects the message.
export async function sendForm(subject, fields, body) {
  if (!FORM_ENDPOINT) {
    window.location.href = `mailto:${FORM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return 'mailto'
  }
  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ _subject: subject, ...fields }),
  })
  if (!res.ok) throw new Error('send failed')
  return 'sent'
}
