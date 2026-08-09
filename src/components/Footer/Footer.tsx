import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router'
import styles from './Footer.module.css'

const navigationLinks = [
  {
    label: 'Inicio',
    path: '/',
  },
  {
    label: 'Gimnasio',
    path: '/gimnasio',
  },
  {
    label: 'Piscina',
    path: '/piscina',
  },
  {
    label: 'Planes',
    path: '/planes',
  },
  {
    label: 'Contacto',
    path: '/contacto',
  },
]

const serviceLinks = [
  {
    label: 'Gimnasio',
    path: '/gimnasio',
  },
  {
    label: 'Clases de natación',
    path: '/piscina',
  },
  {
    label: 'Nado libre',
    path: '/piscina',
  },
  {
    label: 'Aquafitness',
    path: '/piscina',
  },
  {
    label: 'Planes combinados',
    path: '/planes',
  },
]

const whatsappMessage =
  'Hola, me gustaría recibir información sobre los servicios de Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.mainContent}>
          <div className={styles.brandColumn}>
            <Link
              className={styles.brand}
              to="/"
              aria-label="Ir al inicio de Centro Deportivo Aquarovi"
            >
              <span className={styles.logoPanel}>
                <img
                  className={styles.logo}
                  src="/logo/aquarovi-logo-horizontal-01.png"
                  alt="Centro Deportivo Aquarovi"
                />
              </span>
            </Link>

            <p className={styles.description}>
              Gimnasio y piscina en San Ramón, con opciones para diferentes
              edades, necesidades y objetivos.
            </p>

            <a
              className={styles.whatsappButton}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" strokeWidth={2} />
              Escribir por WhatsApp
              <ArrowUpRight aria-hidden="true" strokeWidth={2} />
            </a>
          </div>

          <nav
            className={styles.linkColumn}
            aria-label="Navegación del pie de página"
          >
            <h2 className={styles.columnTitle}>Navegación</h2>

            <ul className={styles.linkList}>
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link className={styles.footerLink} to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className={styles.linkColumn}
            aria-label="Servicios de Aquarovi"
          >
            <h2 className={styles.columnTitle}>Servicios</h2>

            <ul className={styles.linkList}>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link className={styles.footerLink} to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactColumn}>
            <h2 className={styles.columnTitle}>Contacto</h2>

            <address className={styles.contactList}>
              <a className={styles.contactItem} href="tel:+50624456244">
                <span className={styles.contactIcon} aria-hidden="true">
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
                <span className={styles.contactIcon} aria-hidden="true">
                  <MessageCircle strokeWidth={1.8} />
                </span>

                <span>
                  <strong>WhatsApp</strong>
                  <small>8708-1829</small>
                </span>
              </a>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <MapPin strokeWidth={1.8} />
                </span>

                <span>
                  <strong>Ubicación</strong>
                  <small>
                    200 m noreste de la Escuela Laboratorio, San Isidro,
                    San Ramón
                  </small>
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Centro Deportivo Aquarovi. Todos los derechos
            reservados.
          </p>

          <p className={styles.bottomMessage}>
            Gimnasio y piscina en San Ramón de Alajuela
          </p>
        </div>
      </div>

      <div className={styles.decoration} aria-hidden="true" />
    </footer>
  )
}

export default Footer