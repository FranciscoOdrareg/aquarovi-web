import { useEffect } from 'react'
import { useLocation } from 'react-router'

type PageMetadata = {
  title: string
  description: string
}

const siteUrl = 'https://aquarovi-web.vercel.app'
const socialImageUrl = `${siteUrl}/logo/AquaroviLogoBlanco.png`

const defaultMetadata: PageMetadata = {
  title: 'Centro Deportivo Aquarovi | Gimnasio y piscina en San Ramón',
  description:
    'Gimnasio y piscina climatizada en San Ramón de Alajuela. Consulta planes, clases de natación, nado libre, Aquafitness y opciones combinadas.',
}

const metadataByPath: Record<string, PageMetadata> = {
  '/': defaultMetadata,

  '/gimnasio': {
    title: 'Gimnasio en San Ramón | Centro Deportivo Aquarovi',
    description:
      'Entrena en el gimnasio de Centro Deportivo Aquarovi en San Ramón. Equipo, rutinas, valoraciones corporales y orientación para tu entrenamiento.',
  },

  '/piscina': {
    title: 'Piscina climatizada en San Ramón | Centro Deportivo Aquarovi',
    description:
      'Clases de natación para niños y adultos, nado libre, Aquafitness y actividades acuáticas en piscina climatizada en San Ramón de Alajuela.',
  },

  '/planes': {
    title: 'Planes de gimnasio y piscina en San Ramón | Aquarovi',
    description:
      'Conoce los planes de gimnasio, piscina y opciones combinadas de Centro Deportivo Aquarovi en San Ramón de Alajuela.',
  },

  '/contacto': {
    title: 'Contacto y ubicación | Centro Deportivo Aquarovi San Ramón',
    description:
      'Contacta a Centro Deportivo Aquarovi por WhatsApp o teléfono. Estamos en San Isidro de San Ramón, Alajuela.',
  },
}

function updateMetaTag(
  selector: string,
  attributes: Record<string, string>,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')

    Object.entries(attributes).forEach(([name, value]) => {
      element?.setAttribute(name, value)
    })

    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function updateCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', url)
}

function updateStructuredData() {
  const existingScript = document.head.querySelector<HTMLScriptElement>(
    'script[data-aquarovi-schema="local-business"]',
  )

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HealthClub',
    '@id': `${siteUrl}/#business`,
    name: 'Centro Deportivo Aquarovi',
    url: siteUrl,
    telephone: '+50624456244',
    image: socialImageUrl,
    logo: socialImageUrl,
    description:
      'Centro deportivo con gimnasio y piscina climatizada en San Ramón de Alajuela.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '200 m noreste de la Escuela Laboratorio',
      addressLocality: 'San Isidro',
      addressRegion: 'Alajuela',
      addressCountry: 'CR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+50624456244',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+50687081829',
        contactType: 'WhatsApp',
        availableLanguage: 'Spanish',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Centro Deportivo Aquarovi',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gimnasio',
            url: `${siteUrl}/gimnasio`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Piscina climatizada',
            url: `${siteUrl}/piscina`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Clases de natación',
            url: `${siteUrl}/piscina`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aquafitness',
            url: `${siteUrl}/piscina`,
          },
        },
      ],
    },
  }

  const script =
    existingScript ?? document.createElement('script')

  script.setAttribute('type', 'application/ld+json')
  script.setAttribute(
    'data-aquarovi-schema',
    'local-business',
  )

  script.textContent = JSON.stringify(structuredData)

  if (!existingScript) {
    document.head.appendChild(script)
  }
}

function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const isKnownPage = Boolean(metadataByPath[pathname])

    const metadata = metadataByPath[pathname] ?? {
      title: 'Página no encontrada | Centro Deportivo Aquarovi',
      description:
        'La página solicitada no se encuentra disponible en el sitio de Centro Deportivo Aquarovi.',
    }

    const canonicalUrl =
      pathname === '/'
        ? `${siteUrl}/`
        : `${siteUrl}${pathname}`

    document.title = metadata.title

    updateMetaTag(
      'meta[name="description"]',
      { name: 'description' },
      metadata.description,
    )

    updateMetaTag(
      'meta[name="robots"]',
      { name: 'robots' },
      isKnownPage
        ? 'index, follow, max-image-preview:large'
        : 'noindex, follow',
    )

    updateMetaTag(
      'meta[property="og:locale"]',
      { property: 'og:locale' },
      'es_CR',
    )

    updateMetaTag(
      'meta[property="og:type"]',
      { property: 'og:type' },
      'website',
    )

    updateMetaTag(
      'meta[property="og:site_name"]',
      { property: 'og:site_name' },
      'Centro Deportivo Aquarovi',
    )

    updateMetaTag(
      'meta[property="og:title"]',
      { property: 'og:title' },
      metadata.title,
    )

    updateMetaTag(
      'meta[property="og:description"]',
      { property: 'og:description' },
      metadata.description,
    )

    updateMetaTag(
      'meta[property="og:url"]',
      { property: 'og:url' },
      canonicalUrl,
    )

    updateMetaTag(
      'meta[property="og:image"]',
      { property: 'og:image' },
      socialImageUrl,
    )

    updateMetaTag(
      'meta[property="og:image:alt"]',
      { property: 'og:image:alt' },
      'Centro Deportivo Aquarovi',
    )

    updateMetaTag(
      'meta[name="twitter:card"]',
      { name: 'twitter:card' },
      'summary_large_image',
    )

    updateMetaTag(
      'meta[name="twitter:title"]',
      { name: 'twitter:title' },
      metadata.title,
    )

    updateMetaTag(
      'meta[name="twitter:description"]',
      { name: 'twitter:description' },
      metadata.description,
    )

    updateMetaTag(
      'meta[name="twitter:image"]',
      { name: 'twitter:image' },
      socialImageUrl,
    )

    updateCanonical(canonicalUrl)

    if (isKnownPage) {
      updateStructuredData()
    }
  }, [pathname])

  return null
}

export default SeoManager