import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import styles from './HomeSlider.module.css'

const slides = [
  {
    image: '/images/slider/gimnasio.jpg',
    eyebrow: 'Gimnasio',
    title: 'Entrena con confianza',
    description:
      'Entrena con equipo, orientación y herramientas para avanzar según tus objetivos.',
  },
  {
    image: '/images/slider/piscina.jpg',
    eyebrow: 'Piscina',
    title: 'Disfruta cada brazada',
    description:
      'Aprende, mejora tu técnica y disfruta de nuestras actividades en una piscina techada y climatizada.',
  },
  {
    image: '/images/slider/principal-aquarovi.jpg',
    eyebrow: 'Centro Deportivo Aquarovi',
    title: 'Todo en un mismo lugar',
    description:
      'Gimnasio y piscina en un ambiente pensado para diferentes edades, necesidades y objetivos.',
  },
]

const AUTO_PLAY_TIME = 5500

function HomeSlider() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, AUTO_PLAY_TIME)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  function goToPreviousSlide() {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    )
  }

  function goToNextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  return (
    <section
      className={styles.slider}
      aria-label="Conoce Centro Deportivo Aquarovi"
    >
      {slides.map((slide, index) => (
        <article
          key={slide.image}
          className={`${styles.slide} ${
            index === activeSlide ? styles.activeSlide : ''
          }`}
          aria-hidden={index !== activeSlide}
        >
          <img
            className={styles.image}
            src={slide.image}
            alt=""
            aria-hidden="true"
          />

          <div className={styles.overlay} />

          <div className={`container ${styles.content}`}>
            <div className={styles.copy}>
              <span className={styles.eyebrow}>{slide.eyebrow}</span>

              <h2 className={styles.title}>{slide.title}</h2>

              <p className={styles.description}>{slide.description}</p>
            </div>
          </div>
        </article>
      ))}

      <button
        className={`${styles.arrowButton} ${styles.previousButton}`}
        type="button"
        aria-label="Ver imagen anterior"
        onClick={goToPreviousSlide}
      >
        <ChevronLeft aria-hidden="true" strokeWidth={2} />
      </button>

      <button
        className={`${styles.arrowButton} ${styles.nextButton}`}
        type="button"
        aria-label="Ver imagen siguiente"
        onClick={goToNextSlide}
      >
        <ChevronRight aria-hidden="true" strokeWidth={2} />
      </button>

      <div className={styles.indicators} aria-label="Seleccionar imagen">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            className={`${styles.indicator} ${
              index === activeSlide ? styles.activeIndicator : ''
            }`}
            type="button"
            aria-label={`Ver imagen ${index + 1}`}
            aria-current={index === activeSlide ? 'true' : undefined}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HomeSlider