import { Link } from 'react-router'
import MiniGallery from '../MiniGallery/MiniGallery'
import styles from './Hero.module.css'

const gymImages = [
  {
    src: '/images/gallery/gym/13.jpg',
    alt: 'Instalaciones del gimnasio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/gym/14.jpg',
    alt: 'Área de entrenamiento del gimnasio de Aquarovi',
  },
  {
    src: '/images/gallery/gym/15.jpg',
    alt: 'Equipos de fuerza del gimnasio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/gym/17.jpg',
    alt: 'Zona de entrenamiento de Aquarovi',
  },
  {
    src: '/images/gallery/gym/21.jpg',
    alt: 'Máquinas del gimnasio de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/gym/27.jpg',
    alt: 'Equipamiento de entrenamiento de Aquarovi',
  },
  {
    src: '/images/gallery/gym/33.jpg',
    alt: 'Área de pesas y máquinas de Aquarovi',
  },
  {
    src: '/images/gallery/gym/34.jpg',
    alt: 'Instalaciones interiores del gimnasio de Aquarovi',
  },
  {
    src: '/images/gallery/gym/36.jpg',
    alt: 'Zona de fuerza de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/gym/41.jpg',
    alt: 'Vista general del gimnasio de Centro Deportivo Aquarovi',
  },
]

const poolImages = [
  {
    src: '/images/gallery/piscina/pisc2.jpg',
    alt: 'Piscina climatizada de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/piscina/pisc4.jpg',
    alt: 'Instalaciones de piscina de Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/piscina/18.jpg',
    alt: 'Área de piscina climatizada de Aquarovi',
  },
  {
    src: '/images/gallery/piscina/10.jpg',
    alt: 'Actividades acuáticas en Centro Deportivo Aquarovi',
  },
  {
    src: '/images/gallery/piscina/7.jpg',
    alt: 'Piscina de Centro Deportivo Aquarovi en San Ramón',
  },
  {
    src: '/images/gallery/piscina/4.jpg',
    alt: 'Instalaciones acuáticas de Centro Deportivo Aquarovi',
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