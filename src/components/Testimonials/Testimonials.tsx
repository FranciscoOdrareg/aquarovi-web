import { MessageCircle, Quote, Star } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Yul de Jesus Mora Mora',
    initials: 'YM',
    service: 'Gimnasio',
    text: 'Esta semana empecé a entrenar en Aquarovi en Moncho y es de lo mejor. Los instructores siempre están atentos a ayudar.',
  },
  {
    name: 'Moises Brizuela Solano',
    initials: 'MB',
    service: 'Piscina',
    text: 'Hermosas instalaciones y mi hija en sus clases de natación quedó super encantada.',
  },
  {
    name: 'Andrey Perez',
    initials: 'AP',
    service: 'Gimnasio',
    text: '¡Excelente! El personal profesional y las instalaciones de lo mejor.',
  },
  {
    name: 'Francisco Alvarado Ruiz',
    initials: 'FA',
    service: 'Aquafitness',
    text: 'Es un lugar al cual asisto, a hacer acuarobicos, tiene muy buenos entrenadores, y un ambiente muy agradable.',
  },
]

const whatsappMessage =
  'Hola, me gustaría recibir información para comenzar en Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

function RatingStars() {
  return (
    <div className={styles.stars} aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          fill="currentColor"
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
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>
              Experiencias que inspiran
            </span>

            <h2 className={styles.title} id="testimonials-title">
              La confianza se construye con cada experiencia
            </h2>
          </div>

          <div className={styles.trustSummary}>
            <RatingStars />

            <p className={styles.trustText}>
              Opiniones reales de personas que forman parte de la comunidad
              Aquarovi.
            </p>

            <span className={styles.googleRating}>
              4.6 en Google
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <article
              className={styles.card}
              key={`${testimonial.name}-${index}`}
            >
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
                  <p className={styles.clientName}>
                    {testimonial.name}
                  </p>

                  <p className={styles.clientService}>
                    Reseña de Google · {testimonial.service}
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
                Escríbenos y te ayudaremos a encontrar el servicio que mejor
                se adapte a tus objetivos.
              </p>
            </div>
          </div>

          <a
            className={styles.whatsappButton}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials