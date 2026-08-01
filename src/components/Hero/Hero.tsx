import { Link } from 'react-router'
import styles from './Hero.module.css'

const whatsappMessage =
  'Hola, me gustaría recibir información sobre los servicios de Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Gimnasio y piscina en San Ramón
          </span>

          <h1 className={styles.title} id="hero-title">
            Tu bienestar comienza en{' '}
            <span className={styles.titleAccent}>Aquarovi</span>
          </h1>

          <p className={styles.description}>
            Entrena, nada y alcanza tus objetivos en un centro deportivo
            pensado para acompañarte en cada etapa de tu proceso.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primaryButton}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar información
            </a>

            <Link className={styles.secondaryButton} to="/planes">
              Conocer los planes
            </Link>
          </div>

          <ul className={styles.features} aria-label="Características principales">
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

        <div className={styles.visual} aria-label="Servicios de Aquarovi">
          <div className={`${styles.serviceCard} ${styles.gymCard}`}>
            <span className={styles.cardNumber}>01</span>

            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Entrena</span>
              <h2 className={styles.cardTitle}>Gimnasio</h2>
              <p className={styles.cardText}>
                Equipo, acompañamiento y espacios para alcanzar tus metas.
              </p>
            </div>
          </div>

          <div className={`${styles.serviceCard} ${styles.poolCard}`}>
            <span className={styles.cardNumber}>02</span>

            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Disfruta</span>
              <h2 className={styles.cardTitle}>Piscina</h2>
              <p className={styles.cardText}>
                Clases y actividades acuáticas en una piscina climatizada.
              </p>
            </div>
          </div>

          <div className={styles.locationCard}>
            <span className={styles.locationLabel}>Visítanos</span>

            <p className={styles.locationText}>
              San Isidro, San Ramón de Alajuela
            </p>

            <span className={styles.locationDetail}>
              200 m noreste de la Escuela Laboratorio
            </span>
          </div>
        </div>
      </div>

      <div className={styles.decorativeCircle} aria-hidden="true" />
      <div className={styles.decorativeGlow} aria-hidden="true" />
    </section>
  )
}

export default Hero