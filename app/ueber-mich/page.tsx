import styles from './page.module.css'

export default function UeberMich() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Über mich</h1>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.content}>
            <h2>BLOG-AUTORIN</h2>
            <h3 className={styles.authorName}>KORA SCHILD</h3>
            
            <p>
              Ich wurde am 10. Juli 1996 in der Schweiz geboren und bin dort aufgewachsen. 
              An der Universität Zürich habe ich Deutsche Literaturwissenschaft und Philosophie 
              studiert und mein Masterstudium im Dezember 2024 erfolgreich abgeschlossen.
            </p>
            
            <p>
              Dieser Blog soll sich nicht nur auf Leseeindrücke beschränken, sondern auch ein 
              solides wissenschaftliches Fundament bieten. Mein langjähriges Studium ermöglicht 
              es mir, meine Lektüreerfahrungen mit theoretischen Ansätzen zu untermauern.
            </p>
            
            <p>
              Seit Januar 2025 promoviere ich in den Deutschen Literaturwissenschaften, ebenfalls 
              an der Universität Zürich. Meine Doktorarbeit trägt den Titel: 
              <em> „Bilder, Objekte und Texte lesen. Meret Oppenheims Medienästhetik."</em>
            </p>
            
            <p>
              Neben meiner akademischen Arbeit spiele ich leidenschaftlich gern Klavier und nutze 
              – wie könnte es anders sein – jede freie Minute zum Lesen.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

