import styles from './page.module.css'

export default function DieIdee() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Die Idee</h1>
      </header>

      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.content}>
            <h2>Wissenschaft und Leidenschaft</h2>
            <p>
              Dieser Blog verbindet wissenschaftliche Analyse mit persönlicher Leidenschaft für 
              klassische Literatur. Mein Ziel ist es, Leseeindrücke zu teilen, die sowohl von 
              theoretischen Ansätzen als auch von der emotionalen Wirkung der Texte geprägt sind.
            </p>
            
            <h3>Warum klassische Literatur?</h3>
            <p>
              Klassische Werke haben die Kraft, über Jahrhunderte hinweg zu sprechen. Sie behandeln 
              universelle Themen und zeigen uns, wie Menschen zu verschiedenen Zeiten gedacht, 
              gefühlt und gelebt haben. Diese Zeitlosigkeit macht sie wertvoll für unser Verständnis 
              der menschlichen Erfahrung.
            </p>
            
            <h3>Wissenschaftliches Fundament</h3>
            <p>
              Mein Studium der Deutschen Literaturwissenschaft und Philosophie ermöglicht es mir, 
              literarische Werke nicht nur zu genießen, sondern auch zu analysieren. Ich nutze 
              theoretische Ansätze, um die Struktur, die Sprache und die Bedeutung der Texte zu 
              verstehen und zu erklären.
            </p>
            
            <h3>Gemeinsame Entdeckung</h3>
            <p>
              Literatur lebt durch die Auseinandersetzung mit ihr. Ich lade Sie ein, gemeinsam 
              diese Werke zu entdecken, zu diskutieren und ihre Bedeutung für uns heute zu erkunden. 
              Jede Leserin und jeder Leser bringt ihre eigene Perspektive mit, und diese Vielfalt 
              bereichert unser Verständnis.
            </p>
            
            <blockquote>
              "Ein Buch ist wie ein Garten, den man in der Tasche trägt." - Arabisches Sprichwort
            </blockquote>
          </div>
        </article>
      </main>
    </div>
  )
}

