import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Clock3,
  Dumbbell,
  HeartHandshake,
  Info,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react'
import styles from './PlansPage.module.css'

type PlanVariant = 'standard' | 'featured' | 'pool'

type Plan = {
  name: string
  category: string
  description: string
  price: string
  previousPrice?: string
  frequency: string
  badge?: string
  features: string[]
  message: string
  variant: PlanVariant
  icon: typeof Dumbbell
}

const plans: Plan[] = [
  {
    name: 'Gimnasio',
    category: 'Entrenamiento',
    description:
      'Acceso al gimnasio con herramientas para construir una rutina organizada y avanzar según tus objetivos.',
    price: '₡26.000',
    frequency: 'por mes',
    features: [
      'Acceso completo al gimnasio',
      'Rutina de entrenamiento',
      'Valoración corporal',
      'Acompañamiento semi-personalizado',
    ],
    message:
      'Hola, me gustaría recibir información sobre la mensualidad de gimnasio de Aquarovi.',
    variant: 'standard',
    icon: Dumbbell,
  },
  {
    name: 'Premium Fitness',
    category: 'Gimnasio + piscina',
    description:
      'Combina el gimnasio con una sesión semanal de piscina para disfrutar una rutina más completa.',
    price: '₡39.900',
    previousPrice: '₡52.000',
    frequency: 'por mes',
    badge: 'Más elegido',
    features: [
      'Acceso completo al gimnasio',
      'Piscina una vez por semana',
      'Rutina y valoración corporal',
      'Dos experiencias en un mismo lugar',
    ],
    message:
      'Hola, me gustaría recibir información sobre el plan Premium Fitness de gimnasio y piscina.',
    variant: 'featured',
    icon: Sparkles,
  },
  {
    name: 'Pro Fitness',
    category: 'Gimnasio + piscina',
    description:
      'Una opción para combinar entrenamiento de gimnasio con dos sesiones semanales de piscina.',
    price: '₡49.900',
    previousPrice: '₡60.000',
    frequency: 'por mes',
    badge: 'Mayor frecuencia',
    features: [
      'Acceso completo al gimnasio',
      'Piscina dos veces por semana',
      'Rutina y valoración corporal',
      'Mayor variedad semanal',
    ],
    message:
      'Hola, me gustaría recibir información sobre el plan Pro Fitness de gimnasio y piscina.',
    variant: 'featured',
    icon: Sparkles,
  },
]

const poolPlans = [
  {
    name: 'Piscina una vez por semana',
    price: '₡26.000',
    frequency: 'por mes',
    description:
      'Una opción para aprender, practicar o disfrutar una actividad acuática semanal.',
    features: [
      'Una sesión semanal',
      'Piscina climatizada',
      'Acompañamiento de instructor',
      'Opciones según edad y nivel',
    ],
    message:
      'Hola, me gustaría recibir información sobre piscina una vez por semana.',
  },
  {
    name: 'Piscina dos veces por semana',
    price: '₡34.000',
    frequency: 'por mes',
    description:
      'Mayor frecuencia para avanzar con constancia y aprovechar más actividades dentro del agua.',
    features: [
      'Dos sesiones semanales',
      'Piscina climatizada',
      'Mayor continuidad en el proceso',
      'Sujeto a horarios disponibles',
    ],
    message:
      'Hola, me gustaría recibir información sobre piscina dos veces por semana.',
  },
  {
    name: 'Adulto mayor individual',
    price: '₡19.000',
    frequency: 'por mes',
    description:
      'Opción individual una vez por semana para personas adultas mayores.',
    features: [
      'Una sesión semanal',
      'Actividad de menor impacto',
      'Acompañamiento durante la sesión',
      'Sujeto a valoración y disponibilidad',
    ],
    message:
      'Hola, me gustaría recibir información sobre la opción individual de piscina para adulto mayor.',
  },
]

const conditions = [
  {
    title: 'Horarios sujetos a disponibilidad',
    description:
      'Los espacios dependen de la actividad, la edad, el nivel y la cantidad de personas inscritas.',
    icon: Clock3,
  },
  {
    title: 'Confirmación de tarifas',
    description:
      'Consulta antes de inscribirte para confirmar precios, promociones y condiciones vigentes.',
    icon: CircleDollarSign,
  },
  {
    title: 'Acompañamiento para elegir',
    description:
      'Podemos ayudarte a identificar el plan que mejor se adapte a tu experiencia y objetivos.',
    icon: HeartHandshake,
  },
  {
    title: 'Ambiente familiar',
    description:
      'Los servicios están pensados para diferentes edades y niveles de experiencia.',
    icon: ShieldCheck,
  },
]

function createWhatsappUrl(message: string) {
  return `https://wa.me/50687081829?text=${encodeURIComponent(message)}`
}

function PlansPage() {
  const generalWhatsappUrl = createWhatsappUrl(
    'Hola, me gustaría recibir ayuda para elegir el plan de Aquarovi que mejor se adapte a mí.',
  )

  return (
    <main>
      <section className={styles.hero} aria-labelledby="plans-page-title">
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Planes de gimnasio y piscina
            </span>

            <h1 className={styles.heroTitle} id="plans-page-title">
              Encuentra una opción para comenzar a sentirte mejor
            </h1>

            <p className={styles.heroDescription}>
              Elige entre gimnasio, piscina o planes combinados. Te ayudamos a
              encontrar una alternativa que se adapte a tus objetivos,
              experiencia y disponibilidad.
            </p>

            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={generalWhatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" strokeWidth={2} />
                Ayúdame a elegir
              </a>

              <a className={styles.secondaryButton} href="#planes-destacados">
                Ver los planes
                <ArrowRight aria-hidden="true" strokeWidth={2} />
              </a>
            </div>

            <ul className={styles.heroFeatures}>
              <li>
                <Check aria-hidden="true" />
                Opciones de gimnasio y piscina
              </li>

              <li>
                <Check aria-hidden="true" />
                Planes combinados
              </li>

              <li>
                <Check aria-hidden="true" />
                Atención por WhatsApp
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.mainVisualCard}>
              <span className={styles.visualNumber}>03</span>

              <div className={styles.visualIcons} aria-hidden="true">
                <span>
                  <Dumbbell strokeWidth={1.6} />
                </span>

                <span>
                  <Waves strokeWidth={1.6} />
                </span>
              </div>

              <div>
                <span className={styles.visualLabel}>Elige y combina</span>
                <h2 className={styles.visualTitle}>Planes</h2>

                <p className={styles.visualText}>
                  Alternativas para entrenar, nadar o disfrutar ambos servicios.
                </p>
              </div>
            </div>

            <div className={styles.floatingCard}>
              <Sparkles aria-hidden="true" strokeWidth={1.8} />

              <div>
                <strong>Opciones combinadas</strong>
                <span>
                  Integra gimnasio y piscina en una misma mensualidad.
                </span>
              </div>
            </div>

            <div className={styles.heroDecoration} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.mainPlans}`}
        id="planes-destacados"
        aria-labelledby="main-plans-title"
      >
        <div className="container">
          <div className={styles.sectionIntroduction}>
            <div>
              <span className={styles.sectionEyebrow}>
                Opciones destacadas
              </span>

              <h2 className={styles.sectionTitle} id="main-plans-title">
                Elige gimnasio o combina dos experiencias
              </h2>
            </div>

            <p className={styles.sectionDescription}>
              Los planes combinados permiten complementar el entrenamiento de
              gimnasio con actividades en piscina dentro de una misma opción.
            </p>
          </div>

          <div className={styles.mainPlansGrid}>
            {plans.map((plan) => {
              const Icon = plan.icon

              return (
                <article
                  className={`${styles.planCard} ${
                    plan.variant === 'featured'
                      ? styles.featuredPlan
                      : styles.standardPlan
                  }`}
                  key={plan.name}
                >
                  {plan.badge && (
                    <span className={styles.badge}>{plan.badge}</span>
                  )}

                  <div className={styles.planIcon} aria-hidden="true">
                    <Icon strokeWidth={1.8} />
                  </div>

                  <span className={styles.planCategory}>{plan.category}</span>

                  <h3 className={styles.planName}>{plan.name}</h3>

                  <p className={styles.planDescription}>
                    {plan.description}
                  </p>

                  <div className={styles.priceContainer}>
                    {plan.previousPrice && (
                      <span className={styles.previousPrice}>
                        Antes {plan.previousPrice}
                      </span>
                    )}

                    <div className={styles.priceLine}>
                      <span className={styles.price}>{plan.price}</span>
                      <span className={styles.frequency}>
                        {plan.frequency}
                      </span>
                    </div>
                  </div>

                  <ul
                    className={styles.featureList}
                    aria-label={`Beneficios de ${plan.name}`}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span aria-hidden="true">
                          <Check strokeWidth={2.5} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    className={styles.planButton}
                    href={createWhatsappUrl(plan.message)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar este plan
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.poolPlans}`}
        aria-labelledby="pool-plans-title"
      >
        <div className="container">
          <div className={styles.poolHeader}>
            <span className={styles.sectionEyebrow}>Opciones de piscina</span>

            <h2 className={styles.sectionTitle} id="pool-plans-title">
              Elige la frecuencia que mejor se adapte a ti
            </h2>

            <p className={styles.poolDescription}>
              Las modalidades y espacios disponibles pueden variar según la
              edad, el nivel y el tipo de actividad acuática.
            </p>
          </div>

          <div className={styles.poolPlansGrid}>
            {poolPlans.map((plan, index) => (
              <article className={styles.poolPlanCard} key={plan.name}>
                <div className={styles.poolPlanTop}>
                  <span className={styles.poolNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className={styles.poolIcon} aria-hidden="true">
                    {index === 2 ? (
                      <Users strokeWidth={1.8} />
                    ) : (
                      <Waves strokeWidth={1.8} />
                    )}
                  </span>
                </div>

                <h3>{plan.name}</h3>
                <p className={styles.poolPlanDescription}>
                  {plan.description}
                </p>

                <div className={styles.poolPriceLine}>
                  <span>{plan.price}</span>
                  <small>{plan.frequency}</small>
                </div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={createWhatsappUrl(plan.message)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar disponibilidad
                  <ArrowRight aria-hidden="true" strokeWidth={2} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.conditions}`}
        aria-labelledby="conditions-title"
      >
        <div className={`container ${styles.conditionsContainer}`}>
          <div className={styles.conditionsIntroduction}>
            <span className={styles.conditionsIcon} aria-hidden="true">
              <Info strokeWidth={1.7} />
            </span>

            <span className={styles.conditionsEyebrow}>
              Información importante
            </span>

            <h2 id="conditions-title">
              Consulta las condiciones antes de inscribirte
            </h2>

            <p>
              Queremos brindarte información clara y actualizada para que elijas
              con confianza.
            </p>
          </div>

          <div className={styles.conditionsGrid}>
            {conditions.map((condition) => {
              const Icon = condition.icon

              return (
                <article key={condition.title}>
                  <span aria-hidden="true">
                    <Icon strokeWidth={1.8} />
                  </span>

                  <div>
                    <h3>{condition.title}</h3>
                    <p>{condition.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.finalCta}`}>
        <div className={`container ${styles.finalCtaContainer}`}>
          <div>
            <span className={styles.finalCtaEyebrow}>
              Todavía no sabes cuál elegir
            </span>

            <h2>Te ayudamos a encontrar tu mejor opción</h2>

            <p>
              Cuéntanos qué servicio te interesa, cuántas veces deseas asistir y
              cuáles son tus objetivos. Te orientaremos según la disponibilidad.
            </p>
          </div>

          <a
            className={styles.finalCtaButton}
            href={generalWhatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" strokeWidth={2} />
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default PlansPage