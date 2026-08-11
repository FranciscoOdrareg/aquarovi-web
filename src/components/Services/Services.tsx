import { Link } from 'react-router'
import styles from './Services.module.css'

const services = [
  {
    number: '01',
    eyebrow: 'Fuerza y bienestar',
    title: 'Gimnasio',
    description:
      'Entrena en un espacio equipado para trabajar fuerza, resistencia y condición física de acuerdo con tus objetivos.',
    features: [
      'Equipo para entrenamiento completo',
      'Rutinas y valoraciones corporales',
      'Orientación para tu entrenamiento',
    ],
    link: '/gimnasio',
    linkLabel: 'Conocer el gimnasio',
    variant: 'gym',
  },
  {
    number: '02',
    eyebrow: 'Movimiento y salud',
    title: 'Piscina',
    description:
      'Disfruta actividades acuáticas para diferentes edades y objetivos en una piscina climatizada, techada y cerrada.',
    features: [
      'Clases para niños y adultos',
      'Nado libre y Aquafitness',
      'Actividades para adultos mayores',
    ],
    link: '/piscina',
    linkLabel: 'Conocer la piscina',
    variant: 'pool',
  },
]

function Services() {
  return (
    <section
      className={`section ${styles.services}`}
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>
              Todo en un mismo lugar
            </span>

            <h2 className={styles.title} id="services-title">
              Dos formas de moverte. Un mismo objetivo:{' '}
              <span className={styles.titleAccent}>sentirte mejor.</span>
            </h2>
          </div>

          <p className={styles.introductionText}>
            En Aquarovi puedes combinar entrenamiento y actividades acuáticas
            según tus necesidades, experiencia y objetivos.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article
              className={`${styles.card} ${
                service.variant === 'gym'
                  ? styles.gymCard
                  : styles.poolCard
              }`}
              key={service.title}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{service.number}</span>
                <span className={styles.cardEyebrow}>
                  {service.eyebrow}
                </span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  {service.title}
                </h3>

                <p className={styles.cardDescription}>
                  {service.description}
                </p>

                <ul
                  className={styles.featureList}
                  aria-label={`Beneficios de ${service.title}`}
                >
                  {service.features.map((feature) => (
                    <li
                      className={styles.featureItem}
                      key={feature}
                    >
                      <span
                        className={styles.featureIcon}
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                className={styles.cardLink}
                to={service.link}
              >
                {service.linkLabel}

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <div
                className={styles.decoration}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services