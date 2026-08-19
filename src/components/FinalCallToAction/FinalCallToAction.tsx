import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'
import styles from './FinalCallToAction.module.css'

const whatsappMessage =
  'Hola, quiero comenzar en Centro Deportivo Aquarovi. ¿Podrían ayudarme a elegir el servicio o plan más adecuado para mí?'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

function FinalCallToAction() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="final-cta-title"
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Tu próximo paso comienza aquí</span>

          <h2 className={styles.title} id="final-cta-title">
            Empieza a construir una rutina que te haga sentir mejor
          </h2>

          <p className={styles.description}>
            Escríbenos y te ayudaremos a encontrar la opción de gimnasio,
            piscina o plan combinado que mejor se adapte a tus objetivos.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primaryButton}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Hablar por WhatsApp
            </a>

            <Link className={styles.secondaryButton} to="/contacto">
              Ver información de contacto
              <ArrowRight aria-hidden="true" strokeWidth={2} />
            </Link>
          </div>
        </div>

        <aside
          className={styles.contactCard}
          aria-label="Información de contacto de Aquarovi"
        >
          <div className={styles.contactCardHeader}>
            <span className={styles.iconContainer} aria-hidden="true">
              <MessageCircle strokeWidth={1.8} />
            </span>

            <div>
              <span className={styles.contactLabel}>Estamos para ayudarte</span>
              <h3 className={styles.contactTitle}>Contáctanos directamente</h3>
            </div>
          </div>

          <div className={styles.contactList}>
            <a className={styles.contactItem} href="tel:+50624456244">
              <span className={styles.contactItemIcon} aria-hidden="true">
                <Phone strokeWidth={1.8} />
              </span>

              <span>
                <strong>Teléfono</strong>
                <small>2445-6244</small>
              </span>
            </a>

            <a
              className={styles.contactItem}
              href="https://wa.me/50687081829"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.contactItemIcon} aria-hidden="true">
                <FaWhatsapp />
              </span>

              <span>
                <strong>WhatsApp</strong>
                <small>8708-1829</small>
              </span>
            </a>

            <div className={styles.contactItem}>
              <span className={styles.contactItemIcon} aria-hidden="true">
                <MapPin strokeWidth={1.8} />
              </span>

              <span>
                <strong>Ubicación</strong>
                <small>
                  200 m noreste de la Escuela Laboratorio, San Isidro, San
                  Ramón
                </small>
              </span>
            </div>
          </div>
        </aside>

        <div className={styles.decorationOne} aria-hidden="true" />
        <div className={styles.decorationTwo} aria-hidden="true" />
      </div>
    </section>
  )
}

export default FinalCallToAction