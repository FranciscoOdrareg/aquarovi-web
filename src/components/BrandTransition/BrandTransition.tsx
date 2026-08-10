import { useEffect, useState } from 'react'
import styles from './BrandTransition.module.css'

const messages = [
  {
    type: 'logo',
    title: 'Centro Deportivo Aquarovi',
    description: 'Gimnasio • Piscina • Bienestar',
  },
  {
    type: 'text',
    before: '',
    accent: 'Entrena',
    after: ' con nosotros',
    description: 'Encuentra un espacio para avanzar a tu ritmo.',
  },
  {
    type: 'text',
    before: '',
    accent: 'Mejora',
    after: ' tu salud',
    description: 'Movimiento, constancia y bienestar en un solo lugar.',
  },
  {
    type: 'text',
    before: 'Disfruta cada ',
    accent: 'etapa',
    after: '',
    description:
      'Opciones para diferentes edades, necesidades y objetivos.',
  },
]

const TRANSITION_TIME = 3800

function BrandTransition() {
  const [activeMessage, setActiveMessage] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveMessage((current) => (current + 1) % messages.length)
    }, TRANSITION_TIME)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <section
      className={styles.section}
      aria-label="Centro Deportivo Aquarovi"
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <div className={styles.messageStage}>
          {messages.map((message, index) => (
            <div
              key={`${message.type}-${index}`}
              className={`${styles.message} ${
                index === activeMessage ? styles.activeMessage : ''
              }`}
              aria-hidden={index !== activeMessage}
            >
              {message.type === 'logo' ? (
                <>
                  <img
                    className={styles.logo}
                    src="/logo/AquaroviLogoBlanco.png"
                    alt="Centro Deportivo Aquarovi"
                  />

                  <p className={styles.brandDescription}>
                    <span>Gimnasio</span>
                    <strong>•</strong>
                    <span>Piscina</span>
                    <strong>•</strong>
                    <span>Bienestar</span>
                  </p>
                </>
              ) : (
                <>
                  <h2 className={styles.title}>
                    {message.before}
                    <span className={styles.titleAccent}>
                      {message.accent}
                    </span>
                    {message.after}
                  </h2>

                  <p className={styles.description}>
                    {message.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <div
          className={styles.indicators}
          aria-label="Mensajes de Aquarovi"
        >
          {messages.map((_, index) => (
            <button
              key={`indicator-${index}`}
              className={`${styles.indicator} ${
                index === activeMessage ? styles.activeIndicator : ''
              }`}
              type="button"
              aria-label={`Ver mensaje ${index + 1}`}
              aria-current={index === activeMessage ? 'true' : undefined}
              onClick={() => setActiveMessage(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.movingLine} aria-hidden="true" />
    </section>
  )
}

export default BrandTransition