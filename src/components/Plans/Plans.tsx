import { Check, Dumbbell, Sparkles, Waves } from 'lucide-react'
import { Link } from 'react-router'
import styles from './Plans.module.css'

const plans = [
  {
    name: 'Gimnasio',
    description:
      'Una opción completa para entrenar con acceso al gimnasio y acompañamiento durante tu proceso.',
    price: '₡26.000',
    frequency: 'por mes',
    features: [
      'Acceso al gimnasio',
      'Rutina de entrenamiento',
      'Valoración corporal',
      'Acompañamiento semi-personalizado',
    ],
    icon: Dumbbell,
    variant: 'standard',
    buttonLabel: 'Consultar gimnasio',
    whatsappMessage:
      'Hola, me gustaría recibir información sobre el plan de gimnasio de Aquarovi.',
  },
  {
    name: 'Plan combinado',
    description:
      'Combina gimnasio y piscina para disfrutar una experiencia más variada y completa.',
    price: '₡39.900',
    frequency: 'por mes',
    previousPrice: '₡52.000',
    badge: 'Más completo',
    features: [
      'Acceso al gimnasio',
      'Piscina una vez por semana',
      'Rutina y valoración corporal',
      'Dos experiencias en un solo lugar',
    ],
    icon: Sparkles,
    variant: 'featured',
    buttonLabel: 'Consultar plan combinado',
    whatsappMessage:
      'Hola, me gustaría recibir información sobre el plan combinado de gimnasio y piscina de Aquarovi.',
  },
  {
    name: 'Piscina',
    description:
      'Disfruta clases y actividades acuáticas en una piscina climatizada, techada y cerrada.',
    price: '₡26.000',
    frequency: 'por mes',
    features: [
      'Una clase por semana',
      'Piscina climatizada',
      'Opciones para distintas edades',
      'Acompañamiento de instructor',
    ],
    icon: Waves,
    variant: 'standard',
    buttonLabel: 'Consultar piscina',
    whatsappMessage:
      'Hola, me gustaría recibir información sobre los planes de piscina de Aquarovi.',
  },
]

function Plans() {
  return (
    <section
      className={`section ${styles.plans}`}
      aria-labelledby="plans-title"
    >
      <div className="container">
        <div className={styles.introduction}>
          <div>
            <span className={styles.eyebrow}>Opciones para comenzar</span>

            <h2 className={styles.title} id="plans-title">
              Encuentra un plan que se adapte a ti
            </h2>
          </div>

          <div className={styles.introductionContent}>
            <p className={styles.introductionText}>
              Elige entre gimnasio, piscina o una opción combinada. También
              contamos con otros horarios y modalidades según disponibilidad.
            </p>

            <Link className={styles.allPlansLink} to="/planes">
              Ver todos los planes
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => {
            const Icon = plan.icon

            const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
              plan.whatsappMessage,
            )}`

            return (
              <article
                className={`${styles.card} ${
                  plan.variant === 'featured'
                    ? styles.featuredCard
                    : styles.standardCard
                }`}
                key={plan.name}
              >
                {plan.badge && (
                  <span className={styles.badge}>{plan.badge}</span>
                )}

                <div className={styles.iconContainer} aria-hidden="true">
                  <Icon strokeWidth={1.8} />
                </div>

                <h3 className={styles.cardTitle}>{plan.name}</h3>

                <p className={styles.cardDescription}>{plan.description}</p>

                <div className={styles.priceContainer}>
                  {plan.previousPrice && (
                    <span className={styles.previousPrice}>
                      Antes {plan.previousPrice}
                    </span>
                  )}

                  <div className={styles.priceLine}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.frequency}>{plan.frequency}</span>
                  </div>
                </div>

                <ul
                  className={styles.featureList}
                  aria-label={`Incluye el plan ${plan.name}`}
                >
                  {plan.features.map((feature) => (
                    <li className={styles.featureItem} key={feature}>
                      <span
                        className={styles.checkContainer}
                        aria-hidden="true"
                      >
                        <Check strokeWidth={2.5} />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className={styles.planButton}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {plan.buttonLabel}
                </a>
              </article>
            )
          })}
        </div>

        <p className={styles.disclaimer}>
          Los precios, horarios y espacios están sujetos a disponibilidad.
          Consulta por WhatsApp para recibir información actualizada.
        </p>
      </div>
    </section>
  )
}

export default Plans