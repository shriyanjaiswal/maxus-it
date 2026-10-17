import { useEffect } from 'react'
import { siteUrl } from '../data/site'

type SeoProps = {
  title: string
  description: string
  path: string
  keywords?: string
  ogImage?: string
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

export function Seo({ title, description, path, keywords, ogImage = '/assets/products/smart-it-solutions-banner.jpg', schema }: SeoProps) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)

    if (keywords) {
      setMeta('meta[name="keywords"]', 'name', 'keywords', keywords)
    }

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical && siteUrl) canonical.href = `${siteUrl}${path}`

    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    if (siteUrl) setMeta('meta[property="og:url"]', 'property', 'og:url', `${siteUrl}${path}`)
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN')

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)

    if (!schema) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.routeSeo = path
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [title, description, path, keywords, ogImage, schema])

  return null
}
