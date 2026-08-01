import { useEffect } from 'react'
import { useLocation } from 'react-router'

type PageMetadata = {
  title: string
  description: string
}

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
      'Entrena en el gimnasio de Centro Deportivo Aquarovi en San Ramón. Equipo, rutinas, valoraciones corporales y acompañamiento semi-personalizado.',
  },

  '/piscina': {
    title: 'Piscina climatizada en San Ramón | Aquarovi',
    description:
      'Clases para niños y adultos, nado libre, Aquafitness y opciones para adultos mayores en una piscina climatizada, techada y cerrada.',
  },

  '/planes': {
    title: 'Planes de gimnasio y piscina | Aquarovi San Ramón',
    description:
      'Conoce los planes de gimnasio, piscina y opciones combinadas de Centro Deportivo Aquarovi en San Ramón de Alajuela.',
  },

  '/contacto': {
    title: 'Contacto y ubicación | Centro Deportivo Aquarovi',
    description:
      'Contacta a Centro Deportivo Aquarovi por WhatsApp, teléfono o correo. Estamos en San Isidro de San Ramón, Alajuela.',
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

function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = metadataByPath[pathname] ?? {
      title: 'Página no encontrada | Centro Deportivo Aquarovi',
      description:
        'La página solicitada no se encuentra disponible en el sitio de Centro Deportivo Aquarovi.',
    }

    const canonicalUrl = `${window.location.origin}${pathname}`

    document.title = metadata.title

    updateMetaTag(
      'meta[name="description"]',
      { name: 'description' },
      metadata.description,
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
      'meta[property="og:type"]',
      { property: 'og:type' },
      'website',
    )

    updateMetaTag(
      'meta[property="og:url"]',
      { property: 'og:url' },
      canonicalUrl,
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

    updateCanonical(canonicalUrl)
  }, [pathname])

  return null
}

export default SeoManager