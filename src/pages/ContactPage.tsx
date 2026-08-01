import {
  ArrowRight,
  Check,
  Clock3,
  Dumbbell,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Waves,
} from 'lucide-react'
import styles from './ContactPage.module.css'

const phoneNumber = '2445-6244'
const whatsappNumber = '8708-1829'
const emailAddress = 'aquarovi3@gmail.com'

const whatsappMessage =
  'Hola, me gustaría recibir información sobre los servicios, planes y horarios de Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Centro+Deportivo+Aquarovi+San+Ramon+Alajuela'

const contactMethods = [
  {
    title: 'WhatsApp',
    value: whatsappNumber,
    description:
      'Escríbenos para consultar planes, horarios, espacios disponibles y promociones.',
    href: whatsappUrl,
    linkLabel: 'Escribir por WhatsApp',
    icon: MessageCircle,
    external: true,
  },
  {
    title: 'Teléfono',
    value: phoneNumber,
    description:
      'Puedes llamarnos para solicitar información general sobre nuestros servicios.',
    href: 'tel:+50624456244',
    linkLabel: 'Llamar ahora',
    icon: Phone,
    external: false,
  },
  {
    title: 'Correo electrónico',
    value: emailAddress,
    description:
      'Utiliza el correo para consultas administrativas o información institucional.',
    href: `mailto:${emailAddress}`,
    linkLabel: 'Enviar un correo',
    icon: Mail,
    external: false,
  },
]

const scheduleGroups = [
  {
    title: 'Gimnasio',
    description:
      'El acceso depende del horario general de las instalaciones y de las condiciones de cada plan.',
    icon: Dumbbell,
  },
  {
    title: 'Piscina',
    description:
      'Las clases, el nado libre y las actividades acuáticas tienen horarios específicos.',
    icon: Waves,
  },
  {
    title: 'Clases y actividades',
    description:
      'Las clases funcionales y grupales pueden variar según disponibilidad e instructor.',
    icon: Clock3,
  },
]

const frequentlyAskedQuestions = [
  {
    question: '¿Puedo conocer las instalaciones antes de inscribirme?',
    answer:
      'Sí. Puedes escribirnos para coordinar una visita y conocer las áreas disponibles.',
  },
  {
    question: '¿Los horarios son iguales para todos los servicios?',
    answer:
      'No. El gimnasio, la piscina, el nado libre y las clases grupales pueden tener horarios distintos.',
  },
  {
    question: '¿Cómo puedo saber si hay espacio disponible?',
    answer:
      'La forma más rápida es consultarnos por WhatsApp indicando el servicio, la edad y el horario de interés.',
  },
  {
    question: '¿Dónde se encuentra Aquarovi?',
    answer:
      'Estamos en San Isidro de San Ramón, 200 metros noreste de la Escuela Laboratorio.',
  },
]

function ContactPage() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="contact-page-title">
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              Estamos para ayudarte
            </span>

            <h1 className={styles.heroTitle} id="contact-page-title">
              Hablemos sobre la opción ideal para ti
            </h1>

            <p className={styles.heroDescription}>
              Consulta planes, horarios, espacios disponibles o cualquier duda
              sobre el gimnasio y la piscina de Centro Deportivo Aquarovi.
            </p>

            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" strokeWidth={2} />
                Escribir por WhatsApp
              </a>

              <a className={styles.secondaryButton} href="tel:+50624456244">
                <Phone aria-hidden="true" strokeWidth={2} />
                Llamar al {phoneNumber}
              </a>
            </div>

            <ul className={styles.heroFeatures}>
              <li>
                <Check aria-hidden="true" />
                Atención personalizada
              </li>

              <li>
                <Check aria-hidden="true" />
                Información de horarios
              </li>

              <li>
                <Check aria-hidden="true" />
                Consulta de disponibilidad
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.mainVisualCard}>
              <span className={styles.visualNumber}>04</span>

              <div className={styles.visualIcon} aria-hidden="true">
                <MessageCircle strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.visualLabel}>
                  Escríbenos
                </span>

                <h2 className={styles.visualTitle}>Contacto</h2>

                <p className={styles.visualText}>
                  Nuestro equipo te ayudará a conocer las opciones disponibles
                  según tus objetivos y necesidades.
                </p>
              </div>
            </div>

            <div className={styles.floatingCard}>
              <MapPin aria-hidden="true" strokeWidth={1.8} />

              <div>
                <strong>San Isidro, San Ramón</strong>
                <span>
                  200 m noreste de la Escuela Laboratorio.
                </span>
              </div>
            </div>

            <div className={styles.heroDecoration} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.contactMethods}`}
        aria-labelledby="contact-methods-title"
      >
        <div className="container">
          <div className={styles.sectionIntroduction}>
            <div>
              <span className={styles.sectionEyebrow}>
                Canales de atención
              </span>

              <h2 className={styles.sectionTitle} id="contact-methods-title">
                Elige la forma más cómoda de contactarnos
              </h2>
            </div>

            <p className={styles.sectionDescription}>
              WhatsApp es el canal más rápido para consultar disponibilidad,
              pero también puedes llamarnos o escribirnos por correo.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => {
              const Icon = method.icon

              return (
                <article className={styles.contactCard} key={method.title}>
                  <div className={styles.contactCardTop}>
                    <span className={styles.contactIcon} aria-hidden="true">
                      <Icon strokeWidth={1.8} />
                    </span>

                    <span className={styles.contactNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3>{method.title}</h3>

                  <p className={styles.contactValue}>{method.value}</p>

                  <p className={styles.contactDescription}>
                    {method.description}
                  </p>

                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noreferrer' : undefined}
                  >
                    {method.linkLabel}
                    <ArrowRight aria-hidden="true" strokeWidth={2} />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.location}`}
        aria-labelledby="location-title"
      >
        <div className={`container ${styles.locationContainer}`}>
          <div className={styles.locationVisual}>
            <div className={styles.mapPattern} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <span className={styles.locationPin} aria-hidden="true">
              <MapPin strokeWidth={1.7} />
            </span>

            <div className={styles.locationVisualContent}>
              <span>Centro Deportivo Aquarovi</span>

              <strong>San Isidro, San Ramón</strong>

              <p>
                200 metros noreste de la Escuela Laboratorio.
              </p>
            </div>
          </div>

          <div className={styles.locationContent}>
            <span className={styles.sectionEyebrow}>
              Cómo llegar
            </span>

            <h2 className={styles.sectionTitle} id="location-title">
              Visítanos en San Ramón de Alajuela
            </h2>

            <p className={styles.locationDescription}>
              Estamos ubicados en San Isidro de San Ramón. La referencia
              principal es la Escuela Laboratorio: desde ahí debes avanzar
              aproximadamente 200 metros en dirección noreste.
            </p>

            <div className={styles.addressCard}>
              <span aria-hidden="true">
                <Navigation strokeWidth={1.8} />
              </span>

              <div>
                <strong>Referencia de llegada</strong>

                <p>
                  200 m noreste de la Escuela Laboratorio, San Isidro,
                  San Ramón de Alajuela.
                </p>
              </div>
            </div>

            <a
              className={styles.mapsButton}
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin aria-hidden="true" strokeWidth={2} />
              Buscar Aquarovi en Google Maps
            </a>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.schedule}`}
        aria-labelledby="schedule-title"
      >
        <div className="container">
          <div className={styles.scheduleHeader}>
            <span className={styles.sectionEyebrow}>
              Horarios de atención
            </span>

            <h2 className={styles.sectionTitle} id="schedule-title">
              Cada servicio puede tener un horario diferente
            </h2>

            <p className={styles.scheduleDescription}>
              Para evitar información desactualizada, confirma el horario y la
              disponibilidad antes de asistir, especialmente para piscina y
              actividades grupales.
            </p>
          </div>

          <div className={styles.scheduleGrid}>
            {scheduleGroups.map((schedule, index) => {
              const Icon = schedule.icon

              return (
                <article className={styles.scheduleCard} key={schedule.title}>
                  <div className={styles.scheduleCardTop}>
                    <span className={styles.scheduleNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className={styles.scheduleIcon} aria-hidden="true">
                      <Icon strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3>{schedule.title}</h3>

                  <p>{schedule.description}</p>

                  <span className={styles.availabilityLabel}>
                    Confirmar horario por WhatsApp
                  </span>
                </article>
              )
            })}
          </div>

          <div className={styles.scheduleNotice}>
            <span aria-hidden="true">
              <Clock3 strokeWidth={1.8} />
            </span>

            <div>
              <strong>¿Necesitas conocer un horario específico?</strong>

              <p>
                Indícanos el servicio, la edad de la persona y los días en los
                que podría asistir. Te ayudaremos a revisar las opciones.
              </p>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Consultar horarios
              <ArrowRight aria-hidden="true" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.questions}`}
        aria-labelledby="questions-title"
      >
        <div className={`container ${styles.questionsContainer}`}>
          <div className={styles.questionsIntroduction}>
            <span className={styles.questionsIcon} aria-hidden="true">
              <ShieldCheck strokeWidth={1.7} />
            </span>

            <span className={styles.questionsEyebrow}>
              Preguntas frecuentes
            </span>

            <h2 id="questions-title">
              Información útil antes de visitarnos
            </h2>

            <p>
              Estas respuestas pueden ayudarte a organizar tu primera visita a
              Centro Deportivo Aquarovi.
            </p>
          </div>

          <div className={styles.questionsList}>
            {frequentlyAskedQuestions.map((item, index) => (
              <article key={item.question}>
                <span>{String(index + 1).padStart(2, '0')}</span>

                <div>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.finalCta}`}>
        <div className={`container ${styles.finalCtaContainer}`}>
          <div>
            <span className={styles.finalCtaEyebrow}>
              Estamos listos para atenderte
            </span>

            <h2>Da el primer paso y escríbenos hoy</h2>

            <p>
              Cuéntanos qué servicio te interesa y te ayudaremos a conocer los
              planes, horarios y espacios disponibles.
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

export default ContactPage