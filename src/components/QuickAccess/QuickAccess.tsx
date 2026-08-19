import {
  ArrowRight,
  Dumbbell,
  HeartHandshake,
  Sparkles,
  Waves,
} from 'lucide-react'
import { Link } from 'react-router'
import styles from './QuickAccess.module.css'

const options = [
  {
    title: 'Gimnasio',
    description:
      'Entrenamiento, rutina, mediciones corporales y acompañamiento.',
    path: '/gimnasio',
    icon: Dumbbell,
  },
  {
    title: 'Piscina y natación',
    description:
      'Clases con instructor, nado libre y opciones para distintas edades.',
    path: '/piscina',
    icon: Waves,
  },
  {
    title: 'Plan combinado',
    description:
      'Combina gimnasio y piscina dentro de una misma mensualidad.',
    path: '/planes#planes-destacados',
    icon: Sparkles,
  },
  {
    title: 'Actividades acuáticas',
    description:
      'Aquafitness y Aquaterapia para adultos y adultos mayores.',
    path: '/planes#pool-plans-title',
    icon: HeartHandshake,
  },
]

function QuickAccess() {
  return (
    <section
      className={styles.section}
      aria-labelledby="quick-access-title"
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.introduction}>
          <span className={styles.eyebrow}>Encuentra tu camino</span>

          <h2 className={styles.title} id="quick-access-title">
            ¿Qué estás buscando?
          </h2>

          <p className={styles.description}>
            Elige una opción y encuentra rápidamente la información que más te
            interesa.
          </p>
        </div>

        <div className={styles.grid}>
          {options.map((option) => {
            const Icon = option.icon

            return (
              <Link
                className={styles.option}
                to={option.path}
                key={option.title}
              >
                <span className={styles.icon} aria-hidden="true">
                  <Icon strokeWidth={1.8} />
                </span>

                <span className={styles.optionContent}>
                  <strong>{option.title}</strong>
                  <small>{option.description}</small>
                </span>

                <span className={styles.arrow} aria-hidden="true">
                  <ArrowRight strokeWidth={2} />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickAccess