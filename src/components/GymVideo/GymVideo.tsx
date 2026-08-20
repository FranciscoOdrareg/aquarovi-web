import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from 'lucide-react'
import styles from './GymVideo.module.css'

function GymVideo() {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }

    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideo()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const videoModal =
    isOpen &&
    createPortal(
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="Video del gimnasio de Centro Deportivo Aquarovi"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closeVideo()
          }
        }}
      >
        <div className={styles.modalContent}>
          <button
            className={styles.closeButton}
            type="button"
            onClick={closeVideo}
            aria-label="Cerrar video"
          >
            <X aria-hidden="true" strokeWidth={2} />
          </button>

          <video
            ref={videoRef}
            className={styles.video}
            controls
            playsInline
            preload="metadata"
            poster="/videos/aquarovi-gimnasio-poster.webp"
          >
            <source
              src="/videos/aquarovi-gimnasio-web.mp4"
              type="video/mp4"
            />

            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </div>,
      document.body,
    )

  return (
    <>
      <section
        className={`section ${styles.section}`}
        aria-labelledby="gym-video-title"
      >
        <div className={`container ${styles.container}`}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>
              Conoce el gimnasio
            </span>

            <h2 className={styles.title} id="gym-video-title">
              Un vistazo a tu próximo espacio de entrenamiento
            </h2>

            <p className={styles.description}>
              Conoce parte de nuestras instalaciones, equipos y el ambiente
              que encontrarás al entrenar en Centro Deportivo Aquarovi.
            </p>
          </div>

          <button
            className={styles.videoPreview}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Reproducir video del gimnasio de Aquarovi"
          >
            <img
              className={styles.poster}
              src="/videos/aquarovi-gimnasio-poster.webp"
              alt="Instalaciones del gimnasio de Centro Deportivo Aquarovi"
              loading="lazy"
            />

            <span
              className={styles.overlay}
              aria-hidden="true"
            />

            <span className={styles.playContent}>
              <span className={styles.playButton}>
                <Play
                  aria-hidden="true"
                  fill="currentColor"
                  strokeWidth={1.8}
                />
              </span>

              <span className={styles.playText}>
                <strong>Ver video</strong>
                <small>Conoce nuestras instalaciones</small>
              </span>
            </span>

            <span className={styles.videoBadge}>
              Aquarovi · Gimnasio
            </span>
          </button>
        </div>
      </section>

      {videoModal}
    </>
  )
}

export default GymVideo