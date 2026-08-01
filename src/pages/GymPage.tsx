import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Dumbbell,
  HeartPulse,
  MessageCircle,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { Link } from 'react-router'
import styles from './GymPage.module.css'

const whatsappMessage =
  'Hola, me gustaría recibir información sobre el gimnasio de Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

const benefits = [
  {
    title: 'Gimnasio equipado',
    description:
      'Espacios y máquinas para trabajar fuerza, resistencia y condición física.',
    icon: Dumbbell,
  },
  {
    title: 'Rutina de entrenamiento',
    description:
      'Una guía organizada para que sepas qué ejercicios realizar durante tu proceso.',
    icon: ClipboardCheck,
  },
  {
    title: 'Valoración corporal',
    description:
      'Seguimiento de datos que permite conocer mejor tu progreso y tus objetivos.',
    icon: BarChart3,
  },
  {
    title: 'Acompañamiento cercano',
    description:
      'Orientación semi-personalizada para entrenar con mayor seguridad y confianza.',
    icon: Users,
  },
]

const trainingAreas = [
  {
    number: '01',
    title: 'Tren inferior',
    description:
      'Máquinas y espacios para trabajar cuádriceps, isquiotibiales, glúteos y pantorrillas.',
    icon: Activity,
  },
  {
    number: '02',
    title: 'Espalda',
    description:
      'Equipos para desarrollar fuerza, estabilidad y una espalda más funcional.',
    icon: MoveRight,
  },
  {
    number: '03',
    title: 'Pecho y brazos',
    description:
      'Bancas, mancuernas y máquinas para entrenar pecho, bíceps y tríceps.',
    icon: Dumbbell,
  },
  {
    number: '04',
    title: 'Cardio y calentamiento',
    description:
      'Zona para preparar el cuerpo, mejorar la resistencia y complementar tu rutina.',
    icon: HeartPulse,
  },
]

const supportItems = [
  'Orientación para utilizar correctamente los equipos.',
  'Rutinas adaptadas al nivel y los objetivos de cada persona.',
  'Valoraciones para dar seguimiento al proceso.',
  'Ambiente cercano, familiar y respetuoso.',
]

function GymPage() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="gym-title">
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Gimnasio Aquarovi en San Ramón
            </span>

            <h1 className={styles.heroTitle} id="gym-title">
              Entrena con propósito y avanza a tu ritmo
            </h1>

            <p className={styles.heroDescription}>
              Encuentra equipo, acompañamiento y diferentes áreas de
              entrenamiento para construir una rutina adecuada a tus objetivos.
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
                Equipo para entrenamiento completo
              </li>

              <li>
                <Check aria-hidden="true" />
                Rutinas y valoraciones
              </li>

              <li>
                <Check aria-hidden="true" />
                Acompañamiento semi-personalizado
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual} aria-label="Gimnasio Aquarovi">
            <div className={styles.mainVisualCard}>
              <span className={styles.visualNumber}>01</span>

              <div className={styles.visualIcon}>
                <Dumbbell aria-hidden="true" strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.visualLabel}>Entrena</span>
                <h2 className={styles.visualTitle}>Gimnasio</h2>
                <p className={styles.visualText}>
                  Un espacio para desarrollar fuerza, condición física y
                  confianza.
                </p>
              </div>
            </div>

            <div className={styles.floatingCard}>
              <Target aria-hidden="true" strokeWidth={1.8} />

              <div>
                <strong>Tu objetivo, tu proceso</strong>
                <span>Entrena de acuerdo con tu nivel y experiencia.</span>
              </div>
            </div>

            <div className={styles.heroDecoration} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.benefits}`}
        aria-labelledby="gym-benefits-title"
      >
        <div className="container">
          <div className={styles.sectionIntroduction}>
            <div>
              <span className={styles.sectionEyebrow}>
                Una experiencia más completa
              </span>

              <h2 className={styles.sectionTitle} id="gym-benefits-title">
                Todo lo que necesitas para comenzar
              </h2>
            </div>

            <p className={styles.sectionDescription}>
              No importa si estás comenzando o si ya tienes experiencia. En
              Aquarovi encontrarás herramientas para avanzar de manera
              organizada y constante.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => {
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
        className={`section ${styles.training}`}
        aria-labelledby="training-areas-title"
      >
        <div className="container">
          <div className={styles.trainingHeader}>
            <span className={styles.sectionEyebrow}>Áreas de entrenamiento</span>

            <h2 className={styles.sectionTitle} id="training-areas-title">
              Trabaja tu cuerpo de forma completa
            </h2>

            <p className={styles.trainingDescription}>
              El gimnasio cuenta con zonas organizadas para que puedas trabajar
              diferentes grupos musculares y complementar tu rutina.
            </p>
          </div>

          <div className={styles.trainingGrid}>
            {trainingAreas.map((area) => {
              const Icon = area.icon

              return (
                <article className={styles.trainingCard} key={area.title}>
                  <div className={styles.trainingCardTop}>
                    <span>{area.number}</span>
                    <Icon aria-hidden="true" strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.support}`}
        aria-labelledby="support-title"
      >
        <div className={`container ${styles.supportContainer}`}>
          <div className={styles.supportVisual}>
            <span className={styles.supportIcon} aria-hidden="true">
              <ShieldCheck strokeWidth={1.6} />
            </span>

            <span className={styles.supportLabel}>Acompañamiento</span>

            <h2 className={styles.supportVisualTitle}>
              No tienes que comenzar solo
            </h2>

            <p>
              Nuestro objetivo es que te sientas cómodo y seguro durante tu
              proceso de entrenamiento.
            </p>

            <div className={styles.supportDecoration} aria-hidden="true" />
          </div>

          <div className={styles.supportContent}>
            <span className={styles.sectionEyebrow}>
              Orientación durante tu proceso
            </span>

            <h2 className={styles.sectionTitle} id="support-title">
              Entrena con mayor claridad y confianza
            </h2>

            <p className={styles.supportText}>
              El acompañamiento permite que conozcas mejor tu rutina, utilices
              correctamente los equipos y mantengas un proceso más organizado.
            </p>

            <ul className={styles.supportList}>
              {supportItems.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">
                    <Check strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              className={styles.supportButton}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar información
              <ArrowRight aria-hidden="true" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.functional}`}
        aria-labelledby="functional-title"
      >
        <div className={`container ${styles.functionalContainer}`}>
          <div>
            <span className={styles.functionalEyebrow}>
              Clases grupales
            </span>

            <h2 className={styles.functionalTitle} id="functional-title">
              Entrena con energía en nuestras clases funcionales
            </h2>

            <p className={styles.functionalDescription}>
              Complementa tu rutina con sesiones dinámicas que combinan fuerza,
              resistencia, movilidad y trabajo cardiovascular.
            </p>

            <div className={styles.functionalFeatures}>
              <span>
                <Sparkles aria-hidden="true" />
                Entrenamiento dinámico
              </span>

              <span>
                <Users aria-hidden="true" />
                Ambiente grupal
              </span>

              <span>
                <HeartPulse aria-hidden="true" />
                Mejora tu condición física
              </span>
            </div>
          </div>

          <aside className={styles.functionalCard}>
            <span className={styles.functionalCardLabel}>
              Consulta disponibilidad
            </span>

            <h3>Clases funcionales</h3>

            <p>
              Los días, horarios y espacios pueden variar. Escríbenos para
              conocer las opciones disponibles.
            </p>

            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Consultar horarios
              <ArrowRight aria-hidden="true" strokeWidth={2} />
            </a>
          </aside>

          <div className={styles.functionalDecoration} aria-hidden="true" />
        </div>
      </section>

      <section className={`section ${styles.finalCta}`}>
        <div className={`container ${styles.finalCtaContainer}`}>
          <div>
            <span className={styles.finalCtaEyebrow}>
              Comienza cuando estés listo
            </span>

            <h2>Da el primer paso hacia una rutina más activa</h2>

            <p>
              Escríbenos y te ayudaremos a conocer el gimnasio, los planes y la
              opción que mejor se adapte a tus objetivos.
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

export default GymPage