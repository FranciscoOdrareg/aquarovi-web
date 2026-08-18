import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'
import { Link } from 'react-router'
import styles from './Footer.module.css'

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@aquarovi',
    href: 'https://www.instagram.com/aquarovi/?hl=es',
    icon: FaInstagram,
    className: 'instagram',
  },
  {
    label: 'Facebook',
    handle: '/Aquarovi',
    href: 'https://www.facebook.com/Aquarovi',
    icon: FaFacebookF,
    className: 'facebook',
  },
  {
    label: 'TikTok',
    handle: '@aquarovi',
    href: 'https://www.tiktok.com/@aquarovi',
    icon: FaTiktok,
    className: 'tiktok',
  },
]

const googleMapsUrl =
  'https://www.google.com/maps/place/Centro+Deportivo+Aquarovi/@10.0900583,-84.4622781,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa044e62e95b9fd:0x7b1bdeaf1e67be2d!8m2!3d10.0900583!4d-84.4622781!16s%2Fg%2F11c1xm8vrt?entry=ttu'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.mainContent}>
          <div className={styles.socialColumn}>
            <h2 className={styles.columnTitle}>Síguenos en</h2>

            <div
              className={styles.socialList}
              aria-label="Redes sociales de Centro Deportivo Aquarovi"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    className={styles.socialLink}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visitar ${social.label} de Centro Deportivo Aquarovi`}
                    key={social.label}
                  >
                    <span
                      className={`${styles.socialIcon} ${
                        styles[social.className]
                      }`}
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>

                    <span className={styles.socialContent}>
                      <strong>{social.label}</strong>
                      <small>{social.handle}</small>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className={styles.brandColumn}>
            <Link
              className={styles.brand}
              to="/"
              aria-label="Ir al inicio de Centro Deportivo Aquarovi"
            >
              <img
                className={styles.logo}
                src="/logo/AquaroviLogoBlanco.png"
                alt="Centro Deportivo Aquarovi"
              />
            </Link>
          </div>

          <div className={styles.contactColumn}>
            <h2 className={styles.columnTitle}>Contacto</h2>

            <address className={styles.contactList}>
              <a
                className={styles.contactItem}
                href="mailto:aquarovi3@gmail.com"
                aria-label="Enviar correo electrónico a Centro Deportivo Aquarovi"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <Mail strokeWidth={1.8} />
                </span>

                <span>
                  <strong>Correo electrónico</strong>
                  <small>aquarovi3@gmail.com</small>
                </span>
              </a>

              <a
                className={styles.contactItem}
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir la ubicación de Centro Deportivo Aquarovi en Google Maps"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <MapPin strokeWidth={1.8} />
                </span>

                <span>
                  <strong>Dirección</strong>
                  <small>
                    200 m noreste de la Escuela Laboratorio,
                    San Isidro, San Ramón
                  </small>
                </span>
              </a>

              <a
                className={styles.contactItem}
                href="https://wa.me/50687081829"
                target="_blank"
                rel="noreferrer"
                aria-label="Escribir a Centro Deportivo Aquarovi por WhatsApp"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <MessageCircle strokeWidth={1.8} />
                </span>

                <span>
                  <strong>WhatsApp</strong>
                  <small>8708-1829</small>
                </span>
              </a>

              <a
                className={styles.contactItem}
                href="tel:+50624456244"
                aria-label="Llamar a Centro Deportivo Aquarovi"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <Phone strokeWidth={1.8} />
                </span>

                <span>
                  <strong>Teléfono</strong>
                  <small>2445-6244</small>
                </span>
              </a>
            </address>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            © {currentYear} Centro Deportivo Aquarovi. Todos los derechos
            reservados.
          </p>

          <p>San Ramón, Alajuela</p>
        </div>
      </div>

      <div className={styles.decoration} aria-hidden="true" />
    </footer>
  )
}

export default Footer