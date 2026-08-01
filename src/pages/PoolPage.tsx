import {
  ArrowRight,
  Baby,
  Check,
  Clock3,
  HeartHandshake,
  MessageCircle,
  PersonStanding,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  Users,
  Waves,
} from 'lucide-react'
import { Link } from 'react-router'
import styles from './PoolPage.module.css'

const whatsappMessage =
  'Hola, me gustaría recibir información sobre las clases y actividades de piscina de Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

const poolBenefits = [
  {
    title: 'Piscina climatizada',
    description:
      'Disfruta actividades acuáticas en una piscina con temperatura agradable.',
    icon: ThermometerSun,
  },
  {
    title: 'Techada y cerrada',
    description:
      'Un espacio protegido para disfrutar las clases con mayor comodidad.',
    icon: ShieldCheck,
  },
  {
    title: 'Opciones para distintas edades',
    description:
      'Actividades para niños, adultos y personas adultas mayores.',
    icon: Users,
  },
  {
    title: 'Acompañamiento de instructor',
    description:
      'Orientación durante las clases para avanzar con confianza y seguridad.',
    icon: HeartHandshake,
  },
]

const activities = [
  {
    number: '01',
    title: 'Clases para niños',
    description:
      'Aprendizaje progresivo para desarrollar confianza, coordinación y habilidades dentro del agua.',
    icon: Baby,
    features: [
      'Adaptación al medio acuático',
      'Aprendizaje según edad y nivel',
      'Acompañamiento de instructor',
    ],
    variant: 'deep',
  },
  {
    number: '02',
    title: 'Clases para adultos',
    description:
      'Opciones para aprender desde cero, mejorar la técnica o retomar la natación.',
    icon: PersonStanding,
    features: [
      'Diferentes niveles de experiencia',
      'Trabajo de técnica y resistencia',
      'Proceso progresivo',
    ],
    variant: 'light',
  },
  {
    number: '03',
    title: 'Nado libre',
    description:
      'Espacios para practicar, entrenar o disfrutar la piscina de forma independiente.',
    icon: Waves,
    features: [
      'Práctica a tu propio ritmo',
      'Complemento para tu entrenamiento',
      'Sujeto a horarios disponibles',
    ],
    variant: 'light',
  },
  {
    number: '04',
    title: 'Aquafitness',
    description:
      'Actividad grupal dinámica que combina movimiento, resistencia y ejercicio cardiovascular.',
    icon: Sparkles,
    features: [
      'Ejercicio de bajo impacto',
      'Ambiente grupal',
      'Trabajo de cuerpo completo',
    ],
    variant: 'deep',
  },
]

const preparationItems = [
  'Tomar una ducha antes de ingresar a la piscina.',
  'Evitar cremas, maquillaje y perfumes antes de nadar.',
  'Utilizar traje de baño adecuado y los implementos solicitados.',
  'Llegar con tiempo para prepararse antes de la clase.',
]

function PoolPage() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="pool-title">
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Piscina Aquarovi en San Ramón
            </span>

            <h1 className={styles.heroTitle} id="pool-title">
              Muévete, aprende y disfruta dentro del agua
            </h1>

            <p className={styles.heroDescription}>
              Encuentra clases y actividades acuáticas para distintas edades y
              objetivos en una piscina climatizada, techada y cerrada.
            </p>

            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" strokeWidth={2} />
                Consultar por WhatsApp
              </a>

              <Link className={styles.secondaryButton} to="/planes">
                Conocer los planes
                <ArrowRight aria-hidden="true" strokeWidth={2} />
              </Link>
            </div>

            <ul className={styles.heroFeatures}>
              <li>
                <Check aria-hidden="true" />
                Piscina climatizada
              </li>

              <li>
                <Check aria-hidden="true" />
                Clases para niños y adultos
              </li>

              <li>
                <Check aria-hidden="true" />
                Actividades para diferentes objetivos
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual} aria-label="Piscina Aquarovi">
            <div className={styles.mainVisualCard}>
              <span className={styles.visualNumber}>02</span>

              <div className={styles.visualIcon}>
                <Waves aria-hidden="true" strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.visualLabel}>Disfruta</span>
                <h2 className={styles.visualTitle}>Piscina</h2>

                <p className={styles.visualText}>
                  Un espacio para aprender, entrenar y sentirte mejor dentro
                  del agua.
                </p>
              </div>
            </div>

            <div className={styles.floatingCard}>
              <ThermometerSun aria-hidden="true" strokeWidth={1.8} />

              <div>
                <strong>Temperatura agradable</strong>
                <span>
                  Piscina climatizada para disfrutar las actividades con mayor
                  comodidad.
                </span>
              </div>
            </div>

            <div className={styles.heroDecoration} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.benefits}`}
        aria-labelledby="pool-benefits-title"
      >
        <div className="container">
          <div className={styles.sectionIntroduction}>
            <div>
              <span className={styles.sectionEyebrow}>
                Comodidad y acompañamiento
              </span>

              <h2 className={styles.sectionTitle} id="pool-benefits-title">
                Un espacio pensado para disfrutar el agua
              </h2>
            </div>

            <p className={styles.sectionDescription}>
              La piscina de Aquarovi reúne condiciones que permiten desarrollar
              diferentes actividades acuáticas en un ambiente cercano y
              familiar.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {poolBenefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <article className={styles.benefitCard} key={benefit.title}>
                  <div className={styles.cardHeader}>
                    <span className={styles.iconContainer} aria-hidden="true">
                      <Icon strokeWidth={1.8} />
                    </span>

                    <span className={styles.cardNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.activities}`}
        aria-labelledby="pool-activities-title"
      >
        <div className="container">
          <div className={styles.activitiesHeader}>
            <span className={styles.sectionEyebrow}>
              Actividades acuáticas
            </span>

            <h2 className={styles.sectionTitle} id="pool-activities-title">
              Encuentra una opción para cada etapa
            </h2>

            <p className={styles.activitiesDescription}>
              Puedes elegir entre aprendizaje, práctica independiente,
              acondicionamiento físico y actividades grupales.
            </p>
          </div>

          <div className={styles.activitiesGrid}>
            {activities.map((activity) => {
              const Icon = activity.icon

              return (
                <article
                  className={`${styles.activityCard} ${
                    activity.variant === 'deep'
                      ? styles.deepCard
                      : styles.lightCard
                  }`}
                  key={activity.title}
                >
                  <div className={styles.activityTop}>
                    <span>{activity.number}</span>
                    <Icon aria-hidden="true" strokeWidth={1.7} />
                  </div>

                  <div className={styles.activityContent}>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>

                    <ul aria-label={`Características de ${activity.title}`}>
                      {activity.features.map((feature) => (
                        <li key={feature}>
                          <Check aria-hidden="true" strokeWidth={2.5} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.olderAdults}`}
        aria-labelledby="older-adults-title"
      >
        <div className={`container ${styles.olderAdultsContainer}`}>
          <div className={styles.olderAdultsVisual}>
            <span className={styles.olderAdultsIcon} aria-hidden="true">
              <HeartHandshake strokeWidth={1.6} />
            </span>

            <span className={styles.olderAdultsLabel}>
              Movimiento y bienestar
            </span>

            <h2 className={styles.olderAdultsVisualTitle}>
              Opciones para personas adultas mayores
            </h2>

            <p>
              El agua permite realizar movimientos con menor impacto y puede
              convertirse en una alternativa agradable para mantenerse activo.
            </p>

            <div className={styles.olderAdultsDecoration} aria-hidden="true" />
          </div>

          <div className={styles.olderAdultsContent}>
            <span className={styles.sectionEyebrow}>
              Actividades adaptadas
            </span>

            <h2 className={styles.sectionTitle} id="older-adults-title">
              Mantente activo en un ambiente cómodo
            </h2>

            <p className={styles.olderAdultsText}>
              Contamos con opciones acuáticas que pueden adaptarse a diferentes
              niveles de experiencia, movilidad y objetivos personales.
            </p>

            <ul className={styles.olderAdultsList}>
              <li>
                <span aria-hidden="true">
                  <Check strokeWidth={2.5} />
                </span>
                Ejercicio de menor impacto para las articulaciones.
              </li>

              <li>
                <span aria-hidden="true">
                  <Check strokeWidth={2.5} />
                </span>
                Acompañamiento durante la actividad.
              </li>

              <li>
                <span aria-hidden="true">
                  <Check strokeWidth={2.5} />
                </span>
                Trabajo de movilidad, fuerza y condición física.
              </li>

              <li>
                <span aria-hidden="true">
                  <Check strokeWidth={2.5} />
                </span>
                Ambiente cercano y respetuoso.
              </li>
            </ul>

            <a
              className={styles.olderAdultsButton}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Consultar opciones
              <ArrowRight aria-hidden="true" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.preparation}`}
        aria-labelledby="preparation-title"
      >
        <div className={`container ${styles.preparationContainer}`}>
          <div className={styles.preparationContent}>
            <span className={styles.preparationEyebrow}>
              Antes de ingresar
            </span>

            <h2 className={styles.preparationTitle} id="preparation-title">
              Ayúdanos a mantener una piscina limpia y agradable
            </h2>

            <p className={styles.preparationDescription}>
              Estas recomendaciones permiten cuidar el agua y mejorar la
              experiencia de todas las personas.
            </p>

            <ul className={styles.preparationList}>
              {preparationItems.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">
                    <Check strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className={styles.scheduleCard}>
            <span className={styles.scheduleIcon} aria-hidden="true">
              <Clock3 strokeWidth={1.7} />
            </span>

            <span className={styles.scheduleLabel}>
              Horarios y disponibilidad
            </span>

            <h3>Consulta el espacio que mejor se adapte a ti</h3>

            <p>
              Los horarios pueden variar según la actividad, la edad, el nivel
              y la disponibilidad de espacios.
            </p>

            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Consultar horarios
              <ArrowRight aria-hidden="true" strokeWidth={2} />
            </a>
          </aside>

          <div className={styles.preparationDecoration} aria-hidden="true" />
        </div>
      </section>

      <section className={`section ${styles.finalCta}`}>
        <div className={`container ${styles.finalCtaContainer}`}>
          <div>
            <span className={styles.finalCtaEyebrow}>
              Tu experiencia puede comenzar aquí
            </span>

            <h2>Encuentra la actividad acuática ideal para ti</h2>

            <p>
              Escríbenos para conocer horarios, espacios disponibles y la
              modalidad que mejor se adapte a tu edad y objetivos.
            </p>
          </div>

          <a
            className={styles.finalCtaButton}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" strokeWidth={2} />
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default PoolPage