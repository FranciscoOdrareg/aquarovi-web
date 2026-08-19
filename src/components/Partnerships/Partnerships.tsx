import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './Partnerships.module.css'

const whatsappMessage =
  'Hola, quisiera consultar si tengo acceso a algún convenio o beneficio en Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

const partnerships = [
  {
    src: '/images/convenios/convenio-1.png',
    alt: 'Convenio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/convenios/convenio-2.png',
    alt: 'Convenio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/convenios/convenio-3.png',
    alt: 'Convenio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/convenios/convenio-4.png',
    alt: 'Convenio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/convenios/convenio-5.png',
    alt: 'Convenio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/convenios/convenio-6.png',
    alt: 'Convenio de Centro Deportivo Aquarovi',
  },
]

function Partnerships() {
  const [selectedLogo, setSelectedLogo] = useState<
    (typeof partnerships)[number] | null
  >(null)

  useEffect(() => {
    if (!selectedLogo) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedLogo(null)
      }
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedLogo])

  const viewer =
    selectedLogo &&
    createPortal(
      <div
        className={styles.viewerOverlay}
        role="dialog"
        aria-modal="true"
        aria-label="Vista ampliada del convenio"
        onClick={() => setSelectedLogo(null)}
      >
        <div
          className={styles.viewer}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className={styles.closeButton}
            type="button"
            onClick={() => setSelectedLogo(null)}
            aria-label="Cerrar imagen ampliada"
          >
            <X aria-hidden="true" strokeWidth={2} />
          </button>

          <img
            className={styles.viewerImage}
            src={selectedLogo.src}
            alt={selectedLogo.alt}
          />
        </div>
      </div>,
      document.body,
    )

  return (
    <>
      <section
        className={`section ${styles.section}`}
        aria-labelledby="partnerships-title"
      >
        <div className={`container ${styles.container}`}>
          <div className={styles.heading}>
            <div className={styles.headingContent}>
              <span className={styles.eyebrow}>
                Convenios y beneficios
              </span>

              <h2 className={styles.title} id="partnerships-title">
                ¿Tienes convenio con Aquarovi?
              </h2>

              <p className={styles.description}>
                Conoce algunas de las organizaciones que cuentan con beneficios
                para sus miembros y consulta las condiciones disponibles.
              </p>
            </div>

            <a
              className={styles.whatsappButton}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Consultar mi convenio
            </a>
          </div>

          <div className={styles.logoViewport}>
            <div className={styles.logoTrack}>
              {partnerships.map((partnership, index) => (
                <button
                  className={styles.logoCard}
                  type="button"
                  onClick={() => setSelectedLogo(partnership)}
                  aria-label={`Ampliar ${partnership.alt}`}
                  key={`${partnership.src}-${index}`}
                >
                  <img
                    className={styles.logo}
                    src={partnership.src}
                    alt={partnership.alt}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {viewer}
    </>
  )
}

export default Partnerships