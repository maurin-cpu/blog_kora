export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
}

// Blog-Posts über klassische Literatur
const posts: Post[] = [
  {
    slug: 'warum-klassiker-lesen',
    title: 'Warum Klassiker lesen?',
    excerpt: 'Eine Reflexion über den Wert klassischer Literatur und warum sie auch heute noch relevant ist.',
    content: `
      <h2>Die Zeitlosigkeit der Klassiker</h2>
      <p>Klassische Literatur hat etwas Zeitloses an sich. Sie überdauert Generationen und spricht zu Leserinnen und Lesern über Jahrhunderte hinweg. Doch was macht diese Werke so besonders?</p>
      
      <h3>Universalität der Themen</h3>
      <p>Klassiker behandeln universelle menschliche Erfahrungen: Liebe, Verlust, Hoffnung, Verzweiflung, Macht, Moral. Diese Themen sind zeitlos und berühren uns unabhängig von unserer historischen Situation.</p>
      
      <h3>Sprachliche Meisterschaft</h3>
      <p>Die großen Klassiker zeichnen sich durch ihre sprachliche Präzision und Schönheit aus. Jeder Satz ist durchdacht, jedes Wort trägt zur Gesamtkomposition bei. Diese Meisterschaft inspiriert und lehrt uns über die Möglichkeiten der Sprache.</p>
      
      <h3>Kulturelles Erbe</h3>
      <p>Klassische Werke sind Teil unseres kulturellen Erbes. Sie prägen unser Denken, unsere Sprache und unsere Vorstellungswelt. Sie zu lesen bedeutet, sich mit den Fundamenten unserer Kultur auseinanderzusetzen.</p>
      
      <blockquote>
        "Ein Klassiker ist ein Buch, das nie aufhört zu sagen, was es zu sagen hat." - Italo Calvino
      </blockquote>
      
      <p>In diesem Blog möchte ich gemeinsam mit Ihnen diese Schätze entdecken und ihre Bedeutung für uns heute erkunden.</p>
    `,
    date: '2025-01-15',
    author: 'Kora Schild',
  },
  {
    slug: 'gemeinsam-klassiker-entdecken',
    title: 'Gemeinsam Klassiker entdecken – Eine Einladung zum Lesen',
    excerpt: 'Eine Einladung, gemeinsam die Welt der klassischen Literatur zu erkunden und zu diskutieren.',
    content: `
      <h2>Eine gemeinsame Reise</h2>
      <p>Dieser Blog soll nicht nur ein Ort sein, an dem ich meine Leseeindrücke teile, sondern auch ein Raum für gemeinsame Entdeckungen und Diskussionen über klassische Literatur.</p>
      
      <h3>Wissenschaftliches Fundament</h3>
      <p>Mein Studium der Deutschen Literaturwissenschaft und Philosophie an der Universität Zürich ermöglicht es mir, meine Lektüreerfahrungen mit theoretischen Ansätzen zu untermauern. Ich möchte zeigen, wie wissenschaftliche Methoden unser Verständnis literarischer Werke vertiefen können.</p>
      
      <h3>Persönliche Leseeindrücke</h3>
      <p>Gleichzeitig soll dieser Blog nicht nur akademisch sein. Literatur berührt uns auf einer persönlichen Ebene, und diese Erfahrungen möchte ich mit Ihnen teilen. Wie wirken diese Werke auf uns? Was können wir aus ihnen lernen?</p>
      
      <h3>Vielfalt der Perspektiven</h3>
      <p>Jede Leserin und jeder Leser bringt ihre eigene Perspektive mit. Ich lade Sie ein, Ihre Gedanken und Eindrücke zu teilen. Gemeinsam können wir die Tiefe und Vielfalt klassischer Literatur erkunden.</p>
      
      <p>Lassen Sie uns gemeinsam diese wunderbaren Werke entdecken und ihre Bedeutung für uns heute verstehen.</p>
    `,
    date: '2025-01-10',
    author: 'Kora Schild',
  },
  {
    slug: 'meret-oppenheim-medienaesthetik',
    title: 'Bilder, Objekte und Texte lesen: Meret Oppenheims Medienästhetik',
    excerpt: 'Ein Einblick in meine Doktorarbeit über Meret Oppenheim und die Verbindung zwischen verschiedenen Medien in ihrem Werk.',
    content: `
      <h2>Zwischen den Medien</h2>
      <p>Meine Doktorarbeit beschäftigt sich mit Meret Oppenheims Medienästhetik – wie sie Bilder, Objekte und Texte in ihrem Werk verbindet und neue Lesarten eröffnet.</p>
      
      <h3>Die Künstlerin Meret Oppenheim</h3>
      <p>Meret Oppenheim (1913-1985) war eine Schweizer Künstlerin, die in verschiedenen Medien arbeitete: Malerei, Skulptur, aber auch Literatur. Ihre Werke überschreiten die Grenzen zwischen den Künsten.</p>
      
      <h3>Medienübergreifende Lektüre</h3>
      <p>In meiner Arbeit untersuche ich, wie wir Texte, Bilder und Objekte gemeinsam lesen können. Wie ergänzen sich diese verschiedenen Medien? Welche neuen Bedeutungen entstehen durch ihre Verbindung?</p>
      
      <h3>Methodischer Ansatz</h3>
      <p>Die Analyse verbindet literaturwissenschaftliche Methoden mit kunsthistorischen Ansätzen. Es geht darum, die spezifischen Eigenschaften jedes Mediums zu verstehen und gleichzeitig ihre Wechselwirkungen zu erforschen.</p>
      
      <p>Diese Forschung zeigt, wie wichtig es ist, über die Grenzen einzelner Disziplinen hinauszudenken und verschiedene Formen der Repräsentation gemeinsam zu betrachten.</p>
    `,
    date: '2025-01-05',
    author: 'Kora Schild',
  },
]

export async function getPosts(): Promise<Post[]> {
  // In einer echten Anwendung würden Sie hier Daten aus einer Datenbank oder CMS laden
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}

