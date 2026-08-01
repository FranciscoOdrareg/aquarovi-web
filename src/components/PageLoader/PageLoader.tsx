import styles from './PageLoader.module.css'

function PageLoader() {
  return (
    <div
      className={styles.loader}
      role="status"
      aria-live="polite"
      aria-label="Cargando página"
    >
      <div className={styles.content}>
        <span className={styles.symbol} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>

        <p>Cargando Aquarovi…</p>
      </div>
    </div>
  )
}

export default PageLoader