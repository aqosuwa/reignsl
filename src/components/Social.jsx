export const FACEBOOK = 'https://www.facebook.com/profile.php?id=61596547540706'
export const INSTAGRAM = 'https://www.instagram.com/reignslltd/'

export default function Social({ className = '' }) {
  return (
    <div className={`social ${className}`}>
      <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="REIGN on Facebook">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7H17V3.9c-.3 0-1.3-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.4v2.4H7.4v3.3h2.8V22h3.3z"/></svg>
      </a>
      <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="REIGN on Instagram">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
    </div>
  )
}
