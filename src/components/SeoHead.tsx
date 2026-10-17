import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export interface SeoProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogType?: 'website' | 'article' | 'product'
  ogImage?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

const DEFAULT_TITLE = 'MAXUS IT SERVICES PVT. LTD. | Smart IT & ERP Solutions Across India'
const DEFAULT_DESCRIPTION =
  'Maxus IT Services delivers industry-leading ERP software, billing solutions, GST accounting, school management, and custom software development across all states of India.'
const DEFAULT_KEYWORDS =
  'ERP software India, garment software, footwear ERP, school ERP software, billing software with WhatsApp, touch POS software, GST accounting software, custom software development India, IT services company India'
const BASE_URL = 'https://www.maxusitservices.com'
const DEFAULT_OG_IMAGE = 'https://www.maxusitservices.com/assets/brand/og-preview.png'

export function SeoHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
}: SeoProps) {
  const location = useLocation()
  const fullTitle = title
    ? `${title} | Maxus IT Services Pvt Ltd`
    : DEFAULT_TITLE
  const currentCanonical = canonicalUrl || `${BASE_URL}${location.pathname}`

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle

    // Helper to update or create meta tags
    const setMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(nameAttr, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // 2. Standard Meta Tags
    setMeta('name', 'description', description)
    setMeta('name', 'keywords', keywords)
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    // 3. OpenGraph Tags
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:url', currentCanonical)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:site_name', 'MAXUS IT SERVICES PVT. LTD.')
    setMeta('property', 'og:locale', 'en_IN')

    // 4. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.setAttribute('href', currentCanonical)

    // 6. JSON-LD Structured Data
    const existingScript = document.getElementById('dynamic-jsonld')
    if (existingScript) {
      existingScript.remove()
    }

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = 'dynamic-jsonld'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      const script = document.getElementById('dynamic-jsonld')
      if (script) {
        script.remove()
      }
    }
  }, [fullTitle, description, keywords, currentCanonical, ogType, ogImage, jsonLd])

  return null
}
