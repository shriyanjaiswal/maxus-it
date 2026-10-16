import { useEffect } from 'react'
import { siteUrl } from '../data/site'

type SeoProps = {
  title: string
  description: string
  path: string
  /** JSON-LD object rendered into the document head. */
  schema?: Record<string, unknown>
}

const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', value)
}

export function Seo({ title, description, path, schema }: SeoProps) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical && siteUrl) canonical.href = `${siteUrl}${path}`

    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    if (siteUrl) setMeta('meta[property="og:url"]', 'property', 'og:url', `${siteUrl}${path}`)
    setMeta('meta[property="og:image"]', 'property', 'og:image', '/og-image.svg')

    if (!schema) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.routeSeo = path
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [title, description, path, schema])

  return null
}
