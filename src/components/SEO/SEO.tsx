import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical: string
}

function SEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title

    const setMetaTag = (
      selector: string,
      attribute: 'name' | 'property',
      attributeValue: string,
      content: string,
    ) => {
      let element = document.querySelector<HTMLMetaElement>(selector)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, attributeValue)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    const setCanonical = (url: string) => {
      let canonicalLink =
        document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
      }

      canonicalLink.setAttribute('href', url)
    }

    setMetaTag(
      'meta[name="description"]',
      'name',
      'description',
      description,
    )

    setCanonical(canonical)

    setMetaTag(
      'meta[property="og:title"]',
      'property',
      'og:title',
      title,
    )

    setMetaTag(
      'meta[property="og:description"]',
      'property',
      'og:description',
      description,
    )

    setMetaTag(
      'meta[property="og:url"]',
      'property',
      'og:url',
      canonical,
    )

    setMetaTag(
      'meta[name="twitter:title"]',
      'name',
      'twitter:title',
      title,
    )

    setMetaTag(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      description,
    )
  }, [title, description, canonical])

  return null
}

export default SEO