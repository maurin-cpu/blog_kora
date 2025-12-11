import styles from './page.module.css'

export default function Datenschutz() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Datenschutzerklärung</h1>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.content}>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, 
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese 
              Website besuchen.
            </p>

            <h2>2. Datenerfassung auf dieser Website</h2>
            <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den 
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt 
              „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <h2>3. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, 
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

