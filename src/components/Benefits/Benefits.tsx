import {
  CalendarDays,
  Dumbbell,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Waves,
} from 'lucide-react'
import styles from './Benefits.module.css'

const benefits = [
  {
    title: 'Dos experiencias en un solo lugar',
    description:
      'Combina gimnasio y piscina para construir una rutina más completa, dinámica y adaptada a tus objetivos.',
    icon: Sparkles,
  },
  {
    title: 'Piscina climatizada',
    description:
      'Entrena y disfruta actividades acuáticas en una piscina techada, cerrada y con temperatura agradable.',
    icon: Waves,
  },
  {
    title: 'Gimnasio equipado',
    description:
      'Encuentra espacios y equipos para trabajar fuerza, resistencia, movilidad y condición física.',
    icon: Dumbbell,
  },
  {
    title: 'Acompañamiento cercano',
    description:
      'Recibe orientación durante tu proceso para que entrenes con mayor confianza y claridad.',
    icon: HeartHandshake,
  },
  {
    title: 'Opciones para distintas edades',
    description:
      'Contamos con actividades para niños, adultos, adultos mayores y personas con diferentes niveles de experiencia.',
    icon: CalendarDays,
  },
  {
    title: 'Ambiente familiar y seguro',
    description:
      'Disfruta instalaciones pensadas para que te sientas cómodo, acompañado y bienvenido desde el primer día.',
    icon: ShieldCheck,
  },
]

const whatsappMessage =
  'Hola, me gustaría conocer cuál servicio o plan de Aquarovi se adapta mejor a mis objetivos.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

function Benefits() {
  return (
    <section
      className={`section ${styles.benefits}`}
      aria-labelledby="benefits-title"
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.introduction}>
          <span className={styles.eyebrow}>Una experiencia más completa</span>

          <h2 className={styles.title} id="benefits-title">
            Más que entrenar, encuentra un lugar para sentirte bien
          </h2>

          <p className={styles.introductionText}>
            En Aquarovi reunimos espacios, servicios y acompañamiento para que
            puedas avanzar a tu ritmo en un ambiente cercano y familiar.
          </p>

          <a
            className={styles.contactButton}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Encontrar mi mejor opción
          </a>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <article className={styles.card} key={benefit.title}>
                <div className={styles.cardTop}>
                  <span className={styles.iconContainer} aria-hidden="true">
                    <Icon className={styles.icon} strokeWidth={1.8} />
                  </span>

                  <span className={styles.number}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{benefit.title}</h3>

                <p className={styles.cardDescription}>
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits