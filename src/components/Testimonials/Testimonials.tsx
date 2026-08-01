import { MessageCircle, Quote, Star } from 'lucide-react'
import styles from './Testimonials.module.css'

/*
 * CONTENIDO TEMPORAL:
 * Sustituir estos testimonios por opiniones reales y autorizadas
 * antes de publicar el sitio web.
 */
const testimonials = [
  {
    name: 'Cliente de Aquarovi',
    initials: 'CA',
    service: 'Piscina',
    text: 'Testimonio pendiente de sustituir por una opinión real de una persona que utilice los servicios de piscina.',
  },
  {
    name: 'Cliente de Aquarovi',
    initials: 'CA',
    service: 'Gimnasio',
    text: 'Testimonio pendiente de sustituir por una opinión real sobre la experiencia, el acompañamiento y las instalaciones.',
  },
  {
    name: 'Cliente de Aquarovi',
    initials: 'CA',
    service: 'Gimnasio y piscina',
    text: 'Testimonio pendiente de sustituir por una opinión real de una persona que combine ambos servicios.',
  },
]

const whatsappMessage =
  'Hola, me gustaría recibir información para comenzar en Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

function RatingStars() {
  return (
    <div className={styles.stars} aria-label="Calificación de cinco estrellas">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          aria-hidden="true"
          className={styles.star}
          fill="currentColor"
          key={index}
          strokeWidth={1.8}
        />
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section
      className={`section ${styles.testimonials}`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className={styles.header}>
          <div className={styles.introduction}>
            <span className={styles.eyebrow}>Experiencias que inspiran</span>

            <h2 className={styles.title} id="testimonials-title">
              La confianza se construye con cada experiencia
            </h2>
          </div>

          <div className={styles.trustSummary}>
            <RatingStars />

            <p className={styles.trustText}>
              Opiniones de clientes que forman parte de la comunidad Aquarovi.
            </p>

            <span className={styles.pendingNotice}>
              Testimonios reales pendientes de incorporar
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <article className={styles.card} key={`${testimonial.service}-${index}`}>
              <div className={styles.cardHeader}>
                <RatingStars />

                <Quote
                  aria-hidden="true"
                  className={styles.quoteIcon}
                  strokeWidth={1.6}
                />
              </div>

              <blockquote className={styles.quote}>
                “{testimonial.text}”
              </blockquote>

              <div className={styles.client}>
                <span className={styles.avatar} aria-hidden="true">
                  {testimonial.initials}
                </span>

                <div>
                  <p className={styles.clientName}>{testimonial.name}</p>
                  <p className={styles.clientService}>
                    Servicio de {testimonial.service}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.callToAction}>
          <div className={styles.callToActionContent}>
            <span className={styles.messageIcon} aria-hidden="true">
              <MessageCircle strokeWidth={1.8} />
            </span>

            <div>
              <h3 className={styles.callToActionTitle}>
                Tu experiencia también puede comenzar aquí
              </h3>

              <p className={styles.callToActionText}>
                Escríbenos y te ayudaremos a encontrar el servicio que mejor se
                adapte a tus objetivos.
              </p>
            </div>
          </div>

          <a
            className={styles.whatsappButton}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Quiero comenzar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials