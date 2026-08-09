import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import styles from './Header.module.css'

const navigationItems = [
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

const whatsappMessage =
  'Hola, me gustaría recibir información sobre los servicios de Centro Deportivo Aquarovi.'

const whatsappUrl = `https://wa.me/50687081829?text=${encodeURIComponent(
  whatsappMessage,
)}`

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <NavLink
          className={styles.brand}
          to="/"
          aria-label="Ir al inicio de Centro Deportivo Aquarovi"
          onClick={closeMenu}
        >
          <img
            className={styles.logo}
            src="/logo/aquarovi-logo-horizontal-01.png"
            alt="Centro Deportivo Aquarovi"
          />
        </NavLink>

        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ''
          }`}
          id="main-navigation"
          aria-label="Navegación principal"
        >
          <ul className={styles.navigationList}>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navigationLink} ${
                      isActive ? styles.activeLink : ''
                    }`
                  }
                  end={item.path === '/'}
                  to={item.path}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            className={styles.mobileWhatsappButton}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle aria-hidden="true" strokeWidth={2} />
            Escribir por WhatsApp
          </a>
        </nav>

        <div className={styles.actions}>
          <a
            className={styles.whatsappButton}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar a Centro Deportivo Aquarovi por WhatsApp"
          >
            <MessageCircle aria-hidden="true" strokeWidth={2} />
            <span>WhatsApp</span>
          </a>

          <button
            className={styles.menuButton}
            type="button"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-controls="main-navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" strokeWidth={2} />
            ) : (
              <Menu aria-hidden="true" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <button
          className={styles.overlay}
          type="button"
          aria-label="Cerrar menú de navegación"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}

export default Header