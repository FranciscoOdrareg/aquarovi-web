import { useEffect } from 'react'
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Clock3,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Info,
  MessageCircle,
  PersonStanding,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react'
import { useLocation } from 'react-router'
import SEO from '../components/SEO/SEO'
import styles from './PlansPage.module.css'

type PlanVariant = 'standard' | 'featured'

type MainPlan = {
  name: string
  category: string
  description: string
  price: string
  frequency: string
  previousPrice?: string
  badge?: string
  features: string[]
  message: string
  variant: PlanVariant
  icon: typeof Dumbbell
}

type RateOption = {
  label: string
  price: string
  note?: string
}

type RateGroup = {
  label: string
  rates: RateOption[]
}

type PoolActivity = {
  name: string
  description: string
  icon: typeof Waves
  rates?: RateOption[]
  groups?: RateGroup[]
  details: string[]
  message: string
}

const gymRates: RateOption[] = [
  {
    label: 'Tarifa normal',
    price: '₡26.000',
  },
  {
    label: 'Estudiantes de colegio',
    price: '₡17.500',
    note: 'Requiere comprobante',
  },
  {
    label: 'Estudiantes universitarios',
    price: '₡22.500',
    note: 'Requiere carnet vigente',
  },
  {
    label: 'Adultos mayores (65+)',
    price: '₡18.900',
  },
]

const gymGroupClasses = [
  {
    name: 'Funcionales',
    schedule: ['Lunes · 6:00 p. m.'],
    description:
      'Sesión grupal para complementar tu entrenamiento con fuerza, resistencia y movilidad.',
    icon: Dumbbell,
  },
  {
    name: 'Zumba',
    schedule: [
      'Miércoles · 7:00 p. m.',
      'Sábados · 8:45 a. m.',
    ],
    description:
      'Clase grupal de baile y movimiento para agregar cardio y energía a tu semana.',
    icon: Users,
  },
]

const mainPlans: MainPlan[] = [
  {
    name: 'Gimnasio',
    category: 'Entrenamiento',
    description:
      'Entrena con acceso completo al gimnasio, mediciones corporales, rutina según tus objetivos y orientación del instructor de turno.',
    price: '₡26.000',
    frequency: 'por mes',
    features: [
      'Acceso completo al gimnasio',
      'Mediciones corporales',
      'Rutina creada según tus objetivos',
      'Orientación del instructor de turno',
      'Funcionales y Zumba incluidos*',
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
      'Combina gimnasio completo con una clase de natación con instructor una vez por semana.',
    price: '₡39.900',
    frequency: 'por mes',
    badge: '1× piscina / semana',
    features: [
      'Acceso completo al gimnasio',
      'Natación con instructor 1 vez por semana',
      'Funcionales y Zumba incluidos*',
    ],
    message:
      'Hola, me gustaría recibir información sobre el plan Premium Fitness de gimnasio y piscina.',
    variant: 'featured',
    icon: Sparkles,
  },
  {
    name: 'PRO Fitness',
    category: 'Gimnasio + piscina',
    description:
      'Mayor frecuencia en piscina para complementar tu entrenamiento semanal de gimnasio.',
    price: '₡49.900',
    frequency: 'por mes',
    badge: '2× piscina / semana',
    features: [
      'Acceso completo al gimnasio',
      'Natación con instructor 2 veces por semana',
      'Funcionales y Zumba incluidos*',
    ],
    message:
      'Hola, me gustaría recibir información sobre el plan PRO Fitness de gimnasio y piscina.',
    variant: 'featured',
    icon: Sparkles,
  },
]

const poolActivities: PoolActivity[] = [
  {
    name: 'Clases con instructor',
    description:
      'Sesiones semipersonalizadas con rutina según las necesidades de cada persona y orientación del instructor desde fuera de la piscina.',
    icon: PersonStanding,
    groups: [
      {
        label: 'Niños de 3 a 6 años',
        rates: [
          {
            label: '1 vez por semana',
            price: '₡28.000',
          },
          {
            label: '2 veces por semana',
            price: '₡36.000',
          },
          {
            label: '3 veces por semana',
            price: '₡44.000',
          },
        ],
      },
      {
        label: '7 años en adelante y adultos',
        rates: [
          {
            label: '1 vez por semana',
            price: '₡26.000',
          },
          {
            label: '2 veces por semana',
            price: '₡34.000',
          },
          {
            label: '3 veces por semana',
            price: '₡41.000',
          },
        ],
      },
      {
        label: 'Adultos mayores',
        rates: [
          {
            label: '1 vez por semana',
            price: '₡19.000',
          },
          {
            label: '2 veces por semana',
            price: '₡27.000',
          },
          {
            label: '3 veces por semana',
            price: '₡35.000',
          },
        ],
      },
    ],
    details: [
      'Sesiones de aproximadamente 55 minutos',
      'Rutina adaptada a las necesidades de la persona',
      'Instructor brinda indicaciones durante la sesión',
    ],
    message:
      'Hola, me gustaría recibir información sobre las clases de piscina con instructor de Aquarovi.',
  },
  {
    name: 'Nado libre',
    description:
      'Opción para practicar o entrenar de forma independiente. Esta modalidad no incluye instructor.',
    icon: Waves,
    groups: [
      {
        label: 'Niños de 3 a 6 años',
        rates: [
          {
            label: '1 vez por semana',
            price: '₡26.000',
          },
          {
            label: '2 veces por semana',
            price: '₡34.000',
          },
          {
            label: '3 veces por semana',
            price: '₡41.000',
          },
        ],
      },
      {
        label: '7 años en adelante, adultos y adultos mayores',
        rates: [
          {
            label: '1 vez por semana',
            price: '₡23.000',
          },
          {
            label: '2 veces por semana',
            price: '₡30.000',
          },
          {
            label: '3 veces por semana',
            price: '₡38.000',
          },
        ],
      },
    ],
    details: [
      'No incluye instructor',
      'Sesiones de aproximadamente 55 minutos',
      'Sujeto a horarios y espacios disponibles',
    ],
    message:
      'Hola, me gustaría recibir información sobre nado libre en Aquarovi.',
  },
  {
    name: 'Aquafitness',
    description:
      'Clase grupal de alta intensidad dentro de la piscina, dirigida a adultos y adultos mayores.',
    icon: HeartHandshake,
    rates: [
      {
        label: '1 vez por semana',
        price: '₡23.000',
      },
      {
        label: '2 veces por semana',
        price: '₡30.000',
      },
      {
        label: '3 veces por semana',
        price: '₡35.000',
      },
    ],
    details: [
      'Lunes, miércoles o viernes a las 8:00 a. m.',
      'Clase grupal con rutina creada por el instructor',
      'Duración aproximada de 55 minutos',
    ],
    message:
      'Hola, me gustaría recibir información sobre Aquafitness en Aquarovi.',
  },
  {
    name: 'Aquaterapia',
    description:
      'Clase grupal de baja intensidad dentro de la piscina para adultos y adultos mayores.',
    icon: HeartHandshake,
    rates: [
      {
        label: '1 vez por semana',
        price: '₡20.000',
      },
      {
        label: '2 veces por semana',
        price: '₡27.000',
      },
    ],
    details: [
      'Martes o miércoles a las 11:00 a. m.',
      'Clase grupal con rutina creada por el instructor',
      'Duración aproximada de 55 minutos',
    ],
    message:
      'Hola, me gustaría recibir información sobre Aquaterapia en Aquarovi.',
  },
]


const poolModeGuide = [
  {
    title: 'Clase con instructor',
    description:
      'Para aprender, mejorar técnica o seguir una rutina guiada dentro de la piscina.',
    icon: PersonStanding,
  },
  {
    title: 'Nado libre',
    description:
      'Para practicar o entrenar de forma independiente y a tu propio ritmo.',
    icon: Waves,
  },
  {
    title: 'Aquafitness',
    description:
      'Para adultos que buscan una actividad grupal más intensa, dinámica y cardiovascular.',
    icon: HeartHandshake,
  },
  {
    title: 'Aquaterapia',
    description:
      'Para adultos y adultos mayores que prefieren ejercicios acuáticos de baja intensidad.',
    icon: HeartHandshake,
  },
]

const dailyPasses = [
  {
    name: 'Gimnasio',
    price: '₡4.000',
    icon: Dumbbell,
  },
  {
    name: 'Clase con instructor',
    price: '₡8.500',
    icon: PersonStanding,
  },
  {
    name: 'Nado libre',
    price: '₡7.500',
    icon: Waves,
  },
  {
    name: 'Aquafitness',
    price: '₡6.000',
    icon: HeartHandshake,
  },
  {
    name: 'Aquaterapia',
    price: '₡6.000',
    icon: HeartHandshake,
  },
]

const conditions = [
  {
    title: 'Horarios sujetos a disponibilidad',
    description:
      'Los espacios dependen de la actividad, edad, nivel y cantidad de personas inscritas.',
    icon: Clock3,
  },
  {
    title: 'Clases grupales con reserva',
    description:
      'Funcionales y zumba requieren reservar espacio porque se trabaja con cupos limitados.',
    icon: Users,
  },
  {
    title: 'Tarifas especiales',
    description:
      'Las tarifas para estudiantes requieren presentar el documento o identificación correspondiente.',
    icon: GraduationCap,
  },
  {
    title: 'Confirmación antes de inscribirte',
    description:
      'Consulta disponibilidad, tarifas y condiciones vigentes antes de realizar la inscripción.',
    icon: CircleDollarSign,
  },
]


const quickPlanLinks = [
  {
    label: 'Gimnasio',
    href: '#plan-gimnasio',
    icon: Dumbbell,
  },
  {
    label: 'Planes combinados',
    href: '#planes-combinados',
    icon: Sparkles,
  },
  {
    label: 'Piscina',
    href: '#planes-piscina',
    icon: Waves,
  },
  {
    label: 'Pases diarios',
    href: '#pases-diarios',
    icon: CircleDollarSign,
  },
]

function createWhatsappUrl(message: string) {
  return `https://wa.me/50687081829?text=${encodeURIComponent(message)}`
}

function PlansPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const id = decodeURIComponent(location.hash.slice(1))

    const timeout = window.setTimeout(() => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [location.hash])

  const generalWhatsappUrl = createWhatsappUrl(
    'Hola, me gustaría recibir ayuda para elegir el plan de Aquarovi que mejor se adapte a mí.',
  )

  return (
    <>
      <SEO
        title="Planes y precios | Gimnasio y piscina Aquarovi"
        description="Consulta los planes y precios de Aquarovi en San Ramón: gimnasio, piscina, planes combinados, tarifas especiales y pases diarios."
        canonical="https://aquarovi-web.vercel.app/planes"
      />

      <main>
        <section className={styles.hero} aria-labelledby="plans-page-title">
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Planes de gimnasio y piscina
            </span>

            <h1 className={styles.heroTitle} id="plans-page-title">
              Encuentra una opción para comenzar a{' '}
              <span>sentirte mejor</span>
            </h1>

            <p className={styles.heroDescription}>
              Consulta tarifas de gimnasio, piscina, planes combinados y pases
              diarios. Te ayudamos a encontrar una alternativa según tu edad,
              objetivos y disponibilidad.
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
                Tarifas mensuales
              </li>

              <li>
                <Check aria-hidden="true" />
                Planes combinados
              </li>

              <li>
                <Check aria-hidden="true" />
                Pases diarios
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
                <strong>Opciones para diferentes necesidades</strong>

                <span>
                  Mensualidades, tarifas especiales y pases por día.
                </span>
              </div>
            </div>

            <div className={styles.heroDecoration} aria-hidden="true" />
          </div>
        </div>
      </section>

      <nav
        className={styles.quickNavigation}
        aria-label="Accesos rápidos a los planes"
      >
        <div className={`container ${styles.quickNavigationContainer}`}>
          <span className={styles.quickNavigationLabel}>
            Ir directamente a
          </span>

          <div className={styles.quickNavigationLinks}>
            {quickPlanLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  className={styles.quickNavigationLink}
                  href={item.href}
                  key={item.href}
                >
                  <span
                    className={styles.quickNavigationIcon}
                    aria-hidden="true"
                  >
                    <Icon strokeWidth={1.8} />
                  </span>

                  <strong>{item.label}</strong>

                  <ArrowRight aria-hidden="true" strokeWidth={2} />
                </a>
              )
            })}
          </div>
        </div>
      </nav>

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
                Gimnasio y planes combinados
              </h2>
            </div>

            <p className={styles.sectionDescription}>
              Elige gimnasio o combina entrenamiento y piscina dentro de una
              misma mensualidad.
            </p>
          </div>

          <div className={styles.mainPlansGrid}>
            {mainPlans.map((plan) => {
              const Icon = plan.icon

              return (
                <article
                  className={`${styles.planCard} ${
                    plan.variant === 'featured'
                      ? styles.featuredPlan
                      : styles.standardPlan
                  } ${
                    plan.name === 'Premium Fitness'
                      ? styles.premiumPlan
                      : plan.name === 'PRO Fitness'
                        ? styles.proPlan
                        : ''
                  }`}
                  id={
                    plan.name === 'Gimnasio'
                      ? 'plan-gimnasio'
                      : plan.name === 'Premium Fitness'
                        ? 'planes-combinados'
                        : undefined
                  }
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

          <p className={styles.groupClassesNote}>
            * Funcionales y Zumba están incluidos en estos planes. Los horarios y
            detalles de reserva se muestran más adelante.
          </p>
        </div>
      </section>

      <section
        className={`section ${styles.gymRates}`}
        aria-labelledby="gym-rates-title"
      >
        <div className="container">
          <div className={styles.poolHeader}>
            <span className={styles.sectionEyebrow}>
              Tarifas de gimnasio
            </span>

            <h2 className={styles.sectionTitle} id="gym-rates-title">
              Opciones según tu perfil
            </h2>

            <p className={styles.poolDescription}>
              Compara rápidamente la tarifa normal con las mensualidades
              especiales para estudiantes y adultos mayores.
            </p>
          </div>

          <div className={styles.rateGrid}>
            {gymRates.map((rate) => (
              <article className={styles.rateCard} key={rate.label}>
                <span className={styles.rateIcon} aria-hidden="true">
                  {rate.label.includes('colegio') ||
                  rate.label.includes('universitarios') ? (
                    <GraduationCap strokeWidth={1.8} />
                  ) : rate.label.includes('mayores') ? (
                    <Users strokeWidth={1.8} />
                  ) : (
                    <Dumbbell strokeWidth={1.8} />
                  )}
                </span>

                <h3>{rate.label}</h3>

                <div className={styles.ratePrice}>
                  {rate.price}
                  <small> / mes</small>
                </div>

                {rate.note && (
                  <span className={styles.rateCondition}>{rate.note}</span>
                )}
              </article>
            ))}
          </div>

          <p className={styles.specialRatesNote}>
            <Info aria-hidden="true" strokeWidth={1.8} />
            <span>
              <strong>Tarifas especiales:</strong> para aplicar los precios de
              estudiante se debe presentar el documento correspondiente.
              Consulta vigencia y condiciones antes de inscribirte.
            </span>
          </p>

          <div className={styles.gymScheduleNote}>
            <Clock3 aria-hidden="true" strokeWidth={1.8} />

            <div>
              <strong>Horario del gimnasio</strong>
              <p>
                Lunes a viernes de 5:00 a. m. a 9:00 p. m. y sábados de
                8:00 a. m. a 3:00 p. m.
              </p>
            </div>
          </div>

          <div className={styles.groupClassesBlock}>
            <div className={styles.groupClassesHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  Clases incluidas
                </span>

                <h3>Complementa tu mensualidad con clases grupales</h3>
              </div>

              <p>
                Funcionales y Zumba forman parte de los planes de gimnasio y
                combinados. Reserva tu espacio con anticipación porque se
                trabaja con cupos limitados.
              </p>
            </div>

            <div className={styles.groupClassesGrid}>
              {gymGroupClasses.map((groupClass) => {
                const Icon = groupClass.icon

                return (
                  <article
                    className={styles.groupClassCard}
                    key={groupClass.name}
                  >
                    <span className={styles.groupClassIcon} aria-hidden="true">
                      <Icon strokeWidth={1.8} />
                    </span>

                    <div className={styles.groupClassContent}>
                      <h4>{groupClass.name}</h4>

                      <p>{groupClass.description}</p>

                      <div className={styles.groupClassSchedule}>
                        {groupClass.schedule.map((schedule) => (
                          <span key={schedule}>
                            <Clock3 aria-hidden="true" strokeWidth={2} />
                            {schedule}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <p className={styles.groupClassesReservation}>
              <Info aria-hidden="true" strokeWidth={1.8} />
              Estas clases requieren reserva previa y están sujetas a cupo.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.poolPlans}`}
        id="planes-piscina"
        aria-labelledby="pool-plans-title"
      >
        <div className="container">
          <div className={styles.poolPlansHeader}>
            <div className={styles.poolHeaderCopy}>
              <span className={styles.sectionEyebrow}>
                Opciones de piscina
              </span>

              <h2 className={styles.poolPlansTitle} id="pool-plans-title">
                Elige la <span>actividad</span> y frecuencia que mejor se adapte
                a ti
              </h2>

              <p className={styles.poolDescription}>
                Consulta las mensualidades según modalidad, edad y cantidad de
                sesiones por semana.
              </p>
            </div>

            <aside
              className={styles.poolHighlights}
              aria-label="Características de la piscina"
            >
              <div className={styles.poolHighlightsTop}>
                <span className={styles.poolHighlightsIcon} aria-hidden="true">
                  <Waves strokeWidth={1.7} />
                </span>

                <div>
                  <span className={styles.poolHighlightsEyebrow}>
                    Una experiencia cómoda
                  </span>
                  <strong>Piscina climatizada, techada y cerrada</strong>
                </div>
              </div>

              <div className={styles.poolHighlightsGrid}>
                <div>
                  <Clock3 aria-hidden="true" strokeWidth={1.8} />
                  <span>
                    <strong>55 min</strong>
                    Duración aproximada
                  </span>
                </div>

                <div>
                  <Users aria-hidden="true" strokeWidth={1.8} />
                  <span>
                    <strong>Opciones por edad</strong>
                    Niños, adultos y adultos mayores
                  </span>
                </div>
              </div>
            </aside>
          </div>

          <div
            className={styles.poolModeGuide}
            aria-labelledby="pool-mode-guide-title"
          >
            <div className={styles.poolModeGuideHeader}>
              <span className={styles.sectionEyebrow}>
                Guía rápida
              </span>

              <h3 id="pool-mode-guide-title">
                ¿Cuál opción se adapta mejor a ti?
              </h3>

              <p>
                Una referencia breve para orientarte antes de comparar precios y
                frecuencias.
              </p>
            </div>

            <div className={styles.poolModeGuideGrid}>
              {poolModeGuide.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    className={styles.poolModeGuideItem}
                    key={item.title}
                  >
                    <span
                      className={styles.poolModeGuideIcon}
                      aria-hidden="true"
                    >
                      <Icon strokeWidth={1.8} />
                    </span>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className={styles.poolActivityGrid}>
            {poolActivities.map((activity) => {
              const Icon = activity.icon

              return (
                <article
                  className={styles.poolActivityCard}
                  id={activity.name.toLowerCase().replace(/\s+/g, '-')}
                  key={activity.name}
                >
                  <div className={styles.poolActivityHeader}>
                    <span
                      className={styles.poolActivityIcon}
                      aria-hidden="true"
                    >
                      <Icon strokeWidth={1.8} />
                    </span>

                    <div>
                      <h3>{activity.name}</h3>
                      <p>{activity.description}</p>
                    </div>
                  </div>

                  {activity.groups ? (
                    <div className={styles.rateGroups}>
                      {activity.groups.map((group) => (
                        <section
                          className={styles.rateGroup}
                          key={`${activity.name}-${group.label}`}
                        >
                          <h4>{group.label}</h4>

                          <div className={styles.rateTable}>
                            {group.rates.map((rate) => (
                              <div
                                className={styles.rateRow}
                                key={`${activity.name}-${group.label}-${rate.label}`}
                              >
                                <span>{rate.label}</span>
                                <strong>{rate.price}</strong>
                              </div>
                            ))}
                          </div>
                        </section>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.rateTable}>
                      {activity.rates?.map((rate) => (
                        <div
                          className={styles.rateRow}
                          key={`${activity.name}-${rate.label}`}
                        >
                          <span>{rate.label}</span>
                          <strong>{rate.price}</strong>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className={styles.activityDetails}>
                    {activity.details.map((detail) => (
                      <li key={detail}>
                        <Check aria-hidden="true" strokeWidth={2.5} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <a
                    className={styles.poolActivityButton}
                    href={createWhatsappUrl(activity.message)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar disponibilidad
                    <ArrowRight aria-hidden="true" strokeWidth={2} />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.dailyPasses}`}
        id="pases-diarios"
        aria-labelledby="daily-passes-title"
      >
        <div className="container">
          <div className={styles.poolHeader}>
            <span className={styles.sectionEyebrow}>
              Pases por día
            </span>

            <h2 className={styles.sectionTitle} id="daily-passes-title">
              También puedes venir por una sola sesión
            </h2>

            <p className={styles.poolDescription}>
              Una alternativa práctica para visitar Aquarovi sin adquirir una
              mensualidad.
            </p>
          </div>

          <div className={styles.dailyPassGrid}>
            {dailyPasses.map((pass) => {
              const Icon = pass.icon

              return (
                <article className={styles.dailyPassCard} key={pass.name}>
                  <span aria-hidden="true">
                    <Icon strokeWidth={1.8} />
                  </span>

                  <h3>{pass.name}</h3>
                  <strong>{pass.price}</strong>
                  <small>por día</small>
                </article>
              )
            })}
          </div>

          <p className={styles.dailyPassNote}>
            Los precios de clase con instructor y nado libre aplican para
            niños, adultos y adultos mayores según disponibilidad de la
            modalidad correspondiente.
          </p>
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
              Queremos brindarte información clara para que puedas elegir la
              modalidad que mejor se adapte a ti.
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
              ¿Todavía no sabes cuál elegir?
            </span>

            <h2>Te ayudamos a encontrar tu mejor opción</h2>

            <p>
              Cuéntanos qué servicio te interesa, cuántas veces deseas asistir
              y cuáles son tus objetivos. Te orientaremos según la
              disponibilidad.
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
  </>
  )
}

export default PlansPage