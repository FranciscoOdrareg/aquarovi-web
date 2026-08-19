import { Link } from 'react-router'
import MiniGallery from '../MiniGallery/MiniGallery'
import styles from './Hero.module.css'

const gymImages = [
  {
    src: '/images/gallery/gym/gym1.jpg',
    alt: 'Área de gimnasio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/gym/gym2.jpg',
    alt: 'Equipos de entrenamiento del gimnasio de Aquarovi',
  },
  {
    src: '/images/gallery/gym/gym3.jpg',
    alt: 'Instalaciones del gimnasio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/gym/gym4.jpg',
    alt: 'Zona de entrenamiento del gimnasio de Aquarovi',
  },
]

const poolImages = [
  {
    src: '/images/gallery/piscina/pisc1.jpg',
    alt: 'Piscina climatizada de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/piscina/pisc2.jpg',
    alt: 'Instalaciones de piscina de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/piscina/pisc3.jpg',
    alt: 'Actividades acuáticas en Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/piscina/pisc4.jpg',
    alt: 'Área de piscina de Centro Deportivo Aquarovi',
  },
]

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Gimnasio y piscina en San Ramón
          </span>

          <h1 className={styles.title} id="hero-title">
            Entrena, nada y{' '}
            <span className={styles.titleAccent}>siéntete mejor</span>{' '}
            en Aquarovi
          </h1>

          <p className={styles.description}>
            Gimnasio, piscina climatizada y opciones para distintas edades y
            objetivos, en un solo centro deportivo en San Ramón.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryButton} to="/planes">
              Ver planes y precios
            </Link>
          </div>

          <ul
            className={styles.features}
            aria-label="Características principales"
          >
            <li className={styles.feature}>
              <span className={styles.checkmark} aria-hidden="true">
                ✓
              </span>
              Piscina climatizada
            </li>

            <li className={styles.feature}>
              <span className={styles.checkmark} aria-hidden="true">
                ✓
              </span>
              Gimnasio equipado
            </li>

            <li className={styles.feature}>
              <span className={styles.checkmark} aria-hidden="true">
                ✓
              </span>
              Ambiente familiar
            </li>
          </ul>
        </div>

        <div className={styles.visual} aria-label="Instalaciones de Aquarovi">
          <div className={styles.galleryWrapper}>
            <MiniGallery
              label="Gimnasio"
              title="Conoce nuestras instalaciones"
              images={gymImages}
              dialogLabel="Galería de imágenes del gimnasio"
            />
          </div>

          <div className={styles.galleryWrapper}>
            <MiniGallery
              label="Piscina"
              title="Conoce nuestra piscina climatizada"
              images={poolImages}
              dialogLabel="Galería de imágenes de la piscina"
            />
          </div>
        </div>
      </div>

      <div className={styles.decorativeCircle} aria-hidden="true" />
      <div className={styles.decorativeGlow} aria-hidden="true" />
    </section>
  )
}

export default Hero