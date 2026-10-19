import { useEffect } from 'react'
import { siteUrl } from '../data/site'

export type BreadcrumbItem = {
  name: string
  path: string
}

type SeoProps = {
  title: string
  description: string
  path: string
  keywords?: string
  ogImage?: string
  noindex?: boolean
  breadcrumbs?: BreadcrumbItem[]
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

export function Seo({
  title,
  description,
  path,
  keywords,
  ogImage = '/assets/products/smart-it-solutions-banner.jpg',
  noindex = false,
  breadcrumbs,
  schema,
}: SeoProps) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)

    if (keywords) {
      setMeta('meta[name="keywords"]', 'name', 'keywords', keywords)
    }

    // Dynamic Robots & Googlebot Directives
    const robotsContent = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    setMeta('meta[name="robots"]', 'name', 'robots', robotsContent)
    setMeta('meta[name="googlebot"]', 'name', 'googlebot', robotsContent)

    // Canonical link tag creation and update
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    const cleanPath = path.split('?')[0]
    const absoluteCanonical = `${siteUrl}${cleanPath === '/' ? '' : cleanPath}` || siteUrl
    canonical.href = absoluteCanonical

    // Fully qualified absolute image URL for WhatsApp, Facebook, LinkedIn, Twitter crawlers
    const absoluteOgImage = ogImage.startsWith('http')
      ? ogImage
      : `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`

    // Open Graph Protocol Meta Tags
    setMeta('meta[property="og:type"]', 'property', 'og:type', path === '/' ? 'website' : 'article')
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'MAXUS IT SERVICES PVT. LTD.')
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', absoluteCanonical)
    setMeta('meta[property="og:image"]', 'property', 'og:image', absoluteOgImage)
    setMeta('meta[property="og:image:secure_url"]', 'property', 'og:image:secure_url', absoluteOgImage)
    setMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200')
    setMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630')
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', title)
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN')

    // Twitter Card Tags
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:site"]', 'name', 'twitter:site', '@MaxusITServices')
    setMeta('meta[name="twitter:creator"]', 'name', 'twitter:creator', '@MaxusITServices')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteOgImage)

    // Build combined or breadcrumb-infused schema
    let combinedSchema = schema

    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.path.startsWith('http') ? crumb.path : `${siteUrl}${crumb.path}`,
        })),
      }

      if (!combinedSchema) {
        combinedSchema = breadcrumbSchema
      } else if (Array.isArray((combinedSchema as Record<string, unknown>)['@graph'])) {
        combinedSchema = {
          ...combinedSchema,
          '@graph': [...((combinedSchema as Record<string, unknown>)['@graph'] as unknown[]), breadcrumbSchema],
        }
      } else {
        combinedSchema = {
          '@context': 'https://schema.org',
          '@graph': [combinedSchema, breadcrumbSchema],
        }
      }
    }

    // Clean up previous route schema script if exists
    const existingScript = document.head.querySelector<HTMLScriptElement>('script[data-route-seo]')
    if (existingScript) {
      existingScript.remove()
    }

    if (!combinedSchema) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.routeSeo = path
    script.textContent = JSON.stringify(combinedSchema)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [title, description, path, keywords, ogImage, noindex, breadcrumbs, schema])

  return null
}
