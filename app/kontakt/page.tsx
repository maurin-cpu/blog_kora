import styles from './page.module.css'

export default function Kontakt() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Kontakt</h1>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.content}>
            <p>
              Ich freue mich über Ihre Nachrichten, Fragen und Anregungen zu meinem Blog 
              oder zu klassischer Literatur im Allgemeinen.
            </p>
            
            <div className={styles.contactInfo}>
              <h2>Kontaktmöglichkeiten</h2>
              
              <div className={styles.contactItem}>
                <strong>E-Mail:</strong>
                <p>Sie können mich über das Kontaktformular erreichen oder direkt eine E-Mail senden.</p>
              </div>
              
              <div className={styles.contactItem}>
                <strong>Social Media:</strong>
                <p>Folgen Sie mir auf Instagram für regelmäßige Updates und Leseeindrücke.</p>
              </div>
            </div>
            
            <p className={styles.note}>
              Bitte haben Sie Verständnis, dass ich nicht immer sofort antworten kann, 
              besonders während der Vorlesungszeiten. Ich bemühe mich jedoch, alle 
              Nachrichten zu beantworten.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

