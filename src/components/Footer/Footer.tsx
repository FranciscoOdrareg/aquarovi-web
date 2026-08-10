import {
  Mail,
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

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.mainContent}>
          <nav
            className={styles.navigationColumn}
            aria-label="Navegación del pie de página"
          >
            <h2 className={styles.columnTitle}>Navegación</h2>

            <ul className={styles.linkList}>
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link className={styles.footerLink} to={link.path}>
                    <span className={styles.linkDot} aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

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
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <Mail strokeWidth={1.8} />
                </span>

                <span>
                  <strong>Correo electrónico</strong>
                  <small>aquarovi3@gmail.com</small>
                </span>
              </a>

              <div className={styles.contactItem}>
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
              </div>

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

              <a
                className={styles.contactItem}
                href="tel:+50624456244"
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