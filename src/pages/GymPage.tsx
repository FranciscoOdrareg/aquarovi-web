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
      'Nuestros instructores crean una rutina de acuerdo con tus objetivos y nivel de experiencia.',
    icon: ClipboardCheck,
  },
  {
    title: 'Mediciones corporales',
    description:
      'Seguimiento de datos que permite conocer mejor tu progreso y tus objetivos.',
    icon: BarChart3,
  },
  {
    title: 'Acompañamiento del instructor',
    description:
      'Recibe orientación del instructor de turno para desarrollar tu rutina con mayor seguridad y claridad.',
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
  'Rutina creada según tu nivel y objetivos.',
  'Mediciones corporales para dar seguimiento a tu proceso.',
  'Acompañamiento del instructor que se encuentre en turno.',
]

const groupClasses = [
  {
    name: 'Funcionales',
    schedule: 'Lunes · 6:00 p. m.',
  },
  {
    name: 'Zumba',
    schedule: 'Miércoles · 7:00 p. m.',
  },
  {
    name: 'Zumba',
    schedule: 'Sábados · 8:45 a. m.',
  },
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
              Encuentra equipo, orientación y diferentes áreas de
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
                Rutina y mediciones corporales
              </li>

              <li>
                <Check aria-hidden="true" />
                Acompañamiento del instructor de turno
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
            <span className={styles.sectionEyebrow}>
              Áreas de entrenamiento
            </span>

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
              Complementa tu entrenamiento con energía y movimiento
            </h2>

            <p className={styles.functionalDescription}>
              Además del entrenamiento en gimnasio, puedes participar en
              sesiones grupales para incorporar variedad y movimiento a tu
              semana.
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
                Actividad complementaria
              </span>
            </div>
          </div>

          <aside className={styles.functionalCard}>
            <span className={styles.functionalCardLabel}>
              Horarios de clases
            </span>

            <h3>Funcionales y Zumba</h3>

            <div className={styles.groupClassSchedule}>
              {groupClasses.map((groupClass, index) => (
                <div
                  className={styles.groupClassItem}
                  key={`${groupClass.name}-${index}`}
                >
                  <strong>{groupClass.name}</strong>
                  <span>{groupClass.schedule}</span>
                </div>
              ))}
            </div>

            <p className={styles.groupClassNotice}>
              Estas clases requieren reserva previa, ya que se trabaja con
              cupos limitados.
            </p>

            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Consultar disponibilidad
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