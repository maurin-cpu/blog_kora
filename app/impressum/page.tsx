import styles from './page.module.css'

export default function Impressum() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Impressum</h1>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.content}>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Kora Schild<br />
              [Ihre Adresse]<br />
              [PLZ Ort]
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: [Ihre E-Mail-Adresse]
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Kora Schild<br />
              [Ihre Adresse]<br />
              [PLZ Ort]
            </p>

            <h2>Haftungsausschluss</h2>
            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
              können wir jedoch keine Gewähr übernehmen.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

