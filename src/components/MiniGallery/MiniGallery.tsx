import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './MiniGallery.module.css'

type GalleryImage = {
  src: string
  alt: string
}

type MiniGalleryProps = {
  label: string
  title: string
  images: GalleryImage[]
  dialogLabel: string
}

function MiniGallery({
  label,
  title,
  images,
  dialogLabel,
}: MiniGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const isOpen = selectedIndex !== null

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedIndex(null)
      }

      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => {
          if (current === null) return null

          return current === 0 ? images.length - 1 : current - 1
        })
      }

      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => {
          if (current === null) return null

          return (current + 1) % images.length
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, images.length])

  function openGallery(index: number) {
    setSelectedIndex(index)
  }

  function closeGallery() {
    setSelectedIndex(null)
  }

  function showPreviousImage() {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === 0 ? images.length - 1 : current - 1
    })
  }

  function showNextImage() {
    setSelectedIndex((current) => {
      if (current === null) return null

      return (current + 1) % images.length
    })
  }

  const lightbox =
    isOpen && selectedIndex !== null
      ? createPortal(
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={dialogLabel}
          >
            <button
              className={styles.backdrop}
              type="button"
              aria-label="Cerrar galería"
              onClick={closeGallery}
            />

            <div className={styles.lightboxContent}>
              <button
                className={styles.closeButton}
                type="button"
                aria-label="Cerrar galería"
                onClick={closeGallery}
              >
                <X aria-hidden="true" strokeWidth={2} />
              </button>

              <button
                className={`${styles.arrowButton} ${styles.previousButton}`}
                type="button"
                aria-label="Ver imagen anterior"
                onClick={showPreviousImage}
              >
                <ChevronLeft aria-hidden="true" strokeWidth={2} />
              </button>

              <figure className={styles.figure}>
                <img
                  className={styles.lightboxImage}
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                />

                <figcaption className={styles.counter}>
                  {selectedIndex + 1} / {images.length}
                </figcaption>
              </figure>

              <button
                className={`${styles.arrowButton} ${styles.nextButton}`}
                type="button"
                aria-label="Ver imagen siguiente"
                onClick={showNextImage}
              >
                <ChevronRight aria-hidden="true" strokeWidth={2} />
              </button>
            </div>
          </div>,
          document.body,
        )
      : null

  const visibleThumbnails = images.slice(1, 3)
  const remainingImages = Math.max(images.length - 3, 0)

  return (
    <>
      <div className={styles.gallery}>
        <button
          className={styles.mainImageButton}
          type="button"
          aria-label={`Abrir galería de ${label}`}
          onClick={() => openGallery(0)}
        >
          <img
            className={styles.mainImage}
            src={images[0].src}
            alt={images[0].alt}
          />

          <span className={styles.mainOverlay}>
            <span className={styles.label}>{label}</span>

            <strong>{title}</strong>

            <span className={styles.viewText}>Ver galería</span>
          </span>
        </button>

        <div className={styles.thumbnails}>
          {visibleThumbnails.map((image, index) => {
            const imageIndex = index + 1
            const showMore = index === 1 && remainingImages > 0

            return (
              <button
                key={image.src}
                className={styles.thumbnailButton}
                type="button"
                aria-label={
                  showMore
                    ? `Abrir galería de ${label} y ver ${remainingImages} imágenes más`
                    : `Abrir imagen ${imageIndex + 1} de la galería de ${label}`
                }
                onClick={() => openGallery(imageIndex)}
              >
                <img
                  className={styles.thumbnail}
                  src={image.src}
                  alt={image.alt}
                />

                {showMore && (
                  <span className={styles.moreImages}>
                    +{remainingImages}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {lightbox}
    </>
  )
}

export default MiniGallery