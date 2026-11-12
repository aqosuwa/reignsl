import { useEffect } from 'react'

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
    const m = document.querySelector('meta[name="description"]')
    if (m && description) m.setAttribute('content', description)
  }, [title, description])
}
